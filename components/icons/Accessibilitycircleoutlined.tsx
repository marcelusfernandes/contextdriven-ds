import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AccessibilityCircleOutlined.svg'

/**
 * Accessibilitycircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Accessibilitycircleoutlined />
 * <Accessibilitycircleoutlined width="$6" height="$6" />
 * <Accessibilitycircleoutlined color="$color.primary" />
 * ```
 */
export const Accessibilitycircleoutlined = styled(Svg, {
  name: 'Accessibilitycircleoutlined',
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

export type AccessibilitycircleoutlinedProps = React.ComponentProps<typeof Accessibilitycircleoutlined>
