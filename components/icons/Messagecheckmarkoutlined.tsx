import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageCheckmarkOutlined.svg'

/**
 * Messagecheckmarkoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Messagecheckmarkoutlined />
 * <Messagecheckmarkoutlined width="$6" height="$6" />
 * <Messagecheckmarkoutlined color="$color.primary" />
 * ```
 */
export const Messagecheckmarkoutlined = styled(Svg, {
  name: 'Messagecheckmarkoutlined',
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

export type MessagecheckmarkoutlinedProps = React.ComponentProps<typeof Messagecheckmarkoutlined>
