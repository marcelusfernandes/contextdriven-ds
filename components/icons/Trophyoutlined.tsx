import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TrophyOutlined.svg'

/**
 * Trophyoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Trophyoutlined />
 * <Trophyoutlined width="$6" height="$6" />
 * <Trophyoutlined color="$color.primary" />
 * ```
 */
export const Trophyoutlined = styled(Svg, {
  name: 'Trophyoutlined',
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

export type TrophyoutlinedProps = React.ComponentProps<typeof Trophyoutlined>
