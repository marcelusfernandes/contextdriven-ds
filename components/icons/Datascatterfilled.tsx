import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataScatterFilled.svg'

/**
 * Datascatterfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Datascatterfilled />
 * <Datascatterfilled width="$6" height="$6" />
 * <Datascatterfilled color="$color.primary" />
 * ```
 */
export const Datascatterfilled = styled(Svg, {
  name: 'Datascatterfilled',
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

export type DatascatterfilledProps = React.ComponentProps<typeof Datascatterfilled>
