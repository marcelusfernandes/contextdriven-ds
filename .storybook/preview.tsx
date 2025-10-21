import React from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/core'
import { useFonts } from 'expo-font'
import config from '../tamagui.config'

// Decorator para adicionar TamaguiProvider em todas as stories
const TamaguiDecorator = (Story) => {
  const [fontsLoaded] = useFonts({
    'Gelada RC3 Black': require('../assets/fonts/GeladaRC3-Black.otf'),
    'Roboto Flex': require('../assets/fonts/RobotoFlex.ttf'),
  })

  // Não renderizar até fonts carregarem
  if (!fontsLoaded) {
    return <div>Loading fonts...</div>
  }

  return (
    <TamaguiProvider config={config}>
      <div style={{ padding: '1rem', minHeight: '100vh' }}>
        <Story />
      </div>
    </TamaguiProvider>
  )
}

const preview: Preview = {
  parameters: {
    // Actions config
    actions: { 
      argTypesRegex: '^on[A-Z].*' 
    },

    // Controls config
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true, // Expandir controles por padrão
      sort: 'requiredFirst', // Ordenar props required primeiro
    },

    // Layout config
    layout: 'centered', // Centralizar por padrão

    // Backgrounds addon
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },

    // Viewport addon
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
      },
    },

    // Docs config
    docs: {
      toc: true, // Table of contents
      source: {
        type: 'dynamic',
      },
    },
  },

  // Global decorators
  decorators: [TamaguiDecorator],

  // Global types para toolbar customizada (opcional)
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  // Tags globais
  tags: ['autodocs'],
}

export default preview
