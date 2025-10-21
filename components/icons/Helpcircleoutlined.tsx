import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/HelpCircleOutlined.svg'

/**
 * Helpcircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Helpcircleoutlined />
 * <Helpcircleoutlined width="$6" height="$6" />
 * <Helpcircleoutlined color="$color.primary" />
 * ```
 */
export const Helpcircleoutlined = styled(Svg, {
  name: 'Helpcircleoutlined',
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

export type HelpcircleoutlinedProps = React.ComponentProps<typeof Helpcircleoutlined>
