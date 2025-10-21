import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarHalf.svg'

/**
 * Starhalf Icon Component
 * 
 * @example
 * ```tsx
 * <Starhalf />
 * <Starhalf width="$6" height="$6" />
 * <Starhalf color="$color.primary" />
 * ```
 */
export const Starhalf = styled(Svg, {
  name: 'Starhalf',
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

export type StarhalfProps = React.ComponentProps<typeof Starhalf>
