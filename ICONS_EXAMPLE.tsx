/**
 * EXEMPLO DE USO DOS ÍCONES SVG
 * 
 * Este arquivo demonstra como importar e usar os ícones SVG
 * customizados do Design System.
 */

import React from 'react'
import { Stack } from '@tamagui/core'
import { tokens } from './tokens'

// Importar ícones diretamente
import AddCircleFilled from './assets/icons/AddCircleFilled.svg'
import AddCircleOutlined from './assets/icons/AddCircleOutlined.svg'
import ArrowDownloadFilled from './assets/icons/ArrowDownloadFilled.svg'
import AppleOutlined from './assets/icons/AppleOutlined.svg'

export function IconsExample() {
  return (
    <Stack flexDirection="row" gap={16} padding={24}>
      {/* Ícone básico */}
      <AddCircleFilled width={32} height={32} fill={tokens.color.zeYellow} />
      
      {/* Ícone outline */}
      <AddCircleOutlined width={32} height={32} fill={tokens.color.gray800} />
      
      {/* Ícone com cor diferente */}
      <ArrowDownloadFilled width={32} height={32} fill={tokens.color.successGreen} />
      
      {/* Ícone da Apple */}
      <AppleOutlined width={32} height={32} fill={tokens.color.black} />
    </Stack>
  )
}

// EXEMPLO: Usar ícone no Button
import { Button } from './components/Button'

export function ButtonWithIcon() {
  return (
    <Button
      text="Adicionar Item"
      variant="primary"
      size="medium"
      iconLeft={
        <AddCircleFilled 
          width={20} 
          height={20} 
          fill={tokens.color.black}
        />
      }
      onPress={() => console.log('Adicionar')}
    />
  )
}

