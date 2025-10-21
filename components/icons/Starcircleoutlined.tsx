import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarCircleOutlined.svg'

/**
 * Starcircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Starcircleoutlined />
 * <Starcircleoutlined width="$6" height="$6" />
 * <Starcircleoutlined color="$color.primary" />
 * ```
 */
export const Starcircleoutlined = styled(Svg, {
  name: 'Starcircleoutlined',
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

export type StarcircleoutlinedProps = React.ComponentProps<typeof Starcircleoutlined>
