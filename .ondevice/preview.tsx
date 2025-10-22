import React from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/core'
import config from '../tamagui.config'

// Decorator para adicionar TamaguiProvider
const TamaguiDecorator = (Story) => {
  return (
    <TamaguiProvider config={config}>
      <Story />
    </TamaguiProvider>
  )
}

const preview: Preview = {
  decorators: [TamaguiDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
