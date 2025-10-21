import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Wi-FiFilled.svg'

/**
 * WiFifilled Icon Component
 * 
 * @example
 * ```tsx
 * <WiFifilled />
 * <WiFifilled width="$6" height="$6" />
 * <WiFifilled color="$color.primary" />
 * ```
 */
export const WiFifilled = styled(Svg, {
  name: 'WiFifilled',
  width: '$4',
  height: '$4',
  color: '$color.text',
  
  variants: {
    size: {
      xs: {
        width: '$3',
        height: '$3',
      },
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$5',
        height: '$5',
      },
      lg: {
        width: '$6',
        height: '$6',
      },
      xl: {
        width: '$8',
        height: '$8',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
})

export type WiFifilledProps = React.ComponentProps<typeof WiFifilled>
