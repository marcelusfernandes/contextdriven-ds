import React from 'react'
import { styled, Stack } from '@tamagui/core'
import { tokens } from '../../tokens'

const Dot = styled(Stack, {
  name: 'LoadingDot',
  width: tokens.button.loading.dotSize,
  height: tokens.button.loading.dotSize,
  borderRadius: tokens.button.loading.dotBorderRadius,
  animation: 'quick',
  
  variants: {
    active: {
      true: {
        backgroundColor: tokens.button.loading.dotActiveColor,
        opacity: 1,
      },
      false: {
        backgroundColor: tokens.button.loading.dotInactiveColor,
        opacity: 0.3,
      },
    },
  } as const,
})

interface LoadingProps {
  size?: 'small' | 'medium'
}

export const Loading = ({ size = 'medium' }: LoadingProps) => {
  const [activeDot, setActiveDot] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      gap={tokens.button.loading.gap}
    >
      <Dot active={activeDot === 0} />
      <Dot active={activeDot === 1} />
      <Dot active={activeDot === 2} />
    </Stack>
  )
}

