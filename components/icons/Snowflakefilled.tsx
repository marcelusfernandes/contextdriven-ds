import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SnowflakeFilled.svg'

/**
 * Snowflakefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Snowflakefilled />
 * <Snowflakefilled width="$6" height="$6" />
 * <Snowflakefilled color="$color.primary" />
 * ```
 */
export const Snowflakefilled = styled(Svg, {
  name: 'Snowflakefilled',
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

export type SnowflakefilledProps = React.ComponentProps<typeof Snowflakefilled>
