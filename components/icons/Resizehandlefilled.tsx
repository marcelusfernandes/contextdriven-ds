import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ResizeHandleFilled.svg'

/**
 * Resizehandlefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Resizehandlefilled />
 * <Resizehandlefilled width="$6" height="$6" />
 * <Resizehandlefilled color="$color.primary" />
 * ```
 */
export const Resizehandlefilled = styled(Svg, {
  name: 'Resizehandlefilled',
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

export type ResizehandlefilledProps = React.ComponentProps<typeof Resizehandlefilled>
