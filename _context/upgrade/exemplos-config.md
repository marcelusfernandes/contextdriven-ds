# 📋 Exemplos de Configuração Prontos - Storybook 8

Este arquivo contém exemplos completos e prontos para uso dos arquivos de configuração necessários.

---

## `.storybook/main.ts`

```typescript
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import path from 'path'

const config: StorybookConfig = {
  // Localização das stories
  stories: [
    '../components/**/*.stories.@(ts|tsx|js|jsx)',
    '../components/**/*.stories.mdx',
  ],

  // Addons essenciais
  addons: [
    '@storybook/addon-essentials',    // Controls, Actions, Docs, etc
    '@storybook/addon-interactions',  // Testes de interação
    '@storybook/addon-links',         // Links entre stories
  ],

  // Framework e builder
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },

  // Core settings
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },

  // Configuração customizada do Vite
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // Plugins
      plugins: [
        tamaguiPlugin({
          components: ['tamagui'],
          config: './tamagui.config.ts',
          useReactNativeWebLite: false,
        }),
      ],

      // Define globals
      define: {
        'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      },

      // Resolve aliases
      resolve: {
        alias: {
          '@icons': path.resolve(__dirname, '../components/icons'),
          '@components': path.resolve(__dirname, '../components'),
          'react-native': 'react-native-web',
        },
        extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.jsx', '.web.js', '.jsx', '.js'],
      },

      // Optimizations
      optimizeDeps: {
        include: [
          '@tamagui/core',
          'tamagui',
          'react',
          'react-dom',
        ],
        exclude: [
          '@tamagui/vite-plugin',
        ],
      },

      // Server config
      server: {
        fs: {
          strict: false,
        },
      },
    })
  },

  // TypeScript config
  typescript: {
    check: false, // Desabilitar checagem TS durante build (mais rápido)
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        // Filtrar props do React Native Web
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules/@types/react')
        }
        return true
      },
    },
  },

  // Docs configuration
  docs: {
    autodocs: 'tag', // Gerar docs automaticamente para stories com tag 'autodocs'
  },

  // Static directories
  staticDirs: ['../assets'],
}

export default config
```

---

## `.storybook/preview.tsx`

```typescript
import React, { useEffect } from 'react'
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
```

---

## `.storybook/tsconfig.json`

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "jsx": "react",
    "types": ["node"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "../components/**/*.ts",
    "../components/**/*.tsx"
  ],
  "exclude": [
    "../node_modules"
  ]
}
```

---

## `.ondevice/Storybook.tsx`

```typescript
import { getStorybookUI } from '@storybook/react-native'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withActions } from '@storybook/addon-ondevice-actions'

import './storybook.requires' // Importar stories

const StorybookUIRoot = getStorybookUI({
  // Configurações gerais
  enableWebsockets: true,
  onDeviceUI: true,
  shouldPersistSelection: true,
  
  // Tema customizado
  theme: {
    backgroundColor: 'white',
    headerTextColor: 'black',
    labelColor: 'black',
    borderColor: '#e6e6e6',
    previewBorderColor: '#b3b3b3',
    buttonTextColor: '#999999',
    buttonActiveTextColor: '#444444',
  },

  // Configurações de storage
  storage: {
    // Usar AsyncStorage para persistir seleção
    getItem: async (key: string) => {
      const { default: AsyncStorage } = await import('@react-native-async-storage/async-storage')
      return AsyncStorage.getItem(key)
    },
    setItem: async (key: string, value: string) => {
      const { default: AsyncStorage } = await import('@react-native-async-storage/async-storage')
      return AsyncStorage.setItem(key, value)
    },
  },
})

export default StorybookUIRoot
```

---

## `.ondevice/preview.tsx`

```typescript
import React from 'react'
import { TamaguiProvider } from '@tamagui/core'
import { useFonts } from 'expo-font'
import config from '../tamagui.config'

