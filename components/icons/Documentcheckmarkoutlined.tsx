import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentCheckmarkOutlined.svg'

/**
 * Documentcheckmarkoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Documentcheckmarkoutlined />
 * <Documentcheckmarkoutlined width="$6" height="$6" />
 * <Documentcheckmarkoutlined color="$color.primary" />
 * ```
 */
export const Documentcheckmarkoutlined = styled(Svg, {
  name: 'Documentcheckmarkoutlined',
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

export type DocumentcheckmarkoutlinedProps = React.ComponentProps<typeof Documentcheckmarkoutlined>
