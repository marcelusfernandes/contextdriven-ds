import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreSettingsOutlined.svg'

/**
 * Storesettingsoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Storesettingsoutlined />
 * <Storesettingsoutlined width="$6" height="$6" />
 * <Storesettingsoutlined color="$color.primary" />
 * ```
 */
export const Storesettingsoutlined = styled(Svg, {
  name: 'Storesettingsoutlined',
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

export type StoresettingsoutlinedProps = React.ComponentProps<typeof Storesettingsoutlined>
