import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerMultipleFilled.svg'

/**
 * Beermultiplefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Beermultiplefilled />
 * <Beermultiplefilled width="$6" height="$6" />
 * <Beermultiplefilled color="$color.primary" />
 * ```
 */
export const Beermultiplefilled = styled(Svg, {
  name: 'Beermultiplefilled',
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

export type BeermultiplefilledProps = React.ComponentProps<typeof Beermultiplefilled>
