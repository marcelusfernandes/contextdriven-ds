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

