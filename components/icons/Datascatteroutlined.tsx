import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataScatterOutlined.svg'

/**
 * Datascatteroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Datascatteroutlined />
 * <Datascatteroutlined width="$6" height="$6" />
 * <Datascatteroutlined color="$color.primary" />
 * ```
 */
export const Datascatteroutlined = styled(Svg, {
  name: 'Datascatteroutlined',
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

export type DatascatteroutlinedProps = React.ComponentProps<typeof Datascatteroutlined>
