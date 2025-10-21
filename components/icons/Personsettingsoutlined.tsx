import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonSettingsOutlined.svg'

/**
 * Personsettingsoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Personsettingsoutlined />
 * <Personsettingsoutlined width="$6" height="$6" />
 * <Personsettingsoutlined color="$color.primary" />
 * ```
 */
export const Personsettingsoutlined = styled(Svg, {
  name: 'Personsettingsoutlined',
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

export type PersonsettingsoutlinedProps = React.ComponentProps<typeof Personsettingsoutlined>
