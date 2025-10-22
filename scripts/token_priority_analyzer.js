#!/usr/bin/env node
/**
 * Analisador de Prioridades para Sincronização de Tokens
 * 
 * Lê o relatório de validação e sugere ordem de trabalho
 * 
 * Uso:
 *   node scripts/token_priority_analyzer.js
 */

const fs = require('fs')
const path = require('path')

// ================================================================================
// CONFIGURAÇÃO
// ================================================================================

// Peso de cada componente (baseado em uso no app)
const COMPONENT_PRIORITY = {
  // Prioridade ALTA (componentes básicos usados em todo app)
  button: 10,
  text: 10,
  icon: 10,
  loading: 9,
  
  // Prioridade MÉDIA-ALTA (formulários são críticos)
  inputSingle: 8,
  inputField: 8,
  inputTextarea: 7,
  inputSelect: 7,
  checkbox: 7,
  radioButton: 7,
  
  // Prioridade MÉDIA (navegação e feedback)
  buttonIcon: 6,
  linkAction: 6,
  snackbar: 6,
  listMenuItem: 5,
  
  // Prioridade MÉDIA-BAIXA (componentes específicos)
  toggle: 5,
  dropdownButton: 5,
  dismissButton: 4,
  
  // Prioridade BAIXA (componentes decorativos)
  tag: 3,
  compoundTag: 2,
}

// ================================================================================
// HELPERS
// ================================================================================

function loadReport() {
  const reportPath = path.join(process.cwd(), 'scripts', 'token-validation-report.json')
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ Relatório não encontrado!')
    console.error('   Execute primeiro: npm run tokens:validate\n')
    process.exit(1)
  }
  
  return JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
}

function categorizeTokens(tokens) {
  const categories = {}
  
  for (const token of tokens) {
    const component = token.split('.')[0]
    
    if (!categories[component]) {
      categories[component] = []
    }
    categories[component].push(token)
  }
  
  return categories
}

function calculatePriority(component, missingCount) {
  const basePriority = COMPONENT_PRIORITY[component] || 1
  const urgency = Math.min(missingCount / 10, 10) // Quanto mais faltando, mais urgente
  
  return basePriority * (1 + urgency * 0.1)
}

// ================================================================================
// ANALYSIS
// ================================================================================

function analyzeReport(report) {
  console.log('🔍 Analisando relatório de validação...\n')
  
  const { missing, mismatch } = report.details
  
  // Categoriza tokens faltando
  const missingByComponent = categorizeTokens(missing)
  const mismatchByComponent = categorizeTokens(mismatch.map(m => m.path))
  
  // Calcula pontuação de prioridade
  const priorities = []
  
  for (const [component, tokens] of Object.entries(missingByComponent)) {
    const missingCount = tokens.length
    const mismatchCount = mismatchByComponent[component]?.length || 0
    const totalIssues = missingCount + mismatchCount
    const priority = calculatePriority(component, missingCount)
    
    priorities.push({
      component,
      missingCount,
      mismatchCount,
      totalIssues,
      priority,
      status: getStatus(missingCount, mismatchCount),
    })
  }
  
  // Ordena por prioridade (maior primeiro)
  priorities.sort((a, b) => b.priority - a.priority)
  
  return priorities
}

function getStatus(missing, mismatch) {
  if (missing === 0 && mismatch === 0) return '✅ Completo'
  if (missing === 0 && mismatch > 0) return '🟡 Ajustes'
  if (missing < 10) return '🟢 Quase lá'
  if (missing < 50) return '🟡 Em progresso'
  return '🔴 Não implementado'
}

function estimateEffort(issues) {
  if (issues < 5) return '15min'
  if (issues < 20) return '1h'
  if (issues < 50) return '2-3h'
  if (issues < 100) return '4-6h'
  return '1 dia'
}

// ================================================================================
// REPORTING
// ================================================================================

