import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PeopleOutlined.svg'

/**
 * Peopleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Peopleoutlined />
 * <Peopleoutlined width="$6" height="$6" />
 * <Peopleoutlined color="$color.primary" />
 * ```
 */
export const Peopleoutlined = styled(Svg, {
  name: 'Peopleoutlined',
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

export type PeopleoutlinedProps = React.ComponentProps<typeof Peopleoutlined>
