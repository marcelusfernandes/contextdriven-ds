import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ContactCardOutlined.svg'

/**
 * Contactcardoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Contactcardoutlined />
 * <Contactcardoutlined width="$6" height="$6" />
 * <Contactcardoutlined color="$color.primary" />
 * ```
 */
export const Contactcardoutlined = styled(Svg, {
  name: 'Contactcardoutlined',
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

export type ContactcardoutlinedProps = React.ComponentProps<typeof Contactcardoutlined>
