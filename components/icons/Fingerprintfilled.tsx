import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FingerprintFilled.svg'

/**
 * Fingerprintfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Fingerprintfilled />
 * <Fingerprintfilled width="$6" height="$6" />
 * <Fingerprintfilled color="$color.primary" />
 * ```
 */
export const Fingerprintfilled = styled(Svg, {
  name: 'Fingerprintfilled',
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

export type FingerprintfilledProps = React.ComponentProps<typeof Fingerprintfilled>
