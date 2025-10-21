import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/IcePopOutlined.svg'

/**
 * Icepopoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Icepopoutlined />
 * <Icepopoutlined width="$6" height="$6" />
 * <Icepopoutlined color="$color.primary" />
 * ```
 */
export const Icepopoutlined = styled(Svg, {
  name: 'Icepopoutlined',
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

export type IcepopoutlinedProps = React.ComponentProps<typeof Icepopoutlined>
