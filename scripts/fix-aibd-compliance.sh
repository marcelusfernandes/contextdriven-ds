#!/bin/bash

# Script de Correção de Conformidade AIBD
# Data: 22/10/2025
# Descrição: Corrige componentes para seguir regras AIBD

set -e

echo "🚀 Iniciando correções de conformidade AIBD..."
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de correções
FIXES=0

# =============================================================================
# FASE 1: Converter Interface → Type (CRÍTICO)
# =============================================================================

echo "${YELLOW}📝 Fase 1: Convertendo interfaces para type aliases...${NC}"
echo ""

COMPONENT_FILES=(
  "components/Button/Button.tsx"
  "components/ButtonIcon/ButtonIcon.tsx"
  "components/Checkbox/Checkbox.tsx"
  "components/RadioButton/RadioButton.tsx"
  "components/InputField/InputField.tsx"
  "components/InputSingle/InputSingle.tsx"
  "components/InputSelect/InputSelect.tsx"
  "components/InputTextarea/InputTextarea.tsx"
  "components/ListMenu/ListMenu.tsx"
  "components/ListMenuItem/ListMenuItem.tsx"
)

for file in "${COMPONENT_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  Processando: $file"
    
    # Backup
    cp "$file" "$file.backup"
    
    # Converter: export interface X extends Y { => export type X = Y & {
    sed -i '' 's/export interface \([A-Za-z]*Props\) extends \([A-Za-z<>, ]*\) {/export type \1 = \2 \& {/g' "$file"
    
    # Converter: export interface X { => export type X = {
    sed -i '' 's/export interface \([A-Za-z]*Props\) {/export type \1 = {/g' "$file"
    
    FIXES=$((FIXES + 1))
    echo "    ${GREEN}✓${NC} Convertido"
  else
    echo "    ${RED}✗${NC} Arquivo não encontrado: $file"
  fi
done

echo ""
echo "${GREEN}✅ Fase 1 concluída: $FIXES arquivos convertidos${NC}"
echo ""

# =============================================================================
# FASE 2: Corrigir Imports do Tamagui
# =============================================================================

echo "${YELLOW}📦 Fase 2: Corrigindo imports do Tamagui...${NC}"
echo ""

TAMAGUI_FIXES=0

# Componentes principais
for file in "${COMPONENT_FILES[@]}"; do
  if [ -f "$file" ]; then
    # Verificar se usa 'tamagui'
    if grep -q "from 'tamagui'" "$file" || grep -q 'from "tamagui"' "$file"; then
      echo "  Corrigindo: $file"
      
      # Substituir 'tamagui' por '@tamagui/core'
      sed -i '' "s/from 'tamagui'/from '@tamagui\/core'/g" "$file"
      sed -i '' 's/from "tamagui"/from "@tamagui\/core"/g' "$file"
      
      TAMAGUI_FIXES=$((TAMAGUI_FIXES + 1))
      echo "    ${GREEN}✓${NC} Imports corrigidos"
    else
      echo "  ${GREEN}✓${NC} $file já está correto"
    fi
  fi
done

echo ""
echo "${GREEN}✅ Fase 2 concluída: $TAMAGUI_FIXES imports corrigidos${NC}"
echo ""

# =============================================================================
# FASE 3: Adicionar Import Type para GetProps
# =============================================================================

echo "${YELLOW}🔤 Fase 3: Adicionando 'import type' para tipos...${NC}"
echo ""

TYPE_FIXES=0

for file in "${COMPONENT_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  Processando: $file"
    
    # Verificar se tem GetProps sem type
    if grep -q "import { .*GetProps.* } from" "$file" && ! grep -q "import type { .*GetProps.* }" "$file"; then
      # Extrair a linha de import
      import_line=$(grep "import { .*GetProps.* } from" "$file" | head -1)
      
      # Separar valores e tipos
      # Isso é complexo, vamos fazer manualmente após
      echo "    ${YELLOW}⚠${NC}  Requer revisão manual para separar imports"
      
    else
      echo "    ${GREEN}✓${NC} Já usa import type ou não tem GetProps"
    fi
  fi
done

echo ""
echo "${GREEN}✅ Fase 3: Verificada (requer revisão manual)${NC}"
echo ""

# =============================================================================
# RESUMO
# =============================================================================

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "${GREEN}📊 RESUMO DAS CORREÇÕES${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  ✅ Interfaces convertidas para types: $FIXES"
echo "  ✅ Imports Tamagui corrigidos: $TAMAGUI_FIXES"
echo "  ⚠️  Import type: Requer revisão manual"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verificar se há backups
if ls components/*/*.backup 1> /dev/null 2>&1; then
  echo "${YELLOW}📁 Backups criados:${NC}"
  ls components/*/*.backup | sed 's/^/  /'
  echo ""
  echo "Para remover backups após verificação:"
  echo "  ${YELLOW}find components -name '*.backup' -delete${NC}"
  echo ""
fi

echo "${GREEN}✨ Correções concluídas!${NC}"
echo ""
echo "Próximos passos:"
echo "  1. Revisar as mudanças: ${YELLOW}git diff${NC}"
echo "  2. Testar o build: ${YELLOW}yarn build${NC}"
echo "  3. Testar Storybook: ${YELLOW}yarn storybook${NC}"
echo "  4. Se tudo estiver OK, commit: ${YELLOW}git add . && git commit -m 'fix: Apply AIBD compliance rules'${NC}"
echo ""

