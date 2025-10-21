import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShareFilled.svg'

/**
 * Sharefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Sharefilled />
 * <Sharefilled width="$6" height="$6" />
 * <Sharefilled color="$color.primary" />
 * ```
 */
export const Sharefilled = styled(Svg, {
  name: 'Sharefilled',
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

export type SharefilledProps = React.ComponentProps<typeof Sharefilled>
