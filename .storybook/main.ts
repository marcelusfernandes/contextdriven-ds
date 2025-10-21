import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  // Localização das stories
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],

  // Addons essenciais
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@chromatic-com/storybook'
  ],

  // Framework e builder
  framework: {
    name: '@storybook/react-vite',
    options: {},
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
        svgr({
          svgrOptions: {
            exportType: 'default',
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: '**/*.svg',
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
          'react-native',
          '@react-native/assets-registry',
        ],
        esbuildOptions: {
          resolveExtensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx', '.json'],
          loader: {
            '.js': 'jsx',
          },
        },
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
    autodocs: true, // Gerar docs automaticamente para stories com tag 'autodocs'
  },

  // Static directories
  staticDirs: [
    '../assets',
    './public'
  ],
}

export default config

