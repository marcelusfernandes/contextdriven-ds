import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataAreaOutlined.svg'

/**
 * Dataareaoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Dataareaoutlined />
 * <Dataareaoutlined width="$6" height="$6" />
 * <Dataareaoutlined color="$color.primary" />
 * ```
 */
export const Dataareaoutlined = styled(Svg, {
  name: 'Dataareaoutlined',
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

export type DataareaoutlinedProps = React.ComponentProps<typeof Dataareaoutlined>
