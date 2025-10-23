import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ListMenu } from './ListMenu'
import { Text, Stack } from '@tamagui/core'
import { YStack, XStack } from '@tamagui/stacks'

/**
 * Mock ListMenuItem para demonstração
 * Na implementação real, usar o componente ListMenuItem do design system
 */
const ListMenuItem = ({ 
  children, 
  leading, 
  trailing, 
  selected,
  onPress,
  size = 'medium',
  ...props 
}: any) => {
  const height = size === 'small' ? 40 : 48
  const padding = size === 'small' ? 12 : 16
  
  return (
    <XStack
      height={height}
      paddingHorizontal={padding}
      paddingVertical={12}
      alignItems="center"
      gap="$3"
      backgroundColor={selected ? '#F5F5F5' : '#FFFFFF'}
      borderBottomWidth={1}
      borderBottomColor="#E0E0E0"
      cursor="pointer"
      hoverStyle={{ backgroundColor: '#FAFAFA' }}
      pressStyle={{ backgroundColor: '#F0F0F0' }}
      onPress={onPress}
      {...props}
    >
      {/* Leading Icon/Component */}
      {leading && <Stack width={20} height={20}>{leading}</Stack>}
      
      {/* Selected Indicator (for radio/checkbox) */}
      {selected !== undefined && (
        <Stack
          width={20}
          height={20}
          borderRadius={selected ? 10 : 4}
          borderWidth={2}
          borderColor={selected ? '#1976D2' : '#9E9E9E'}
          backgroundColor={selected ? '#1976D2' : 'transparent'}
          alignItems="center"
          justifyContent="center"
        >
          {selected && (
            <Stack width={6} height={6} borderRadius={3} backgroundColor="white" />
          )}
        </Stack>
      )}
      
      {/* Content */}
      <Text flex={1} fontSize={size === 'small' ? 14 : 16} color="#212121">
        {children}
      </Text>
      
      {/* Trailing Icon/Component */}
      {trailing && <Stack width={20} height={20}>{trailing}</Stack>}
    </XStack>
  )
}

/**
 * Mock Icons para demonstração
 */
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3L3 9V17H7V12H13V17H17V9L10 3Z" stroke="#424242" strokeWidth="2" />
  </svg>
)

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" stroke="#424242" strokeWidth="2" />
    <path d="M10 1V4M10 16V19M19 10H16M4 10H1" stroke="#424242" strokeWidth="2" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7 4L13 10L7 16" stroke="#757575" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/**
 * # ListMenu
 * 
 * Container de lista que agrupa múltiplos ListMenuItem.
 * 
 * ## 5 Variantes de Conteúdo
 * 
 * 1. **Text:** Itens simples apenas com texto
 * 2. **Leading:** Itens com ícone à esquerda
 * 3. **Trailing:** Itens com ícone à direita (navegação)
 * 4. **Radio:** Lista com seleção única
 * 5. **Checkbox:** Lista com seleção múltipla
 * 
 * ## Características
 * 
 * - Container simples sem estilos complexos
 * - Delega renderização para ListMenuItem
 * - Gerencia estado para radio/checkbox
 * - Propaga props comuns (size, etc)
 * 
 * ## Quando usar
 * 
 * - Menus de navegação
 * - Listas de configurações
 * - Seleção de opções
 * - Dropdowns
 * - Action sheets
 */
const meta = {
  title: 'Lists/ListMenu',
  component: ListMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Container de lista com 5 variantes de conteúdo.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    contentType: {
      control: 'select',
      options: ['text', 'leading', 'trailing', 'radio', 'checkbox'],
      description: 'Tipo de conteúdo da lista',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho dos itens',
    },
  },
  decorators: [
    (Story) => (
      <YStack padding="$4" width={400}>
        <Story />
      </YStack>
    ),
  ],
} satisfies Meta<typeof ListMenu>

export default meta
type Story = StoryObj<typeof meta>

// ================================================================================
// CONTENT TYPE: TEXT
// ================================================================================

/**
 * Content / Text - Itens simples apenas com texto
 */
