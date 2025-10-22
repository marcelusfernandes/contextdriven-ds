#!/usr/bin/env ts-node
/**
 * Script de Validação de Tokens
 * 
 * Compara tokens.ts (híbrido/otimizado) com tokens-df.ts (direto do Figma)
 * para garantir que nenhum token foi perdido na refatoração.
 * 
 * Uso:
 *   npx ts-node scripts/validate_tokens.ts
 *   
 * Saída:
 *   ✅ Todos os tokens cobertos
 *   ⚠️ Tokens faltando em tokens.ts
 *   📊 Relatório de cobertura
 */

import * as fs from 'fs'
import * as path from 'path'

// ================================================================================
// TYPES
// ================================================================================

type TokenValue = string | number | boolean | object
type TokenPath = string
type ValidationResult = {
  covered: TokenPath[]
  missing: TokenPath[]
  mismatch: Array<{
    path: TokenPath
    expected: TokenValue
    actual: TokenValue
  }>
  extraInOptimized: TokenPath[]
}

// ================================================================================
// HELPERS
// ================================================================================

/**
 * Extrai todos os paths de tokens de um objeto de forma recursiva
 */
function extractTokenPaths(
  obj: any,
  prefix: string = '',
  paths: Map<string, any> = new Map()
): Map<string, any> {
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key
    
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      // Recursão para objetos aninhados
      extractTokenPaths(value, currentPath, paths)
    } else {
      // Valor primitivo - adiciona ao mapa
      paths.set(currentPath, value)
    }
  }
  
  return paths
}

/**
 * Normaliza valores para comparação (ignora diferenças triviais)
 */
function normalizeValue(value: any): any {
  if (typeof value === 'string') {
    // Normaliza cores hex
    return value.toLowerCase().trim()
  }
  if (typeof value === 'number') {
    // Arredonda números para evitar problemas de precisão
    return Math.round(value * 1000) / 1000
  }
  return value
}

/**
 * Verifica se dois valores são equivalentes
 */
function valuesMatch(val1: any, val2: any): boolean {
  const norm1 = normalizeValue(val1)
  const norm2 = normalizeValue(val2)
  
  return norm1 === norm2
}

/**
 * Carrega e importa um arquivo de tokens
 */
async function loadTokens(filePath: string): Promise<any> {
  try {
    // Resolve caminho absoluto
    const absolutePath = path.resolve(process.cwd(), filePath)
    
    // Deleta do cache para garantir fresh import
    delete require.cache[require.resolve(absolutePath)]
    
    // Importa o módulo
    const module = require(absolutePath)
    
    return module.tokens || module.default?.tokens || module
  } catch (error) {
    console.error(`❌ Erro ao carregar ${filePath}:`, error)
    throw error
  }
}

/**
 * Categoriza paths por componente
 */
function categorizeByComponent(paths: TokenPath[]): Map<string, TokenPath[]> {
  const categories = new Map<string, TokenPath[]>()
  
  for (const path of paths) {
    const parts = path.split('.')
    const component = parts[0] // Primeira parte é o componente/categoria
    
    if (!categories.has(component)) {
      categories.set(component, [])
    }
    categories.get(component)!.push(path)
  }
  
  return categories
}

// ================================================================================
// VALIDATION LOGIC
// ================================================================================

/**
 * Compara dois objetos de tokens e retorna resultado da validação
 */
function validateTokens(
  directTokens: any,
  optimizedTokens: any
): ValidationResult {
  // Extrai todos os paths
  const directPaths = extractTokenPaths(directTokens)
  const optimizedPaths = extractTokenPaths(optimizedTokens)
  
  const result: ValidationResult = {
    covered: [],
    missing: [],
    mismatch: [],
    extraInOptimized: [],
  }
  
  // Verifica cobertura (tokens-df.ts → tokens.ts)
  for (const [path, expectedValue] of directPaths.entries()) {
    if (optimizedPaths.has(path)) {
      const actualValue = optimizedPaths.get(path)
      
      if (valuesMatch(expectedValue, actualValue)) {
        result.covered.push(path)
      } else {
        result.mismatch.push({
          path,
          expected: expectedValue,
          actual: actualValue,
        })
      }
    } else {
      result.missing.push(path)
    }
  }
  
  // Verifica tokens extras em tokens.ts (podem ser refatorações)
  for (const path of optimizedPaths.keys()) {
    if (!directPaths.has(path)) {
      result.extraInOptimized.push(path)
    }
  }
  
  return result
}

// ================================================================================
// REPORTING
// ================================================================================

/**
 * Gera relatório colorido no console
 */
