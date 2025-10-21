import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreSettingsFilled.svg'

/**
 * Storesettingsfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Storesettingsfilled />
 * <Storesettingsfilled width="$6" height="$6" />
 * <Storesettingsfilled color="$color.primary" />
 * ```
 */
export const Storesettingsfilled = styled(Svg, {
  name: 'Storesettingsfilled',
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

export type StoresettingsfilledProps = React.ComponentProps<typeof Storesettingsfilled>
