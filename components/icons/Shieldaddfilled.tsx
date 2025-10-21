import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldAddFilled.svg'

/**
 * Shieldaddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldaddfilled />
 * <Shieldaddfilled width="$6" height="$6" />
 * <Shieldaddfilled color="$color.primary" />
 * ```
 */
export const Shieldaddfilled = styled(Svg, {
  name: 'Shieldaddfilled',
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

export type ShieldaddfilledProps = React.ComponentProps<typeof Shieldaddfilled>
