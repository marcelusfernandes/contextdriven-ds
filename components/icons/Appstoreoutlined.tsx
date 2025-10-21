import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AppStoreOutlined.svg'

/**
 * Appstoreoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Appstoreoutlined />
 * <Appstoreoutlined width="$6" height="$6" />
 * <Appstoreoutlined color="$color.primary" />
 * ```
 */
export const Appstoreoutlined = styled(Svg, {
  name: 'Appstoreoutlined',
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

export type AppstoreoutlinedProps = React.ComponentProps<typeof Appstoreoutlined>
