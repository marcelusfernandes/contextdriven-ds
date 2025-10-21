import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataLineOutlined.svg'

/**
 * Datalineoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Datalineoutlined />
 * <Datalineoutlined width="$6" height="$6" />
 * <Datalineoutlined color="$color.primary" />
 * ```
 */
export const Datalineoutlined = styled(Svg, {
  name: 'Datalineoutlined',
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

export type DatalineoutlinedProps = React.ComponentProps<typeof Datalineoutlined>
