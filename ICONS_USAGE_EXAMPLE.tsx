/**
 * Exemplo de Uso dos Ícones com @icons/
 * 
 * Este arquivo demonstra diferentes formas de usar os ícones
 * do design system com o atalho @icons/
 */

import React, { useState } from 'react'
import { YStack, XStack, Text } from 'tamagui'

// ================================================================================
// EXEMPLO 1: Importação Básica
// ================================================================================

import { Heartfilled, Heartoutlined } from '@icons'

export function Example1_BasicImport() {
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 1: Importação Básica</Text>
      <XStack gap="$4">
        <Heartfilled size="md" color="$color.primary" />
        <Heartoutlined size="md" color="$color.text" />
      </XStack>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO 2: Importação com Alias
// ================================================================================

import { 
  Checkboxesfilledunchecked as IconUnchecked,
  Checkboxesfilledchecked as IconChecked,
  Checkboxesfilledindeterminate as IconIndeterminate
} from '@icons'

export function Example2_WithAlias() {
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 2: Com Alias</Text>
      <XStack gap="$4">
        <IconUnchecked width={24} height={24} color="$color.text" />
        <IconChecked width={24} height={24} color="$color.primary" />
        <IconIndeterminate width={24} height={24} color="$color.warning" />
      </XStack>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO 3: Ícone Interativo
// ================================================================================

import { Starfilled, Staroutlined } from '@icons'

export function Example3_Interactive() {
  const [starred, setStarred] = useState(false)
  const StarIcon = starred ? Starfilled : Staroutlined
  
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 3: Interativo</Text>
      <StarIcon 
        size="lg"
        color={starred ? '$color.warning' : '$color.text'}
        onPress={() => setStarred(!starred)}
        cursor="pointer"
      />
      <Text fontSize="$3" color="$color.textSecondary">
        Status: {starred ? 'Favoritado' : 'Não favoritado'}
      </Text>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO 4: Diferentes Tamanhos
// ================================================================================

import { Settingsfilled } from '@icons'

export function Example4_Sizes() {
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 4: Tamanhos</Text>
      <XStack gap="$4" alignItems="center">
        <Settingsfilled size="xs" color="$color.text" />
        <Settingsfilled size="sm" color="$color.text" />
        <Settingsfilled size="md" color="$color.text" />
        <Settingsfilled size="lg" color="$color.text" />
        <Settingsfilled size="xl" color="$color.text" />
      </XStack>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO 5: Ícones com Tokens Customizados
// ================================================================================

import { Bellfilled } from '@icons'

export function Example5_WithTokens() {
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 5: Com Tokens</Text>
      <XStack gap="$4">
        <Bellfilled width="$4" height="$4" color="$color.primary" />
        <Bellfilled width="$5" height="$5" color="$color.error" />
        <Bellfilled width="$6" height="$6" color="$color.success" />
        <Bellfilled width="$8" height="$8" color="$color.warning" />
      </XStack>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO 6: Ícone Dinâmico Baseado em Estado
// ================================================================================

import { Eyefilled, Eyeofffilled } from '@icons'

export function Example6_DynamicIcon() {
  const [visible, setVisible] = useState(false)
  const Icon = visible ? Eyefilled : Eyeofffilled
  
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 6: Dinâmico</Text>
      <Icon 
        size="md"
        color="$color.text"
        onPress={() => setVisible(!visible)}
        cursor="pointer"
      />
      <Text fontSize="$3" color="$color.textSecondary">
        {visible ? 'Visível' : 'Oculto'}
      </Text>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO 7: Lista de Ícones
// ================================================================================

import { 
  Homefilled,
  Searchfilled,
  Personfilled,
  Shoppingbagfilled 
} from '@icons'

export function Example7_IconList() {
  const icons = [
    { Icon: Homefilled, label: 'Início' },
    { Icon: Searchfilled, label: 'Buscar' },
    { Icon: Personfilled, label: 'Perfil' },
    { Icon: Shoppingbagfilled, label: 'Carrinho' },
  ]
  
  return (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Exemplo 7: Lista de Ícones</Text>
      <XStack gap="$6">
        {icons.map(({ Icon, label }) => (
          <YStack key={label} gap="$2" alignItems="center">
            <Icon size="md" color="$color.primary" />
            <Text fontSize="$2" color="$color.textSecondary">{label}</Text>
          </YStack>
        ))}
      </XStack>
    </YStack>
  )
}

// ================================================================================
// EXEMPLO COMPLETO: Todos os Exemplos Juntos
// ================================================================================

export function AllExamples() {
  return (
    <YStack gap="$8" padding="$6">
      <Text fontSize="$7" fontWeight="700">
        Exemplos de Uso dos Ícones
      </Text>
      
      <Example1_BasicImport />
      <Example2_WithAlias />
      <Example3_Interactive />
      <Example4_Sizes />
      <Example5_WithTokens />
      <Example6_DynamicIcon />
      <Example7_IconList />
    </YStack>
  )
}

// ================================================================================
// COMO USAR ESTE ARQUIVO
// ================================================================================

/*

1. Importe o componente que deseja usar:
   import { Example1_BasicImport } from './ICONS_USAGE_EXAMPLE'

2. Use no seu componente:
   <Example1_BasicImport />

3. Ou use o componente completo:
   import { AllExamples } from './ICONS_USAGE_EXAMPLE'
   <AllExamples />

*/