export const ContentText: Story = {
  name: 'Content: Text',
  render: () => (
    <ListMenu contentType="text">
      <ListMenuItem>Opção 1</ListMenuItem>
      <ListMenuItem>Opção 2</ListMenuItem>
      <ListMenuItem>Opção 3</ListMenuItem>
      <ListMenuItem>Opção 4</ListMenuItem>
    </ListMenu>
  ),
}

/**
 * Content / Text - Small
 */
export const ContentTextSmall: Story = {
  name: 'Content: Text (Small)',
  render: () => (
    <ListMenu contentType="text" size="small">
      <ListMenuItem>Primeira opção</ListMenuItem>
      <ListMenuItem>Segunda opção</ListMenuItem>
      <ListMenuItem>Terceira opção</ListMenuItem>
    </ListMenu>
  ),
}

// ================================================================================
// CONTENT TYPE: LEADING
// ================================================================================

/**
 * Content / Leading - Itens com ícone à esquerda
 */
export const ContentLeading: Story = {
  name: 'Content: Leading',
  render: () => (
    <ListMenu contentType="leading">
      <ListMenuItem leading={<HomeIcon />}>Início</ListMenuItem>
      <ListMenuItem leading={<SettingsIcon />}>Configurações</ListMenuItem>
      <ListMenuItem leading={<HomeIcon />}>Ajuda</ListMenuItem>
      <ListMenuItem leading={<SettingsIcon />}>Sobre</ListMenuItem>
    </ListMenu>
  ),
}

/**
 * Menu de navegação completo
 */
export const NavigationMenu: Story = {
  name: 'Uso: Menu de Navegação (Leading)',
  render: () => (
    <ListMenu contentType="leading">
      <ListMenuItem 
        leading={<HomeIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        leading={<SettingsIcon />}
        onPress={() => console.log('Perfil')}
      >
        Perfil
      </ListMenuItem>
      <ListMenuItem 
        leading={<SettingsIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
      <ListMenuItem 
        leading={<HomeIcon />}
        onPress={() => console.log('Ajuda')}
      >
        Ajuda
      </ListMenuItem>
    </ListMenu>
  ),
}

// ================================================================================
// CONTENT TYPE: TRAILING
// ================================================================================

/**
 * Content / Trailing - Itens com ícone à direita
 */
export const ContentTrailing: Story = {
  name: 'Content: Trailing',
  render: () => (
    <ListMenu contentType="trailing">
      <ListMenuItem trailing={<ChevronRightIcon />}>Ver detalhes</ListMenuItem>
      <ListMenuItem trailing={<ChevronRightIcon />}>Ver mais</ListMenuItem>
      <ListMenuItem trailing={<ChevronRightIcon />}>Configurar</ListMenuItem>
      <ListMenuItem trailing={<ChevronRightIcon />}>Abrir</ListMenuItem>
    </ListMenu>
  ),
}

/**
 * Menu de navegação com setas
 */
export const NavigationWithArrows: Story = {
  name: 'Uso: Navegação com Setas',
  render: () => (
    <ListMenu contentType="trailing">
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Minha conta')}
      >
        Minha conta
      </ListMenuItem>
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Endereços')}
      >
        Endereços
      </ListMenuItem>
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Pagamento')}
      >
        Métodos de pagamento
      </ListMenuItem>
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Privacidade')}
      >
        Privacidade
      </ListMenuItem>
    </ListMenu>
  ),
}

// ================================================================================
// CONTENT TYPE: LEADING + TRAILING
// ================================================================================

/**
 * Menu completo com ícones à esquerda e setas à direita
 */
export const LeadingAndTrailing: Story = {
  name: 'Uso: Leading + Trailing',
  render: () => (
    <ListMenu contentType="leading">
      <ListMenuItem 
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Início')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Configurações')}
      >
        Configurações
      </ListMenuItem>
      <ListMenuItem 
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => console.log('Ajuda')}
      >
        Ajuda e Suporte
      </ListMenuItem>
    </ListMenu>
  ),
}

// ================================================================================
// CONTENT TYPE: RADIO
// ================================================================================

/**
 * Content / Radio - Lista com seleção única
 */
