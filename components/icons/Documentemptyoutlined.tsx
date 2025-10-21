import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentEmptyOutlined.svg'

/**
 * Documentemptyoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Documentemptyoutlined />
 * <Documentemptyoutlined width="$6" height="$6" />
 * <Documentemptyoutlined color="$color.primary" />
 * ```
 */
export const Documentemptyoutlined = styled(Svg, {
  name: 'Documentemptyoutlined',
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

export type DocumentemptyoutlinedProps = React.ComponentProps<typeof Documentemptyoutlined>
