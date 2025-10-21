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

