import React, { useEffect, useState } from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/core'
import config from '../tamagui.config'

// Carregar fontes via CSS para web
const loadFonts = () => {
  const style = document.createElement('style')
  style.textContent = `
    @font-face {
      font-family: 'Gelada RC3 Black';
      src: url('/fonts/GeladaRC3-Black.otf') format('opentype');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: 'Roboto Flex';
      src: url('/fonts/RobotoFlex.ttf') format('truetype');
      font-weight: 100 1000;
      font-style: normal;
    }
  `
  document.head.appendChild(style)
}

// Decorator para adicionar TamaguiProvider em todas as stories
const TamaguiDecorator = (Story) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    loadFonts()
    // Dar tempo para as fontes carregarem
    const timeout = setTimeout(() => setFontsLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  if (!fontsLoaded) {
    return <div>Loading fonts...</div>
  }

  return (
    <TamaguiProvider config={config}>
      <Story />
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
        type: 'code', // Mostrar código das stories
        excludeDecorators: true,
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
