import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AppStoreFilled.svg'

/**
 * Appstorefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Appstorefilled />
 * <Appstorefilled width="$6" height="$6" />
 * <Appstorefilled color="$color.primary" />
 * ```
 */
export const Appstorefilled = styled(Svg, {
  name: 'Appstorefilled',
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

export type AppstorefilledProps = React.ComponentProps<typeof Appstorefilled>
