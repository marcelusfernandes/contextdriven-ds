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

