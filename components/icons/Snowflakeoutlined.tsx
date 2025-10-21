import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SnowflakeOutlined.svg'

/**
 * Snowflakeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Snowflakeoutlined />
 * <Snowflakeoutlined width="$6" height="$6" />
 * <Snowflakeoutlined color="$color.primary" />
 * ```
 */
export const Snowflakeoutlined = styled(Svg, {
  name: 'Snowflakeoutlined',
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

export type SnowflakeoutlinedProps = React.ComponentProps<typeof Snowflakeoutlined>
