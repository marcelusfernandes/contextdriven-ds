import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AccessibilityCircleFilled.svg'

/**
 * Accessibilitycirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Accessibilitycirclefilled />
 * <Accessibilitycirclefilled width="$6" height="$6" />
 * <Accessibilitycirclefilled color="$color.primary" />
 * ```
 */
export const Accessibilitycirclefilled = styled(Svg, {
  name: 'Accessibilitycirclefilled',
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

export type AccessibilitycirclefilledProps = React.ComponentProps<typeof Accessibilitycirclefilled>
