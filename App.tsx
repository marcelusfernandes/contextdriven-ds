import React, { useState } from 'react'
import { TamaguiProvider, Stack, Text } from '@tamagui/core'
import { useFonts } from 'expo-font'
import config from './tamagui.config'
import { Button } from './components/Button'

export default function App() {
  const [loading, setLoading] = useState(false)

  const [fontsLoaded] = useFonts({
    'Gelada RC3 Black': require('./assets/fonts/GeladaRC3-Black.otf'),
    'Roboto Flex': require('./assets/fonts/RobotoFlex.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  const handlePress = () => {
    console.log('Button pressed!')
    alert('Button pressed!')
  }

  const handleLoadingPress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Loading complete!')
    }, 2000)
  }

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
        <Text
          fontSize={32}
          fontWeight="bold"
          color="$color"
        >
          Button Component Demo
        </Text>

        {/* Variantes */}
        <Stack gap={16} width="100%" maxWidth={600}>
          <Text fontSize={20} fontWeight="600">Variantes</Text>
          <Stack flexDirection="row" gap={12} flexWrap="wrap">
            <Button variant="primary" onPress={handlePress}>
              Primary
            </Button>
            <Button variant="secondary" onPress={handlePress}>
              Secondary
            </Button>
            <Button variant="tertiary" onPress={handlePress}>
              Tertiary
            </Button>
            <Button variant="destructive" onPress={handlePress}>
              Destructive
            </Button>
          </Stack>
        </Stack>

        {/* Tamanhos */}
        <Stack gap={16} width="100%" maxWidth={600}>
          <Text fontSize={20} fontWeight="600">Tamanhos</Text>
          <Stack flexDirection="row" gap={12} flexWrap="wrap" alignItems="center">
            <Button variant="primary" size="medium" onPress={handlePress}>
              Medium (48px)
            </Button>
            <Button variant="primary" size="small" onPress={handlePress}>
              Small (36px)
            </Button>
          </Stack>
        </Stack>

        {/* Estados */}
        <Stack gap={16} width="100%" maxWidth={600}>
          <Text fontSize={20} fontWeight="600">Estados</Text>
          <Stack flexDirection="row" gap={12} flexWrap="wrap">
            <Button 
              variant="primary" 
              loading={loading}
              onPress={handleLoadingPress}
            >
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
            <Button variant="primary" disabled onPress={handlePress}>
              Disabled
            </Button>
          </Stack>
        </Stack>

        {/* Matriz completa */}
        <Stack gap={16} width="100%" maxWidth={800}>
          <Text fontSize={20} fontWeight="600">Matriz Completa (48 Variantes)</Text>
          
          {/* Primary */}
          <Stack gap={8}>
            <Text fontSize={16} fontWeight="600">Primary</Text>
            <Stack flexDirection="row" gap={8} flexWrap="wrap">
              <Button variant="primary" size="medium">Medium Normal</Button>
              <Button variant="primary" size="medium" loading>Medium Loading</Button>
              <Button variant="primary" size="medium" disabled>Medium Disabled</Button>
              <Button variant="primary" size="small">Small Normal</Button>
              <Button variant="primary" size="small" loading>Small Loading</Button>
              <Button variant="primary" size="small" disabled>Small Disabled</Button>
            </Stack>
          </Stack>

          {/* Secondary */}
          <Stack gap={8}>
            <Text fontSize={16} fontWeight="600">Secondary</Text>
            <Stack flexDirection="row" gap={8} flexWrap="wrap">
              <Button variant="secondary" size="medium">Medium Normal</Button>
              <Button variant="secondary" size="medium" loading>Medium Loading</Button>
              <Button variant="secondary" size="medium" disabled>Medium Disabled</Button>
              <Button variant="secondary" size="small">Small Normal</Button>
              <Button variant="secondary" size="small" loading>Small Loading</Button>
              <Button variant="secondary" size="small" disabled>Small Disabled</Button>
            </Stack>
          </Stack>

          {/* Tertiary */}
          <Stack gap={8}>
            <Text fontSize={16} fontWeight="600">Tertiary</Text>
            <Stack flexDirection="row" gap={8} flexWrap="wrap">
              <Button variant="tertiary" size="medium">Medium Normal</Button>
              <Button variant="tertiary" size="medium" loading>Medium Loading</Button>
              <Button variant="tertiary" size="medium" disabled>Medium Disabled</Button>
              <Button variant="tertiary" size="small">Small Normal</Button>
              <Button variant="tertiary" size="small" loading>Small Loading</Button>
              <Button variant="tertiary" size="small" disabled>Small Disabled</Button>
            </Stack>
          </Stack>

          {/* Destructive */}
          <Stack gap={8}>
            <Text fontSize={16} fontWeight="600">Destructive</Text>
            <Stack flexDirection="row" gap={8} flexWrap="wrap">
              <Button variant="destructive" size="medium">Medium Normal</Button>
              <Button variant="destructive" size="medium" loading>Medium Loading</Button>
              <Button variant="destructive" size="medium" disabled>Medium Disabled</Button>
              <Button variant="destructive" size="small">Small Normal</Button>
              <Button variant="destructive" size="small" loading>Small Loading</Button>
              <Button variant="destructive" size="small" disabled>Small Disabled</Button>
            </Stack>
          </Stack>
        </Stack>

        <Text fontSize={14} color="$colorHover" textAlign="center" marginTop={16}>
          Passe o mouse, clique ou use Tab + Enter para ver os estados interativos
        </Text>
      </Stack>
    </TamaguiProvider>
  )
}
