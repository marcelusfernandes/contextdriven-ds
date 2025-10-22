#!/usr/bin/env node
/**
 * Script Runner de Validação de Tokens
 * 
 * Detecta automaticamente se ts-node está disponível e escolhe a melhor opção
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔍 Token Validation Runner\n')

// Verifica se ts-node está disponível
function hasTsNode() {
  try {
    execSync('npx ts-node --version', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

// Verifica se os arquivos de tokens existem
function checkTokenFiles() {
  const files = ['tokens.ts', 'tokens-df.ts']
  const missing = []
  
  for (const file of files) {
    const filePath = path.join(process.cwd(), file)
    if (!fs.existsSync(filePath)) {
      missing.push(file)
    }
  }
  
  return missing
}

function main() {
  // Verifica arquivos
  const missing = checkTokenFiles()
  if (missing.length > 0) {
    console.error('❌ Arquivos faltando:', missing.join(', '))
    console.error('   Por favor, execute o script da raiz do projeto.\n')
    process.exit(1)
  }
  
  // Tenta usar ts-node primeiro (mais robusto)
  if (hasTsNode()) {
    console.log('✅ ts-node detectado, usando versão TypeScript...\n')
    try {
      execSync('npx ts-node scripts/validate_tokens.ts', { 
        stdio: 'inherit',
        cwd: process.cwd()
      })
    } catch (error) {
      process.exit(error.status || 1)
    }
  } else {
    console.log('⚠️  ts-node não encontrado')
    console.log('   Instalando ts-node temporariamente...\n')
    
    try {
      // Instala ts-node temporariamente
      console.log('📦 npm install -D ts-node...')
      execSync('npm install -D ts-node', { stdio: 'inherit' })
      
      console.log('\n✅ ts-node instalado!\n')
      
      // Executa validação
      execSync('npx ts-node scripts/validate_tokens.ts', { 
        stdio: 'inherit',
        cwd: process.cwd()
      })
    } catch (error) {
      console.error('\n❌ Erro durante execução')
      process.exit(error.status || 1)
    }
  }
}

main()

