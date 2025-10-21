import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SettingsFilled.svg'

/**
 * Settingsfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Settingsfilled />
 * <Settingsfilled width="$6" height="$6" />
 * <Settingsfilled color="$color.primary" />
 * ```
 */
export const Settingsfilled = styled(Svg, {
  name: 'Settingsfilled',
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

export type SettingsfilledProps = React.ComponentProps<typeof Settingsfilled>
