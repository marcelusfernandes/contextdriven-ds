import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ImageFilled.svg'

/**
 * Imagefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Imagefilled />
 * <Imagefilled width="$6" height="$6" />
 * <Imagefilled color="$color.primary" />
 * ```
 */
export const Imagefilled = styled(Svg, {
  name: 'Imagefilled',
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

export type ImagefilledProps = React.ComponentProps<typeof Imagefilled>
