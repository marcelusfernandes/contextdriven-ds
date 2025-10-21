import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentBillOutlined.svg'

/**
 * Documentbilloutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Documentbilloutlined />
 * <Documentbilloutlined width="$6" height="$6" />
 * <Documentbilloutlined color="$color.primary" />
 * ```
 */
export const Documentbilloutlined = styled(Svg, {
  name: 'Documentbilloutlined',
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

export type DocumentbilloutlinedProps = React.ComponentProps<typeof Documentbilloutlined>
