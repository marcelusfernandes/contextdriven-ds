#!/usr/bin/env node
/**
 * Script de Validação de Tokens (JavaScript)
 * 
 * Versão simplificada em JS puro para validação básica
 * 
 * Uso:
 *   node scripts/validate_tokens.js
 */

const fs = require('fs')
const path = require('path')

// ================================================================================
// HELPERS
// ================================================================================

/**
 * Extrai todos os paths de tokens de um objeto de forma recursiva
 */
function extractTokenPaths(obj, prefix = '', paths = new Map()) {
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key
    
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      extractTokenPaths(value, currentPath, paths)
    } else {
      paths.set(currentPath, value)
    }
  }
  
  return paths
}

/**
 * Normaliza valores para comparação
 */
function normalizeValue(value) {
  if (typeof value === 'string') {
    return value.toLowerCase().trim()
  }
  if (typeof value === 'number') {
    return Math.round(value * 1000) / 1000
  }
  return value
}

/**
 * Verifica se dois valores são equivalentes
 */
function valuesMatch(val1, val2) {
  const norm1 = normalizeValue(val1)
  const norm2 = normalizeValue(val2)
  return norm1 === norm2
}

/**
 * Categoriza paths por componente
 */
function categorizeByComponent(paths) {
  const categories = new Map()
  
  for (const path of paths) {
    const parts = path.split('.')
    const component = parts[0]
    
    if (!categories.has(component)) {
      categories.set(component, [])
    }
    categories.get(component).push(path)
  }
  
  return categories
}

/**
 * Carrega tokens dinamicamente
 */
function loadTokens(filePath) {
  try {
    const absolutePath = path.resolve(process.cwd(), filePath)
    
    // Limpa cache
    delete require.cache[absolutePath]
    
    const module = require(absolutePath)
    return module.tokens || module.default?.tokens || module
  } catch (error) {
    console.error(`❌ Erro ao carregar ${filePath}:`, error.message)
    throw error
  }
}

// ================================================================================
// VALIDATION
// ================================================================================

function validateTokens(directTokens, optimizedTokens) {
  const directPaths = extractTokenPaths(directTokens)
  const optimizedPaths = extractTokenPaths(optimizedTokens)
  
  const result = {
    covered: [],
    missing: [],
    mismatch: [],
    extraInOptimized: [],
  }
  
  // Verifica cobertura
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
  
  // Tokens extras
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

function printReport(result) {
  const total = result.covered.length + result.missing.length + result.mismatch.length
  const coveragePercent = ((result.covered.length / total) * 100).toFixed(2)
  
  console.log('\n' + '='.repeat(80))
  console.log('📊 RELATÓRIO DE VALIDAÇÃO DE TOKENS')
  console.log('='.repeat(80) + '\n')
  
  console.log('📈 Estatísticas:')
  console.log(`   Total de tokens (tokens-df.ts): ${total}`)
  console.log(`   ✅ Cobertos: ${result.covered.length} (${coveragePercent}%)`)
  console.log(`   ⚠️  Faltando: ${result.missing.length}`)
  console.log(`   🔄 Incompatíveis: ${result.mismatch.length}`)
  console.log(`   ➕ Extras em tokens.ts: ${result.extraInOptimized.length}`)
  console.log('')
  
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
  
  if (result.mismatch.length > 0) {
    console.log('🔄 VALORES INCOMPATÍVEIS:')
    console.log('─'.repeat(80))
    
    result.mismatch.slice(0, 20).forEach(({ path, expected, actual }) => {
      console.log(`\n   🔸 ${path}`)
      console.log(`      Esperado: ${JSON.stringify(expected)}`)
      console.log(`      Atual:    ${JSON.stringify(actual)}`)
    })
    
    if (result.mismatch.length > 20) {
      console.log(`\n   ... e mais ${result.mismatch.length - 20} incompatibilidades`)
    }
    console.log('')
  }
  
  if (result.extraInOptimized.length > 0) {
    console.log('ℹ️  TOKENS EXTRAS EM tokens.ts:')
    console.log('─'.repeat(80))
    
    const categorized = categorizeByComponent(result.extraInOptimized)
    for (const [component, paths] of categorized.entries()) {
      console.log(`   📦 ${component}: ${paths.length} tokens`)
    }
    console.log('\n   💡 Nota: Tokens extras são esperados (primitivos, helpers, etc.)')
    console.log('')
  }
  
  console.log('='.repeat(80))
  if (result.missing.length === 0 && result.mismatch.length === 0) {
    console.log('✅ VALIDAÇÃO COMPLETA: Todos os tokens cobertos!')
    console.log('   tokens.ts cobre 100% dos tokens de tokens-df.ts')
  } else {
    console.log('❌ VALIDAÇÃO FALHOU:')
    if (result.missing.length > 0) {
      console.log(`   - ${result.missing.length} tokens faltando`)
    }
    if (result.mismatch.length > 0) {
      console.log(`   - ${result.mismatch.length} valores incompatíveis`)
    }
  }
  console.log('='.repeat(80) + '\n')
}

function saveJsonReport(result, outputPath) {
  const total = result.covered.length + result.missing.length + result.mismatch.length
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total,
      covered: result.covered.length,
      missing: result.missing.length,
      mismatch: result.mismatch.length,
      extra: result.extraInOptimized.length,
      coverage: ((result.covered.length / total) * 100).toFixed(2) + '%',
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
    console.log('📂 Carregando tokens-df.ts (Design Figma)...')
    const directTokens = loadTokens('./tokens-df.ts')
    
    console.log('📂 Carregando tokens.ts (Otimizado)...')
    const optimizedTokens = loadTokens('./tokens.ts')
    
    console.log('✅ Arquivos carregados com sucesso!\n')
    
    console.log('🔄 Comparando estruturas de tokens...')
    const result = validateTokens(directTokens, optimizedTokens)
    
    printReport(result)
    
    const reportPath = path.join(process.cwd(), 'scripts', 'token-validation-report.json')
    saveJsonReport(result, reportPath)
    
    if (result.missing.length > 0 || result.mismatch.length > 0) {
      process.exit(1)
    } else {
      process.exit(0)
    }
    
  } catch (error) {
    console.error('❌ Erro durante validação:', error.message)
    process.exit(1)
  }
}

main()

