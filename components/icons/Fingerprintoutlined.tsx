import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FingerprintOutlined.svg'

/**
 * Fingerprintoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Fingerprintoutlined />
 * <Fingerprintoutlined width="$6" height="$6" />
 * <Fingerprintoutlined color="$color.primary" />
 * ```
 */
export const Fingerprintoutlined = styled(Svg, {
  name: 'Fingerprintoutlined',
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

export type FingerprintoutlinedProps = React.ComponentProps<typeof Fingerprintoutlined>
