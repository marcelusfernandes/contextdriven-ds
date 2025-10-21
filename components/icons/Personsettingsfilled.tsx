import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonSettingsFilled.svg'

/**
 * Personsettingsfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Personsettingsfilled />
 * <Personsettingsfilled width="$6" height="$6" />
 * <Personsettingsfilled color="$color.primary" />
 * ```
 */
export const Personsettingsfilled = styled(Svg, {
  name: 'Personsettingsfilled',
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

export type PersonsettingsfilledProps = React.ComponentProps<typeof Personsettingsfilled>