function printAnalysis(priorities, report) {
  console.log('=' .repeat(90))
  console.log('🎯 ANÁLISE DE PRIORIDADES - SINCRONIZAÇÃO DE TOKENS')
  console.log('='.repeat(90) + '\n')
  
  console.log('📊 Resumo Geral:')
  console.log(`   Total de componentes com issues: ${priorities.length}`)
  console.log(`   Total de tokens faltando: ${report.summary.missing}`)
  console.log(`   Total de incompatibilidades: ${report.summary.mismatch}`)
  console.log(`   Cobertura atual: ${report.summary.coverage}\n`)
  
  // Top 5 prioridades
  console.log('🔥 TOP 5 PRIORIDADES (fazer primeiro):')
  console.log('─'.repeat(90))
  console.log(
    '  # | Componente         | Missing | Mismatch | Total | Esforço | Status'
  )
  console.log('─'.repeat(90))
  
  priorities.slice(0, 5).forEach((p, i) => {
    console.log(
      `  ${i + 1} | ${p.component.padEnd(18)} | ${String(p.missingCount).padStart(7)} | ` +
      `${String(p.mismatchCount).padStart(8)} | ${String(p.totalIssues).padStart(5)} | ` +
      `${estimateEffort(p.totalIssues).padEnd(7)} | ${p.status}`
    )
  })
  console.log('')
  
  // Componentes restantes
  if (priorities.length > 5) {
    console.log(`📋 Componentes Restantes (${priorities.length - 5}):`)
    console.log('─'.repeat(90))
    
    priorities.slice(5).forEach((p, i) => {
      console.log(
        `  ${i + 6} | ${p.component.padEnd(18)} | ${String(p.missingCount).padStart(7)} | ` +
        `${String(p.mismatchCount).padStart(8)} | ${String(p.totalIssues).padStart(5)} | ` +
        `${estimateEffort(p.totalIssues).padEnd(7)} | ${p.status}`
      )
    })
    console.log('')
  }
  
  // Estimativa de tempo total
  const totalEffort = priorities.reduce((sum, p) => {
    const hours = parseEffortToHours(estimateEffort(p.totalIssues))
    return sum + hours
  }, 0)
  
  console.log('⏱️  Estimativa de Esforço:')
  console.log(`   Total estimado: ~${Math.ceil(totalEffort)} horas (~${Math.ceil(totalEffort / 8)} dias úteis)`)
  console.log(`   Sprint (2 semanas): ${totalEffort <= 80 ? '✅ Viável' : '⚠️ Ajustar escopo'}\n`)
  
  // Plano de ação sugerido
  console.log('📝 PLANO DE AÇÃO SUGERIDO:')
  console.log('─'.repeat(90))
  
  const phases = [
    { name: 'Fase 1: Quick Wins', components: priorities.filter(p => p.totalIssues < 10) },
    { name: 'Fase 2: Médio Esforço', components: priorities.filter(p => p.totalIssues >= 10 && p.totalIssues < 50) },
    { name: 'Fase 3: Alto Esforço', components: priorities.filter(p => p.totalIssues >= 50) },
  ]
  
  phases.forEach((phase, i) => {
    if (phase.components.length === 0) return
    
    const phaseEffort = phase.components.reduce((sum, p) => {
      return sum + parseEffortToHours(estimateEffort(p.totalIssues))
    }, 0)
    
    console.log(`\n${phase.name} (~${Math.ceil(phaseEffort)}h):`)
    phase.components.forEach(p => {
      console.log(`   - ${p.component} (${p.totalIssues} issues, ${estimateEffort(p.totalIssues)})`)
    })
  })
  
  console.log('\n' + '='.repeat(90))
  console.log('💡 Dica: Comece pelos componentes de alta prioridade e baixo esforço!')
  console.log('='.repeat(90) + '\n')
}

function parseEffortToHours(effort) {
  if (effort.includes('min')) return 0.25
  if (effort === '1h') return 1
  if (effort.includes('2-3h')) return 2.5
  if (effort.includes('4-6h')) return 5
  if (effort.includes('dia')) return 8
  return 1
}

// ================================================================================
// MAIN
// ================================================================================

function main() {
  try {
    const report = loadReport()
    const priorities = analyzeReport(report)
    printAnalysis(priorities, report)
  } catch (error) {
    console.error('❌ Erro:', error.message)
    process.exit(1)
  }
}

main()