export const ContentRadio: Story = {
  name: 'Content: Radio',
  render: () => {
    const [selected, setSelected] = useState('2')
    
    return (
      <ListMenu 
        contentType="radio"
        value={selected}
        onChange={(val) => setSelected(val as string)}
        name="radio-example"
      >
        <ListMenuItem value="1">Opção 1</ListMenuItem>
        <ListMenuItem value="2">Opção 2</ListMenuItem>
        <ListMenuItem value="3">Opção 3</ListMenuItem>
        <ListMenuItem value="4">Opção 4</ListMenuItem>
      </ListMenu>
    )
  },
}

/**
 * Seleção de método de pagamento
 */
export const PaymentMethodSelect: Story = {
  name: 'Uso: Seleção de Pagamento (Radio)',
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('credit')
    
    return (
      <YStack gap="$3">
        <Text fontSize={16} fontWeight="600">Método de Pagamento</Text>
        <ListMenu 
          contentType="radio"
          value={paymentMethod}
          onChange={(val) => setPaymentMethod(val as string)}
          name="payment-method"
        >
          <ListMenuItem value="credit">Cartão de Crédito</ListMenuItem>
          <ListMenuItem value="debit">Cartão de Débito</ListMenuItem>
          <ListMenuItem value="pix">PIX</ListMenuItem>
          <ListMenuItem value="boleto">Boleto Bancário</ListMenuItem>
        </ListMenu>
        <Text fontSize={14} color="#757575">
          Selecionado: {paymentMethod}
        </Text>
      </YStack>
    )
  },
}

// ================================================================================
// CONTENT TYPE: CHECKBOX
// ================================================================================

/**
 * Content / Checkbox - Lista com seleção múltipla
 */
export const ContentCheckbox: Story = {
  name: 'Content: Checkbox',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['2', '3'])
    
    return (
      <ListMenu 
        contentType="checkbox"
        value={selected}
        onChange={(val) => setSelected(val as string[])}
      >
        <ListMenuItem value="1">Opção 1</ListMenuItem>
        <ListMenuItem value="2">Opção 2</ListMenuItem>
        <ListMenuItem value="3">Opção 3</ListMenuItem>
        <ListMenuItem value="4">Opção 4</ListMenuItem>
      </ListMenu>
    )
  },
}

/**
 * Configurações de notificações
 */
export const NotificationSettings: Story = {
  name: 'Uso: Configurações (Checkbox)',
  render: () => {
    const [notifications, setNotifications] = useState<string[]>(['email', 'push'])
    
    return (
      <YStack gap="$3">
        <Text fontSize={16} fontWeight="600">Notificações</Text>
        <ListMenu 
          contentType="checkbox"
          value={notifications}
          onChange={(val) => setNotifications(val as string[])}
        >
          <ListMenuItem value="email">Email</ListMenuItem>
          <ListMenuItem value="push">Notificações Push</ListMenuItem>
          <ListMenuItem value="sms">SMS</ListMenuItem>
          <ListMenuItem value="whatsapp">WhatsApp</ListMenuItem>
        </ListMenu>
        <Text fontSize={14} color="#757575">
          Selecionados: {notifications.join(', ') || 'Nenhum'}
        </Text>
      </YStack>
    )
  },
}

// ================================================================================
// COMPARAÇÕES E EXEMPLOS COMPLETOS
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
        <ListMenu contentType="text" size="medium">
          <ListMenuItem>Item Medium 1</ListMenuItem>
          <ListMenuItem>Item Medium 2</ListMenuItem>
          <ListMenuItem>Item Medium 3</ListMenuItem>
        </ListMenu>
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize={14} fontWeight="600" color="#757575">Small (40px)</Text>
        <ListMenu contentType="text" size="small">
          <ListMenuItem>Item Small 1</ListMenuItem>
          <ListMenuItem>Item Small 2</ListMenuItem>
          <ListMenuItem>Item Small 3</ListMenuItem>
        </ListMenu>
      </YStack>
    </YStack>
  ),
}

/**
 * Comparação: Todos os content types
 */
