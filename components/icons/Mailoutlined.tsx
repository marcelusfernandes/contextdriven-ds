import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MailOutlined.svg'

/**
 * Mailoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Mailoutlined />
 * <Mailoutlined width="$6" height="$6" />
 * <Mailoutlined color="$color.primary" />
 * ```
 */
export const Mailoutlined = styled(Svg, {
  name: 'Mailoutlined',
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

export type MailoutlinedProps = React.ComponentProps<typeof Mailoutlined>
