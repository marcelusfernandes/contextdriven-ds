import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PeopleFilled.svg'

/**
 * Peoplefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Peoplefilled />
 * <Peoplefilled width="$6" height="$6" />
 * <Peoplefilled color="$color.primary" />
 * ```
 */
export const Peoplefilled = styled(Svg, {
  name: 'Peoplefilled',
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

export type PeoplefilledProps = React.ComponentProps<typeof Peoplefilled>