export const AllContentTypes: Story = {
  name: 'Comparação: Todos os Content Types',
  render: () => {
    const [radioValue, setRadioValue] = useState('2')
    const [checkboxValue, setCheckboxValue] = useState<string[]>(['2'])
    
    return (
      <YStack gap="$6">
        <YStack gap="$2">
          <Text fontSize={14} fontWeight="600" color="#757575">Text</Text>
          <ListMenu contentType="text">
            <ListMenuItem>Item 1</ListMenuItem>
            <ListMenuItem>Item 2</ListMenuItem>
          </ListMenu>
        </YStack>
        
        <YStack gap="$2">
          <Text fontSize={14} fontWeight="600" color="#757575">Leading</Text>
          <ListMenu contentType="leading">
            <ListMenuItem leading={<HomeIcon />}>Item 1</ListMenuItem>
            <ListMenuItem leading={<SettingsIcon />}>Item 2</ListMenuItem>
          </ListMenu>
        </YStack>
        
        <YStack gap="$2">
          <Text fontSize={14} fontWeight="600" color="#757575">Trailing</Text>
          <ListMenu contentType="trailing">
            <ListMenuItem trailing={<ChevronRightIcon />}>Item 1</ListMenuItem>
            <ListMenuItem trailing={<ChevronRightIcon />}>Item 2</ListMenuItem>
          </ListMenu>
        </YStack>
        
        <YStack gap="$2">
          <Text fontSize={14} fontWeight="600" color="#757575">Radio</Text>
          <ListMenu contentType="radio" value={radioValue} onChange={(v) => setRadioValue(v as string)}>
            <ListMenuItem value="1">Item 1</ListMenuItem>
            <ListMenuItem value="2">Item 2</ListMenuItem>
          </ListMenu>
        </YStack>
        
        <YStack gap="$2">
          <Text fontSize={14} fontWeight="600" color="#757575">Checkbox</Text>
          <ListMenu contentType="checkbox" value={checkboxValue} onChange={(v) => setCheckboxValue(v as string[])}>
            <ListMenuItem value="1">Item 1</ListMenuItem>
            <ListMenuItem value="2">Item 2</ListMenuItem>
          </ListMenu>
        </YStack>
      </YStack>
    )
  },
}

/**
 * Exemplo completo: Tela de configurações
 */
export const SettingsScreen: Story = {
  name: 'Exemplo: Tela de Configurações',
  render: () => {
    const [notifications, setNotifications] = useState<string[]>(['push'])
    
    return (
      <YStack gap="$6" width={400}>
        <YStack gap="$3">
          <Text fontSize={18} fontWeight="700">Conta</Text>
          <ListMenu contentType="trailing">
            <ListMenuItem trailing={<ChevronRightIcon />}>Perfil</ListMenuItem>
            <ListMenuItem trailing={<ChevronRightIcon />}>Segurança</ListMenuItem>
            <ListMenuItem trailing={<ChevronRightIcon />}>Privacidade</ListMenuItem>
          </ListMenu>
        </YStack>
        
        <YStack gap="$3">
          <Text fontSize={18} fontWeight="700">Notificações</Text>
          <ListMenu contentType="checkbox" value={notifications} onChange={(v) => setNotifications(v as string[])}>
            <ListMenuItem value="email">Email</ListMenuItem>
            <ListMenuItem value="push">Push</ListMenuItem>
            <ListMenuItem value="sms">SMS</ListMenuItem>
          </ListMenu>
        </YStack>
        
        <YStack gap="$3">
          <Text fontSize={18} fontWeight="700">Sobre</Text>
          <ListMenu contentType="trailing">
            <ListMenuItem trailing={<ChevronRightIcon />}>Termos de uso</ListMenuItem>
            <ListMenuItem trailing={<ChevronRightIcon />}>Política de privacidade</ListMenuItem>
            <ListMenuItem trailing={<ChevronRightIcon />}>Versão 1.0.0</ListMenuItem>
          </ListMenu>
        </YStack>
      </YStack>
    )
  },
}

/**
 * Playground interativo
 */
export const Playground: Story = {
  name: 'Playground',
  args: {
    contentType: 'text',
    size: 'medium',
  },
  render: (args) => (
    <ListMenu {...args}>
      <ListMenuItem>Item 1</ListMenuItem>
      <ListMenuItem>Item 2</ListMenuItem>
      <ListMenuItem>Item 3</ListMenuItem>
    </ListMenu>
  ),
}