// Decorator para TamaguiProvider
const TamaguiDecorator = (StoryFn) => {
  const [fontsLoaded] = useFonts({
    'Gelada RC3 Black': require('../assets/fonts/GeladaRC3-Black.otf'),
    'Roboto Flex': require('../assets/fonts/RobotoFlex.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <StoryFn />
    </TamaguiProvider>
  )
}

export const decorators = [TamaguiDecorator]

export const parameters = {
  backgrounds: [
    { name: 'light', value: '#ffffff', default: true },
    { name: 'dark', value: '#1a1a1a' },
    { name: 'gray', value: '#f5f5f5' },
  ],
}
```

---

## `.ondevice/storybook.requires.ts`

**⚠️ Este arquivo será gerado automaticamente pelo comando:**
```bash
yarn storybook-generate
```

**Mas você pode criar manualmente:**

```typescript
/* 
 * Este arquivo é gerado automaticamente por @storybook/react-native/scripts/loader
 * Não edite manualmente!
 */

import { configure } from '@storybook/react-native'

// Importar todas as stories
const stories = [
  require('../components/Button/Button.stories'),
  require('../components/ButtonIcon/ButtonIcon.stories'),
  require('../components/Checkbox/Checkbox.stories'),
  require('../components/RadioButton/RadioButton.stories'),
]

configure(() => {
  stories.forEach((story) => {
    if (story && story.default) {
      // Já está configurado
    }
  })
}, module)

export { stories }
```

---

## `babel.config.js` (Atualizado)

```javascript
if (!process.env.TAMAGUI_TARGET) {
  process.env.TAMAGUI_TARGET = "native"
}

module.exports = function (api) {
  api.cache(true)
  
  return {
    presets: ["babel-preset-expo"],
    
    plugins: [
      // Transform inline environment variables
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT", "STORYBOOK_ENABLED"],
        },
      ],
      
      // Module resolver para aliases
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@icons": "./components/icons",
            "@components": "./components",
          },
        },
      ],
      
      // React Native Web (se necessário)
      process.env.TAMAGUI_TARGET === 'web' && "react-native-web",
      
      // Reanimated deve ser o último
      "react-native-reanimated/plugin",
    ].filter(Boolean),
  }
}
```

---

## `metro.config.js` (Atualizado)

```javascript
const { getDefaultConfig } = require("expo/metro-config")
const path = require("path")

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true })

// Configuração do Storybook
if (process.env.STORYBOOK_ENABLED) {
  const { generate } = require("@storybook/react-native/scripts/loader")
  
  generate({
    configPath: path.resolve(__dirname, "./.ondevice"),
  })

  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    "react-native",
    "browser",
    "main",
  ]
}

// Configuração para SVG
const { transformer, resolver } = defaultConfig

defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
  unstable_allowRequireContext: true,
}

defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg", "mjs", "cjs"],
}

// Watchman config para performance
defaultConfig.watchFolders = [
  path.resolve(__dirname, "./"),
]

module.exports = defaultConfig
```

---

## `app.config.js` (Atualizado)

```javascript
module.exports = ({ config }) => {
  const storybookEnabled = process.env.STORYBOOK_ENABLED === 'true'
  
  return {
    ...config,
    
    // Expo config
    name: config.name || 'MealDrop Tamagui',
    slug: config.slug || 'mealdroptamagui',
    version: config.version || '1.0.0',
    
    // Extra config para runtime
    extra: {
      storybookEnabled: storybookEnabled,
      eas: {
        projectId: config.extra?.eas?.projectId,
      },
    },
    
    // Plugins
    plugins: config.plugins || [],
    
    // Assets
    assetBundlePatterns: [
      '**/*',
    ],
  }
}
```

---

## `App.tsx` (Atualizado)

```typescript
import React, { useState } from 'react'
import { TamaguiProvider, Stack, Text } from '@tamagui/core'
import { useFonts } from 'expo-font'
import Constants from 'expo-constants'
import config from './tamagui.config'
import { Button } from './components/Button'

