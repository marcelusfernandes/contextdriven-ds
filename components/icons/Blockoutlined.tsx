import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BlockOutlined.svg'

/**
 * Blockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Blockoutlined />
 * <Blockoutlined width="$6" height="$6" />
 * <Blockoutlined color="$color.primary" />
 * ```
 */
export const Blockoutlined = styled(Svg, {
  name: 'Blockoutlined',
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

export type BlockoutlinedProps = React.ComponentProps<typeof Blockoutlined>
