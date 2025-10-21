import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CodeOutlined.svg'

/**
 * Codeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Codeoutlined />
 * <Codeoutlined width="$6" height="$6" />
 * <Codeoutlined color="$color.primary" />
 * ```
 */
export const Codeoutlined = styled(Svg, {
  name: 'Codeoutlined',
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

export type CodeoutlinedProps = React.ComponentProps<typeof Codeoutlined>
