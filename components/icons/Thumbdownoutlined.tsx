import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ThumbDownOutlined.svg'

/**
 * Thumbdownoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Thumbdownoutlined />
 * <Thumbdownoutlined width="$6" height="$6" />
 * <Thumbdownoutlined color="$color.primary" />
 * ```
 */
export const Thumbdownoutlined = styled(Svg, {
  name: 'Thumbdownoutlined',
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

export type ThumbdownoutlinedProps = React.ComponentProps<typeof Thumbdownoutlined>
