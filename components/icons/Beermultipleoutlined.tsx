import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerMultipleOutlined.svg'

/**
 * Beermultipleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Beermultipleoutlined />
 * <Beermultipleoutlined width="$6" height="$6" />
 * <Beermultipleoutlined color="$color.primary" />
 * ```
 */
export const Beermultipleoutlined = styled(Svg, {
  name: 'Beermultipleoutlined',
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

export type BeermultipleoutlinedProps = React.ComponentProps<typeof Beermultipleoutlined>
