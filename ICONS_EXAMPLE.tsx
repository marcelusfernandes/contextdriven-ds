/**
 * EXEMPLO DE USO DOS ÍCONES SVG
 * 
 * Este arquivo demonstra como usar os ícones do Design System.
 * Existem 3 formas de usar ícones:
 * 
 * 1. Componente Icon (RECOMENDADO) - com tokens e variantes Tamagui
 * 2. Ícones pré-estilizados - atalhos para ícones comuns
 * 3. Importação direta - para casos específicos ou ícones não mapeados
 */

import React from 'react'
import { Stack, YStack, XStack } from '@tamagui/core'
import { tokens } from './tokens'

// ===============================================
// FORMA 1: Componente Icon (RECOMENDADO)
// ===============================================
import { Icon } from './components/Icon'

export function IconsExampleWithComponent() {
  return (
    <Stack flexDirection="row" gap="$4" padding="$6">
      {/* Usando variantes */}
      <Icon name="add-circle-filled" size="lg" color="brand" />
      
      {/* Usando tokens */}
      <Icon name="checkmark-circle-filled" width="$8" height="$8" fill="$successGreen" />
      
      {/* Usando valores customizados */}
      <Icon name="star-filled" width={32} height={32} fill={tokens.color.zeYellow} />
      
      {/* Ícones outline */}
      <Icon name="heart-outlined" size="xl" color="error" />
    </Stack>
  )
}

// ===============================================
// FORMA 2: Ícones Pré-Estilizados
// ===============================================
import { AddIcon, CheckmarkIcon, CloseIcon, SearchIcon } from './components/Icon'

export function IconsExamplePreStyled() {
  return (
    <XStack gap="$4" padding="$6">
      <AddIcon size="lg" fill="$successGreen" />
      <CheckmarkIcon size="md" fill="$black" />
      <CloseIcon size="sm" fill="$errorRed" />
      <SearchIcon size="xl" fill="$gray600" />
    </XStack>
  )
}

// ===============================================
// FORMA 3: Importação Direta (casos específicos)
// ===============================================
import AddCircleFilled from './assets/icons/AddCircleFilled.svg'
import AddCircleOutlined from './assets/icons/AddCircleOutlined.svg'
import ArrowDownloadFilled from './assets/icons/ArrowDownloadFilled.svg'

export function IconsExampleDirect() {
  return (
    <Stack flexDirection="row" gap={16} padding={24}>
      {/* Ícone básico */}
      <AddCircleFilled width={32} height={32} fill={tokens.color.zeYellow} />
      
      {/* Ícone outline */}
      <AddCircleOutlined width={32} height={32} fill={tokens.color.gray800} />
      
      {/* Ícone com cor diferente */}
      <ArrowDownloadFilled width={32} height={32} fill={tokens.color.successGreen} />
    </Stack>
  )
}

// ===============================================
// EXEMPLO: Usar ícone no Button
// ===============================================
import { Button } from './components/Button'

export function ButtonWithIcon() {
  return (
    <YStack gap="$4">
      {/* RECOMENDADO: Com componente Icon */}
      <Button
        text="Adicionar Item"
        variant="primary"
        size="medium"
        iconLeft={<Icon name="add-circle-filled" size="sm" />}
        onPress={() => console.log('Adicionar')}
      />
      
      {/* Com ícone pré-estilizado */}
      <Button
        text="Confirmar"
        variant="primary"
        size="medium"
        iconLeft={<CheckmarkIcon size="sm" />}
        onPress={() => console.log('Confirmar')}
      />
      
      {/* Com importação direta */}
      <Button
        text="Download"
        variant="secondary"
        size="medium"
        iconLeft={
          <ArrowDownloadFilled 
            width={20} 
            height={20} 
            fill={tokens.color.black}
          />
        }
        onPress={() => console.log('Download')}
      />
    </YStack>
  )
}

