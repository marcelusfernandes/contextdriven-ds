import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BriefcaseOutlined.svg'

/**
 * Briefcaseoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Briefcaseoutlined />
 * <Briefcaseoutlined width="$6" height="$6" />
 * <Briefcaseoutlined color="$color.primary" />
 * ```
 */
export const Briefcaseoutlined = styled(Svg, {
  name: 'Briefcaseoutlined',
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

export type BriefcaseoutlinedProps = React.ComponentProps<typeof Briefcaseoutlined>
