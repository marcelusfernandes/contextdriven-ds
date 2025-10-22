import type { Meta, StoryObj } from '@storybook/react'
import { ListMenuItem } from './ListMenuItem'
import { Text } from '@tamagui/core'
import { YStack, XStack } from '@tamagui/stacks'

/**
 * Mock Icons para demonstração
 */
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path 
      d="M3 9L12 2L21 9V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9Z" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path 
      d="M12 1V4M12 20V23M23 12H20M4 12H1M20.49 20.49L18.36 18.36M5.64 5.64L3.51 3.51M20.49 3.51L18.36 5.64M5.64 18.36L3.51 20.49" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path 
      d="M9 6L15 12L9 18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * # ListMenuItem
 * 
 * Item individual de lista - componente base usado pelo ListMenu.
 * 
 * ## Estados Interativos
 * 
 * Gerencia automaticamente 4 estados visuais:
 * - **Normal:** Background transparente
 * - **Hover:** Background gray100 (ao passar o mouse)
 * - **Active:** Background gray200 (ao clicar/pressionar)
 * - **Focus:** Background gray200 + borda gray300 (ao focar via teclado)
 * 
 * ## Estrutura Flexível
 * 
 * - **Leading:** Ícone à esquerda (opcional) - 20px (small) ou 24px (medium)
 * - **Text:** Conteúdo principal (obrigatório)
 * - **Trailing:** Ícone à direita (opcional) - 20px (small) ou 24px (medium)
 * 
 * ## Notas Importantes
 * 
 * - ❌ **SEM estado Error** (não se aplica a itens de lista)
 * - ❌ **SEM estado Disabled** (não se aplica a itens de lista)
 * - ✅ **Gap interno:** 8px consistente entre elementos
 * - ✅ **Acessível:** Suporta navegação por teclado
 * 
 * ## Quando usar
 * 
 * - Itens de menu de navegação
 * - Listas de configurações
 * - Opções de dropdown
 * - Itens de sidebar
 * - Action sheets
 */
const meta = {
  title: 'Lists/ListMenuItem',
  component: ListMenuItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Item individual de lista com 4 estados interativos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do item',
    },
    children: {
      control: 'text',
      description: 'Texto do item',
    },
  },
  decorators: [
    (Story) => (
      <YStack padding="$4" width={400}>
        <Story />
      </YStack>
    ),
  ],
} satisfies Meta<typeof ListMenuItem>

export default meta
type Story = StoryObj<typeof meta>

// ================================================================================
// VARIANTES - MEDIUM SIZE
// ================================================================================

/**
 * Medium / Normal - Estado padrão
 */
export const MediumNormal: Story = {
  name: 'Medium / Normal',
  args: {
    size: 'medium',
    children: 'Item de lista medium',
    onPress: () => console.log('Clicou'),
  },
}

/**
 * Medium / Hover - Estado hover (passe o mouse)
 * 
 * Nota: No Storybook, teste passando o mouse sobre o item.
 */
export const MediumHover: Story = {
  name: 'Medium / Hover',
  args: {
    size: 'medium',
    children: 'Passe o mouse aqui',
    onPress: () => console.log('Clicou'),
  },
}

/**
 * Medium / Active - Estado pressionado (clique e segure)
 * 
 * Nota: No Storybook, teste clicando e segurando.
 */
export const MediumActive: Story = {
  name: 'Medium / Active',
  args: {
    size: 'medium',
    children: 'Clique e segure',
    onPress: () => console.log('Clicou'),
  },
}

/**
 * Medium / Focus - Estado focado (Tab para focar)
 * 
 * Nota: No Storybook, use Tab para focar o item.
 */
export const MediumFocus: Story = {
  name: 'Medium / Focus',
  args: {
    size: 'medium',
    children: 'Use Tab para focar',
    onPress: () => console.log('Clicou'),
  },
}

// ================================================================================
// VARIANTES - SMALL SIZE
// ================================================================================

/**
 * Small / Normal - Estado padrão
 */
export const SmallNormal: Story = {
  name: 'Small / Normal',
  args: {
    size: 'small',
    children: 'Item de lista small',
    onPress: () => console.log('Clicou'),
  },
}

/**
 * Small / Hover - Estado hover
 */
export const SmallHover: Story = {
  name: 'Small / Hover',
  args: {
    size: 'small',
    children: 'Passe o mouse aqui',
    onPress: () => console.log('Clicou'),
  },
}

/**
 * Small / Active - Estado pressionado
 */
export const SmallActive: Story = {
  name: 'Small / Active',
  args: {
    size: 'small',
    children: 'Clique e segure',
    onPress: () => console.log('Clicou'),
  },
}

/**
 * Small / Focus - Estado focado
 */
export const SmallFocus: Story = {
  name: 'Small / Focus',
  args: {
    size: 'small',
    children: 'Use Tab para focar',
    onPress: () => console.log('Clicou'),
  },
}

// ================================================================================
// CONFIGURAÇÕES - LEADING
// ================================================================================

/**
 * Com ícone leading (à esquerda)
 */
