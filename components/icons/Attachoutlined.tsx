import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AttachOutlined.svg'

/**
 * Attachoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Attachoutlined />
 * <Attachoutlined width="$6" height="$6" />
 * <Attachoutlined color="$color.primary" />
 * ```
 */
export const Attachoutlined = styled(Svg, {
  name: 'Attachoutlined',
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

export type AttachoutlinedProps = React.ComponentProps<typeof Attachoutlined>
