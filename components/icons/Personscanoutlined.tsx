import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonScanOutlined.svg'

/**
 * Personscanoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Personscanoutlined />
 * <Personscanoutlined width="$6" height="$6" />
 * <Personscanoutlined color="$color.primary" />
 * ```
 */
export const Personscanoutlined = styled(Svg, {
  name: 'Personscanoutlined',
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

export type PersonscanoutlinedProps = React.ComponentProps<typeof Personscanoutlined>
