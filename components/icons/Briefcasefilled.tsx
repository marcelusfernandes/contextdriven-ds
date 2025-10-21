import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BriefcaseFilled.svg'

/**
 * Briefcasefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Briefcasefilled />
 * <Briefcasefilled width="$6" height="$6" />
 * <Briefcasefilled color="$color.primary" />
 * ```
 */
export const Briefcasefilled = styled(Svg, {
  name: 'Briefcasefilled',
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

export type BriefcasefilledProps = React.ComponentProps<typeof Briefcasefilled>