export default function App() {
  // Verificar se Storybook está habilitado
  const storybookEnabled = Constants.expoConfig?.extra?.storybookEnabled === true

  const [fontsLoaded] = useFonts({
    'Gelada RC3 Black': require('./assets/fonts/GeladaRC3-Black.otf'),
    'Roboto Flex': require('./assets/fonts/RobotoFlex.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  // Carregar Storybook UI se habilitado
  if (storybookEnabled) {
    const StorybookUI = require('./.ondevice/Storybook').default
    return <StorybookUI />
  }

  // App normal
  return (
    <TamaguiProvider config={config}>
      <Stack
        flex={1}
        backgroundColor="$background"
        padding={24}
        gap={32}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={32} fontWeight="bold" color="$color">
          Button Component Demo
        </Text>
        
        {/* Resto do seu app... */}
      </Stack>
    </TamaguiProvider>
  )
}
```

---

## `package.json` - Scripts (Atualizado)

```json
{
  "scripts": {
    "start": "TAMAGUI_TARGET=native expo start",
    "android": "TAMAGUI_TARGET=native expo start --android",
    "ios": "TAMAGUI_TARGET=native expo start --ios",
    "web": "TAMAGUI_TARGET=web expo start --web",
    
    "storybook:web": "TAMAGUI_TARGET=web storybook dev -p 6138",
    "storybook:web:clean": "rm -rf node_modules/.cache && TAMAGUI_TARGET=web storybook dev -p 6138",
    "build-storybook": "TAMAGUI_TARGET=web storybook build",
    
    "storybook-generate": "sb-rn-get-stories --config-path .ondevice",
    "storybook-watch": "sb-rn-watcher --config-path .ondevice",
    
    "storybook": "TAMAGUI_TARGET=native STORYBOOK_ENABLED=true expo start",
    "storybook:clean": "TAMAGUI_TARGET=native STORYBOOK_ENABLED=true expo start --clear",
    "storybook:ios": "TAMAGUI_TARGET=native STORYBOOK_ENABLED=true expo start --ios",
    "storybook:ios:clean": "TAMAGUI_TARGET=native STORYBOOK_ENABLED=true expo start --ios --clear",
    "storybook:android": "TAMAGUI_TARGET=native STORYBOOK_ENABLED=true expo start --android",
    "storybook:android:clean": "TAMAGUI_TARGET=native STORYBOOK_ENABLED=true expo start --android --clear"
  }
}
```

---

## `.gitignore` - Adicionar

```gitignore
# Storybook
.storybook/build
storybook-static/
.ondevice/storybook.requires.ts

# Caches
node_modules/.cache/
.expo/
.vite/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## Exemplo de Story Atualizada

```typescript
// components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Button } from './Button'
import { Checkmarkfilled } from '../icons'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button com suporte a múltiplas variantes e estados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Variante visual do botão',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    onPress: { 
      action: 'pressed',
      description: 'Callback ao pressionar o botão',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Story básica
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
}

// Story com interação automática (novo no Storybook 8)
export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    
    // Testar se botão está presente
    await expect(button).toBeInTheDocument()
    
    // Simular click
    await userEvent.click(button)
    
    // Verificar se callback foi chamado
    await expect(args.onPress).toHaveBeenCalled()
  },
}

// Story com loading state
export const Loading: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    loading: true,
  },
}

// Story com ícone
export const WithIcon: Story = {
  args: {
    children: 'Confirmar',
    variant: 'primary',
    leadingIcon: <Checkmarkfilled />,
  },
}
```

---

## 🎯 Ordem de Criação dos Arquivos

1. `.storybook/main.ts`
2. `.storybook/preview.tsx`
3. `.storybook/tsconfig.json` (opcional)
4. `.ondevice/Storybook.tsx`
5. `.ondevice/preview.tsx`
6. Atualizar `babel.config.js`
7. Atualizar `metro.config.js`
8. Atualizar `app.config.js`
9. Atualizar `App.tsx`
10. Executar `yarn storybook-generate`

---

## 🚀 Comandos para Testar

```bash
# Web
yarn storybook:web

# Build web
yarn build-storybook

# Native (após gerar)
yarn storybook-generate
yarn storybook:ios

# App normal
yarn start
```

---

**✅ Com estes arquivos, você tem tudo pronto para o upgrade!**