function printReport(result: ValidationResult): void {
  const total = result.covered.length + result.missing.length + result.mismatch.length
  const coveragePercent = ((result.covered.length / total) * 100).toFixed(2)
  
  console.log('\n' + '='.repeat(80))
  console.log('📊 RELATÓRIO DE VALIDAÇÃO DE TOKENS')
  console.log('='.repeat(80) + '\n')
  
  // Estatísticas gerais
  console.log('📈 Estatísticas:')
  console.log(`   Total de tokens (tokens-df.ts): ${total}`)
  console.log(`   ✅ Cobertos: ${result.covered.length} (${coveragePercent}%)`)
  console.log(`   ⚠️  Faltando: ${result.missing.length}`)
  console.log(`   🔄 Incompatíveis: ${result.mismatch.length}`)
  console.log(`   ➕ Extras em tokens.ts: ${result.extraInOptimized.length}`)
  console.log('')
  
  // Tokens faltando
  if (result.missing.length > 0) {
    console.log('⚠️  TOKENS FALTANDO EM tokens.ts:')
    console.log('─'.repeat(80))
    
    const categorized = categorizeByComponent(result.missing)
    for (const [component, paths] of categorized.entries()) {
      console.log(`\n   📦 ${component} (${paths.length} tokens):`)
      paths.slice(0, 10).forEach(p => console.log(`      - ${p}`))
      if (paths.length > 10) {
        console.log(`      ... e mais ${paths.length - 10} tokens`)
      }
    }
    console.log('')
  }
  
  // Valores incompatíveis
  if (result.mismatch.length > 0) {
    console.log('🔄 VALORES INCOMPATÍVEIS:')
    console.log('─'.repeat(80))
    
    result.mismatch.slice(0, 20).forEach(({ path, expected, actual }) => {
      console.log(`\n   🔸 ${path}`)
      console.log(`      Esperado (tokens-df): ${JSON.stringify(expected)}`)
      console.log(`      Atual (tokens):       ${JSON.stringify(actual)}`)
    })
    
    if (result.mismatch.length > 20) {
      console.log(`\n   ... e mais ${result.mismatch.length - 20} incompatibilidades`)
    }
    console.log('')
  }
  
  // Tokens extras (informativo)
  if (result.extraInOptimized.length > 0) {
    console.log('ℹ️  TOKENS EXTRAS EM tokens.ts (refatoração/primitivos):')
    console.log('─'.repeat(80))
    
    const categorized = categorizeByComponent(result.extraInOptimized)
    for (const [component, paths] of categorized.entries()) {
      console.log(`   📦 ${component}: ${paths.length} tokens`)
    }
    console.log('\n   💡 Nota: Tokens extras são esperados (primitivos, helpers, etc.)')
    console.log('')
  }
  
  // Conclusão
  console.log('='.repeat(80))
  if (result.missing.length === 0 && result.mismatch.length === 0) {
    console.log('✅ VALIDAÇÃO COMPLETA: Todos os tokens cobertos!')
    console.log('   tokens.ts cobre 100% dos tokens de tokens-df.ts')
  } else {
    console.log('❌ VALIDAÇÃO FALHOU:')
    if (result.missing.length > 0) {
      console.log(`   - ${result.missing.length} tokens faltando em tokens.ts`)
    }
    if (result.mismatch.length > 0) {
      console.log(`   - ${result.mismatch.length} valores incompatíveis`)
    }
    console.log('\n   📝 Ação requerida: Sincronizar tokens.ts com tokens-df.ts')
  }
  console.log('='.repeat(80) + '\n')
}

/**
 * Salva relatório JSON para análise posterior
 */
function saveJsonReport(result: ValidationResult, outputPath: string): void {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: result.covered.length + result.missing.length + result.mismatch.length,
      covered: result.covered.length,
      missing: result.missing.length,
      mismatch: result.mismatch.length,
      extra: result.extraInOptimized.length,
      coverage: ((result.covered.length / (result.covered.length + result.missing.length + result.mismatch.length)) * 100).toFixed(2) + '%',
    },
    details: result,
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), 'utf-8')
  console.log(`📄 Relatório JSON salvo em: ${outputPath}\n`)
}

// ================================================================================
// MAIN
// ================================================================================

async function main() {
  console.log('🔍 Iniciando validação de tokens...\n')
  
  try {
    // Carrega os tokens
    console.log('📂 Carregando tokens-df.ts (Design Figma)...')
    const directTokens = await loadTokens('./tokens-df.ts')
    
    console.log('📂 Carregando tokens.ts (Otimizado)...')
    const optimizedTokens = await loadTokens('./tokens.ts')
    
    console.log('✅ Arquivos carregados com sucesso!\n')
    
    // Valida
    console.log('🔄 Comparando estruturas de tokens...')
    const result = validateTokens(directTokens, optimizedTokens)
    
    // Relatório
    printReport(result)
    
    // Salva JSON
    const reportPath = path.join(process.cwd(), 'scripts', 'token-validation-report.json')
    saveJsonReport(result, reportPath)
    
    // Exit code
    if (result.missing.length > 0 || result.mismatch.length > 0) {
      process.exit(1) // Falha se houver inconsistências
    } else {
      process.exit(0) // Sucesso
    }
    
  } catch (error) {
    console.error('❌ Erro durante validação:', error)
    process.exit(1)
  }
}

// Executa
if (require.main === module) {
  main()
}

export { validateTokens, extractTokenPaths, normalizeValue }

