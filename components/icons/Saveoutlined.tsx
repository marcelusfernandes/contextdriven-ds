import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SaveOutlined.svg'

/**
 * Saveoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Saveoutlined />
 * <Saveoutlined width="$6" height="$6" />
 * <Saveoutlined color="$color.primary" />
 * ```
 */
export const Saveoutlined = styled(Svg, {
  name: 'Saveoutlined',
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

export type SaveoutlinedProps = React.ComponentProps<typeof Saveoutlined>
