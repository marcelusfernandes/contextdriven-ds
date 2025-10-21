import { createTamagui, createTokens } from '@tamagui/core'
import { tokens as dsTokens } from './tokens'

/**
 * Configuração do Tamagui para o DSZé
 * 
 * Este arquivo mapeia os tokens do Design System (tokens.ts) para o formato do Tamagui
 */

// Mapear tokens do DS para formato do Tamagui
const tokens = createTokens({
  color: dsTokens.color,
  space: dsTokens.space,
  size: dsTokens.size,
  radius: dsTokens.radius,
  zIndex: dsTokens.zIndex,
})

// Temas
const lightTheme = {
  background: dsTokens.color.white,
  backgroundHover: dsTokens.color.gray200,
  backgroundPress: dsTokens.color.gray200,
  backgroundFocus: dsTokens.color.gray200,
  borderColor: dsTokens.color.gray400,
  borderColorHover: dsTokens.color.gray500,
  borderColorFocus: dsTokens.color.gray600,
  color: dsTokens.color.black,
  colorHover: dsTokens.color.gray900,
  colorPress: dsTokens.color.gray900,
  colorFocus: dsTokens.color.gray900,
  shadowColor: dsTokens.color.blackAlpha20,
  shadowColorHover: dsTokens.color.blackAlpha50,
}

const darkTheme = {
  background: dsTokens.color.gray900,
  backgroundHover: dsTokens.color.gray800,
  backgroundPress: dsTokens.color.gray700,
  backgroundFocus: dsTokens.color.gray800,
  borderColor: dsTokens.color.gray600,
  borderColorHover: dsTokens.color.gray500,
  borderColorFocus: dsTokens.color.gray400,
  color: dsTokens.color.white,
  colorHover: dsTokens.color.gray200,
  colorPress: dsTokens.color.gray200,
  colorFocus: dsTokens.color.gray200,
  shadowColor: dsTokens.color.blackAlpha80,
  shadowColorHover: dsTokens.color.blackAlpha80,
}

// Configuração do Tamagui
const config = createTamagui({
  tokens,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  media: {
    xs: { maxWidth: dsTokens.breakpoint.xs },
    sm: { maxWidth: dsTokens.breakpoint.sm },
    md: { maxWidth: dsTokens.breakpoint.md },
    lg: { maxWidth: dsTokens.breakpoint.lg },
    xl: { maxWidth: dsTokens.breakpoint.xl },
    xxl: { maxWidth: dsTokens.breakpoint.xxl },
    gtXs: { minWidth: dsTokens.breakpoint.xs + 1 },
    gtSm: { minWidth: dsTokens.breakpoint.sm + 1 },
    gtMd: { minWidth: dsTokens.breakpoint.md + 1 },
    gtLg: { minWidth: dsTokens.breakpoint.lg + 1 },
    gtXl: { minWidth: dsTokens.breakpoint.xl + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  shorthands: {
    bg: 'backgroundColor',
    bc: 'borderColor',
    bw: 'borderWidth',
    br: 'borderRadius',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    p: 'padding',
    w: 'width',
    h: 'height',
    f: 'flex',
    fd: 'flexDirection',
    ai: 'alignItems',
    jc: 'justifyContent',
    fw: 'flexWrap',
    fs: 'flexShrink',
    fg: 'flexGrow',
  } as const,
  fonts: {
    body: {
      family: dsTokens.typography.fontFamily.body,
      size: {
        1: dsTokens.typography.fontSize.xs,
        2: dsTokens.typography.fontSize.sm,
        3: dsTokens.typography.fontSize.md,
        4: dsTokens.typography.fontSize.lg,
        5: dsTokens.typography.fontSize.xl,
        6: dsTokens.typography.fontSize.xxl,
        7: dsTokens.typography.fontSize.xxxl,
        8: dsTokens.typography.fontSize.h4,
        9: dsTokens.typography.fontSize.h3,
        10: dsTokens.typography.fontSize.h2,
        11: dsTokens.typography.fontSize.h1,
      },
      lineHeight: {
        1: dsTokens.typography.lineHeight.xs,
        2: dsTokens.typography.lineHeight.sm,
        3: dsTokens.typography.lineHeight.md,
        4: dsTokens.typography.lineHeight.lg,
        5: dsTokens.typography.lineHeight.xl,
        6: dsTokens.typography.lineHeight.xxl,
        7: dsTokens.typography.lineHeight.xxxl,
      },
      weight: {
        1: dsTokens.typography.fontWeight.regular,
        4: dsTokens.typography.fontWeight.regular,
        5: dsTokens.typography.fontWeight.medium,
        6: dsTokens.typography.fontWeight.semibold,
        7: dsTokens.typography.fontWeight.bold,
      },
      letterSpacing: {
        1: dsTokens.typography.letterSpacing.tight,
        4: dsTokens.typography.letterSpacing.normal,
        7: dsTokens.typography.letterSpacing.wide,
      },
    },
    heading: {
      family: dsTokens.typography.fontFamily.main,
      size: {
        1: dsTokens.typography.fontSize.h6,
        2: dsTokens.typography.fontSize.h5,
        3: dsTokens.typography.fontSize.h4,
        4: dsTokens.typography.fontSize.h3,
        5: dsTokens.typography.fontSize.h2,
        6: dsTokens.typography.fontSize.h1,
      },
      lineHeight: {
        1: dsTokens.typography.lineHeight.md,
        2: dsTokens.typography.lineHeight.lg,
        3: dsTokens.typography.lineHeight.xl,
        4: dsTokens.typography.lineHeight.xxl,
        5: dsTokens.typography.lineHeight.xxxl,
        6: dsTokens.typography.lineHeight.xxxl,
      },
      weight: {
        1: dsTokens.typography.fontWeight.semibold,
        6: dsTokens.typography.fontWeight.bold,
      },
    },
  },
  animations: {
    fast: {
      type: 'timing',
      duration: dsTokens.transition.duration.fast,
    },
    normal: {
      type: 'timing',
      duration: dsTokens.transition.duration.normal,
    },
    slow: {
      type: 'timing',
      duration: dsTokens.transition.duration.slow,
    },
    bouncy: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    lazy: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
    quick: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
  },
})

export type AppConfig = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config