export const WithLeading: Story = {
  name: 'Configuração: Leading',
  render: () => (
    <YStack gap="$2" width={400}>
      <ListMenuItem 
        size="medium"
        leading={<HomeIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<SettingsIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
    </YStack>
  ),
}

/**
 * Com ícone leading (small)
 */
export const WithLeadingSmall: Story = {
  name: 'Configuração: Leading (Small)',
  render: () => (
    <YStack gap="$2" width={400}>
      <ListMenuItem 
        size="small"
        leading={<HomeIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        size="small"
        leading={<SettingsIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
    </YStack>
  ),
}

// ================================================================================
// CONFIGURAÇÕES - TRAILING
// ================================================================================

/**
 * Com ícone trailing (à direita)
 */
export const WithTrailing: Story = {
  name: 'Configuração: Trailing',
  render: () => (
    <YStack gap="$2" width={400}>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Ver detalhes')}
      >
        Ver detalhes
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Ver mais')}
      >
        Ver mais informações
      </ListMenuItem>
    </YStack>
  ),
}

/**
 * Com ícone trailing (small)
 */
export const WithTrailingSmall: Story = {
  name: 'Configuração: Trailing (Small)',
  render: () => (
    <YStack gap="$2" width={400}>
      <ListMenuItem 
        size="small"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Ver detalhes')}
      >
        Ver detalhes
      </ListMenuItem>
      <ListMenuItem 
        size="small"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Ver mais')}
      >
        Ver mais
      </ListMenuItem>
    </YStack>
  ),
}

// ================================================================================
// CONFIGURAÇÕES - LEADING + TRAILING
// ================================================================================

/**
 * Com leading e trailing
 */
export const WithLeadingAndTrailing: Story = {
  name: 'Configuração: Leading + Trailing',
  render: () => (
    <YStack gap="$2" width={400}>
      <ListMenuItem 
        size="medium"
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
    </YStack>
  ),
}

/**
 * Com leading e trailing (small)
 */
export const WithLeadingAndTrailingSmall: Story = {
  name: 'Configuração: Leading + Trailing (Small)',
  render: () => (
    <YStack gap="$2" width={400}>
      <ListMenuItem 
        size="small"
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        size="small"
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
    </YStack>
  ),
}

// ================================================================================
// CASOS DE USO
// ================================================================================

/**
 * Menu de navegação completo
 */
export const NavigationMenu: Story = {
  name: 'Uso: Menu de Navegação',
  render: () => (
    <YStack gap="$0" width={400}>
      <ListMenuItem 
        size="medium"
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Perfil')}
      >
        Perfil
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Ajuda')}
      >
        Ajuda e Suporte
      </ListMenuItem>
    </YStack>
  ),
}

/**
 * Lista de configurações (sem ícones)
 */
export const SettingsList: Story = {
  name: 'Uso: Lista de Configurações',
  render: () => (
    <YStack gap="$0" width={400}>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Notificações')}
      >
        Notificações
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Privacidade')}
      >
        Privacidade e Segurança
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Conta')}
      >
        Conta
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Sobre')}
      >
        Sobre o app
      </ListMenuItem>
    </YStack>
  ),
}

/**
 * Lista simples (apenas texto)
 */
export const SimpleList: Story = {
  name: 'Uso: Lista Simples',
  render: () => (
    <YStack gap="$0" width={400}>
      <ListMenuItem 
        size="medium"
        onPress={() => console.log('Opção 1')}
      >
        Opção 1
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        onPress={() => console.log('Opção 2')}
      >
        Opção 2
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        onPress={() => console.log('Opção 3')}
      >
        Opção 3
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        onPress={() => console.log('Opção 4')}
      >
        Opção 4
      </ListMenuItem>
    </YStack>
  ),
}

// ================================================================================
// COMPARAÇÕES
// ================================================================================

/**
 * Comparação: Todos os tamanhos
 */
export const AllSizes: Story = {
  name: 'Comparação: Tamanhos',
  render: () => (
    <YStack gap="$6">
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Medium (48px)</Text>
        <YStack gap="$0" width={400}>
          <ListMenuItem size="medium">Item Medium 1</ListMenuItem>
          <ListMenuItem size="medium">Item Medium 2</ListMenuItem>
          <ListMenuItem size="medium">Item Medium 3</ListMenuItem>
        </YStack>
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Small (36px)</Text>
        <YStack gap="$0" width={400}>
          <ListMenuItem size="small">Item Small 1</ListMenuItem>
          <ListMenuItem size="small">Item Small 2</ListMenuItem>
          <ListMenuItem size="small">Item Small 3</ListMenuItem>
        </YStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Comparação: Todas as configurações
 */
export const AllConfigurations: Story = {
  name: 'Comparação: Configurações',
  render: () => (
    <YStack gap="$6" width={400}>
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Apenas Texto</Text>
        <ListMenuItem size="medium">Item sem ícones</ListMenuItem>
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Com Leading</Text>
        <ListMenuItem size="medium" leading={<HomeIcon />}>
          Item com ícone à esquerda
        </ListMenuItem>
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Com Trailing</Text>
        <ListMenuItem size="medium" trailing={<ChevronRightIcon />}>
          Item com ícone à direita
        </ListMenuItem>
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Leading + Trailing</Text>
        <ListMenuItem 
          size="medium" 
          leading={<SettingsIcon />}
          trailing={<ChevronRightIcon />}
        >
          Item com ambos os ícones
        </ListMenuItem>
      </YStack>
    </YStack>
  ),
}

/**
 * Playground interativo
 */
export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'medium',
    children: 'Item customizável',
    onPress: () => console.log('Clicou no item'),
  },
}

