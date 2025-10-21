import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentOutlined.svg'

/**
 * Documentoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Documentoutlined />
 * <Documentoutlined width="$6" height="$6" />
 * <Documentoutlined color="$color.primary" />
 * ```
 */
export const Documentoutlined = styled(Svg, {
  name: 'Documentoutlined',
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

export type DocumentoutlinedProps = React.ComponentProps<typeof Documentoutlined>
