/**
 * Design Tokens - DSZé (Compatível com Tamagui)
 * 
 * ✨ Arquitetura em 3 Camadas - Boas Práticas de Design Systems
 * 
 * Estrutura:
 * 1. Primitive Tokens - Valores raw, paleta completa (ex: gray800, zeYellow)
 * 2. Semantic Tokens - Intenção e contexto de uso (ex: text.primary, brand.primary)
 * 3. Component Tokens - Aplicação específica por componente (ex: button.primary.normal)
 * 
 * Fluxo:
 * Primitive → Semantic → Component → Tamagui recebe valores finais
 * 
 * Benefícios:
 * ✅ Funciona perfeitamente com Tamagui
 * ✅ Fonte única de verdade (zero duplicação)
 * ✅ Type-safe com TypeScript
 * ✅ Fácil manutenção e mudanças de tema
 * ✅ Segue boas práticas de Design Systems
 * ✅ Decisões de design centralizadas (camada semântica)
 */

// ================================================================================
// PRIMITIVE TOKENS (Fonte Única de Verdade)
// ================================================================================

/**
 * Tokens primitivos - valores raw definidos UMA ÚNICA VEZ
 * Estes são a fonte única de verdade para todos os valores
 */
const primitive = {
  /**
   * CORES PRIMITIVAS
   */
  color: {
    // Brand - Amarelo Zé
    zeYellow: '#ffcc00',
    zeYellowDark: '#cca300',
    zeYellowLight: '#ffe680',
    zeYellowLightest: '#fffae5',
    zeYellowDarkest: '#806600',
    
    // Neutral Colors
    black: '#000000',
    white: '#ffffff',
    
    // Gray Scale
    gray950: '#141417',
    gray900: '#1c1c1f',
    gray850: '#111111',
    gray800: '#333333',
    gray700: '#19191b',
    gray650: '#555555',
    gray600: '#1f1f22',
    gray500: '#888888',
    gray400: '#979797',
    gray350: '#c0c0c0',
    gray300: '#bbbbbb',
    gray250: '#eaeaea',
    gray200: '#eeeeee',
    gray150: '#d5d5d5',
    gray100: '#f7f7f7',
    
    // Destructive/Error - Red
    red: '#e91935',
    redDark: '#bc1229',
    redDarker: '#b60018',
    redLight: '#f48c9a',
    redLightest: '#fde8eb',
    redDarkest: '#47070f',
    
    // Success - Green
    successGreen: '#2c855f',
    successGreenDark: '#1f5d42',
    successGreenDarker: '#006440',
    successGreenLight: '#e6f7f0',
    successGreenText: '#236a4c',
    
    // Cold - Blue/Cyan
    coldBlue: '#118198',
    coldBlueLight: '#e0f7fc',
    coldBlueDark: '#050400',
    
    // Info - Cyan/Teal
    infoCyan: '#10a8c7',
    infoCyanDark: '#0c5a6a',
    infoTeal: '#0e677a',
    
    // Warning - Orange
    warningOrange: '#eb8207',
    warningOrangeLight: '#fef3e5',
    warningOrangeDark: '#b93200',
    warningOrangeText: '#bc6806',
    
    // ZeCompensa/Rewards - Purple
    zeCompensaPurple: '#6e3ce4',
    zeCompensaPurpleLight: '#f1ecfc',
    zeCompensaPurpleDark: '#3c1598',
    
    // Transparency - Black Alpha
    transparent: '#00000000',
    blackAlpha10: '#0000001a',
    blackAlpha20: '#00000033',
    blackAlpha50: '#00000080',
    blackAlpha80: '#000000cc',
    
    // Transparency - Gray800 Alpha
    gray800Alpha10: '#3333331a',
    gray800Alpha20: '#33333333',
    gray800Alpha50: '#33333380',
    gray800Alpha80: '#333333cc',
  },

  /**
   * ESPAÇAMENTOS PRIMITIVOS
   */
  space: {
    0: 0,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
  },

  /**
   * TAMANHOS PRIMITIVOS
   */
  size: {
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    36: 36,
    40: 40,
    44: 44,
    48: 48,
    52: 52,
    56: 56,
    64: 64,
    72: 72,
    124: 124,
    136: 136,
    328: 328,
    
    // Aliases semânticos para ícones (compatibilidade tokens-df)
    iconSmall: 20,
    iconMedium: 24,
    iconLarge: 32,
  },

  /**
   * BORDER RADIUS PRIMITIVOS
   */
  radius: {
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    round: 1000,
  },

  /**
   * TIPOGRAFIA PRIMITIVA
   */
  typography: {
    fontFamily: {
      display: 'Gelada RC3, Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',
      main: 'Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',
      content: 'Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',
      body: 'Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',
      mono: 'Monaco, Courier, monospace',
    },
    fontSize: {
      // Nomenclatura do Figma (semântica)
      peta: 48,
      giga: 36,
      mega: 28,
      extraLarge: 24,
      large: 20,
      medium: 16,
      small: 14,
      extraSmall: 12,
      micro: 10,
      
      // Legacy (compatibilidade tokens-df)
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      xxl: 20,
      xxxl: 24,
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 20,
      h5: 18,
      h6: 16,
    },
    fontWeight: {
      // Estrutura semântica (numbers)
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
      
      // Estrutura Display (Gelada RC3)
      display: {
        stronger: {
          normal: 900,
        },
      },
      
      // Estrutura Main (Roboto Flex - Titles e Highlights)
      main: {
        bold: {
          normal: 700,
        },
        semibold: {
          normal: 600,
        },
      },
      
      // Estrutura Content (Roboto Flex - Body)
      content: {
        regular: {
          normal: 400,
        },
        semibold: {
          normal: 600,
        },
      },
    },
    lineHeight: {
      close: {
        peta: 60,
        giga: 44,
        mega: 36,
        extraLarge: 32,
        large: 24,
        medium: 20,
        extraSmall: 16,
      },
      regular: {
        medium: 24,
        small: 20,
        extraSmall: 20,
      },
      tight: {
        small: 16,
        extraSmall: 12,
      },
      
      // Legacy (compatibilidade tokens-df)
      xs: 16,
      sm: 18,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    },
    letterSpacing: {
      regular: 0,
      
      // Legacy (compatibilidade tokens-df)
      tighter: -0.05,
      tight: -0.025,
      normal: 0,
      wide: 0.025,
      wider: 0.05,
    },
  },

  /**
   * OPACIDADE PRIMITIVA
   */
  opacity: {
    0: 0,
    10: 0.1,
    20: 0.2,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    80: 0.8,
    90: 0.9,
    100: 1,
  },

  /**
   * Z-INDEX PRIMITIVO
   */
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
    toast: 1700,
  },

  /**
   * TRANSIÇÕES PRIMITIVAS
   */
  transition: {
    duration: {
      instant: 0,
      fast: 100,
      normal: 200,
      slow: 300,
      slower: 500,
      autoClose: 5000,
    },
    easing: {
      linear: 'linear',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },

  /**
   * BREAKPOINTS PRIMITIVOS
   */
  breakpoint: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
} as const

// ================================================================================
// HELPER FUNCTION (Resolve referências para valores finais)
// ================================================================================

/**
 * Helper que resolve referências mantendo rastreabilidade
 * Tamagui recebe o valor final, mas o código mantém a referência clara
 */
const ref = <T>(value: T): T => value

// ================================================================================
// SEMANTIC TOKENS (Camada de Decisão)
// ================================================================================

/**
 * Tokens semânticos - definem INTENÇÃO e CONTEXTO de uso
 * Esta é a camada intermediária que:
 * - Referencia tokens primitivos
 * - Define significado e propósito (brand, feedback, text, etc)
 * - Facilita mudanças de tema
 * - Centraliza decisões de design
 */
const semantic = {
  /**
   * CORES SEMÂNTICAS - Por Intenção de Uso
   */
  color: {
    // Brand Identity
    brand: {
      primary: ref(primitive.color.zeYellow),
      primaryHover: ref(primitive.color.zeYellowDark),
      primaryActive: ref(primitive.color.zeYellowLight),
      primaryDisabled: ref(primitive.color.gray200),
      
      secondary: ref(primitive.color.zeCompensaPurple),
      secondaryLight: ref(primitive.color.zeCompensaPurpleLight),
      secondaryDark: ref(primitive.color.zeCompensaPurpleDark),
    },
    
    // Feedback/Status Colors
    feedback: {
      // Error
      error: ref(primitive.color.red),
      errorStrong: ref(primitive.color.redDark),
      errorStronger: ref(primitive.color.redDarker),
      errorSoft: ref(primitive.color.redLight),
      errorBg: ref(primitive.color.redLightest),
      errorBorder: ref(primitive.color.red),
      
      // Success
      success: ref(primitive.color.successGreen),
      successStrong: ref(primitive.color.successGreenDark),
      successStronger: ref(primitive.color.successGreenDarker),
      successBg: ref(primitive.color.successGreenLight),
      successText: ref(primitive.color.successGreenText),
      
      // Warning
      warning: ref(primitive.color.warningOrange),
      warningStrong: ref(primitive.color.warningOrangeDark),
      warningBg: ref(primitive.color.warningOrangeLight),
      warningText: ref(primitive.color.warningOrangeText),
      
      // Info
      info: ref(primitive.color.infoCyan),
      infoStrong: ref(primitive.color.infoTeal),
      infoDark: ref(primitive.color.infoCyanDark),
      infoBg: ref(primitive.color.coldBlueLight),
    },
    
    // Text Hierarchy
    text: {
      primary: ref(primitive.color.gray800),
      primaryStrong: ref(primitive.color.gray850),
      secondary: ref(primitive.color.gray500),
      tertiary: ref(primitive.color.gray400),
      disabled: ref(primitive.color.gray500),
      inverse: ref(primitive.color.white),
      onBrand: ref(primitive.color.black),
    },
    
    // Surface/Background
    surface: {
      primary: ref(primitive.color.white),
      secondary: ref(primitive.color.gray100),
      tertiary: ref(primitive.color.gray200),
      overlay: ref(primitive.color.blackAlpha50),
      overlayStrong: ref(primitive.color.blackAlpha80),
      transparent: ref(primitive.color.transparent),
    },
    
    // Border
    border: {
      default: ref(primitive.color.gray300),
      strong: ref(primitive.color.gray500),
      stronger: ref(primitive.color.gray650),
      subtle: ref(primitive.color.gray200),
      subtler: ref(primitive.color.gray150),
      dark: ref(primitive.color.gray900),
      darkStrong: ref(primitive.color.gray800),
    },
    
    // Interactive States (generics)
    interactive: {
      default: ref(primitive.color.gray800),
      hover: ref(primitive.color.gray700),
      active: ref(primitive.color.gray400),
      disabled: ref(primitive.color.gray500),
      focus: ref(primitive.color.gray650),
      
      // Backgrounds for interactive
      bgHover: ref(primitive.color.gray100),
      bgActive: ref(primitive.color.gray200),
      bgFocus: ref(primitive.color.gray200),
      
      // Alphas for overlays
      alphaHover: ref(primitive.color.gray800Alpha20),
      alphaActive: ref(primitive.color.gray800Alpha20),
      alphaFocus: ref(primitive.color.gray800Alpha50),
      alphaDisabled: ref(primitive.color.gray800Alpha10),
    },
  },
  
  /**
   * ESPAÇAMENTOS SEMÂNTICOS
   */
  spacing: {
    // Component spacing
    component: {
      gapSmall: ref(primitive.space[8]),
      gapMedium: ref(primitive.space[12]),
      gapLarge: ref(primitive.space[16]),
      
      paddingSmall: ref(primitive.space[8]),
      paddingMedium: ref(primitive.space[12]),
      paddingLarge: ref(primitive.space[16]),
    },
    
    // Layout spacing
    layout: {
      sectionGap: ref(primitive.space[24]),
      containerPadding: ref(primitive.space[16]),
      containerPaddingLarge: ref(primitive.space[24]),
    },
  },
  
  /**
   * TAMANHOS SEMÂNTICOS
   */
  sizing: {
    // Interactive elements (acessibilidade)
    interactive: {
      minHeight: ref(primitive.size[44]), // WCAG touch target
      minWidth: ref(primitive.size[44]),
    },
    
    // Icon sizes
    icon: {
      micro: ref(primitive.size[12]),
      extraSmall: ref(primitive.size[16]),
      small: ref(primitive.size[20]),
      medium: ref(primitive.size[24]),
      large: ref(primitive.size[28]),
      extraLarge: ref(primitive.size[32]),
    },
  },
  
  /**
   * BORDER RADIUS SEMÂNTICOS
   */
  radius: {
    component: {
      small: ref(primitive.radius[8]),
      smallMedium: ref(primitive.radius[12]),
      medium: ref(primitive.radius[16]),
      large: ref(primitive.radius[20]),
      circular: ref(primitive.radius.round),
    },
    
    icon: {
      small: ref(primitive.radius[4]),
      medium: ref(primitive.radius[8]),
    },
  },
} as const

// ================================================================================
// COMPONENT TOKENS (Camada de Aplicação)
// ================================================================================

/**
 * Tokens de componentes - aplicação específica por componente
 * - Referenciam tokens SEMÂNTICOS (não primitivos)
 * - Define como cada componente usa os tokens
 * - Organizado por: component → property → variant → state
 */
export const tokens = {
  /**
   * Expor acesso direto aos tokens primitivos e semânticos
   */
  color: primitive.color,
  space: primitive.space,
  size: primitive.size,
  radius: primitive.radius,
  typography: primitive.typography,
  opacity: primitive.opacity,
  zIndex: primitive.zIndex,
  transition: primitive.transition,
  breakpoint: primitive.breakpoint,
  
  // Expor semantic tokens
  semantic: semantic,

  /**
   * BUTTON
   */
  button: {
    size: {
      small: {
        height: 36,
        paddingVertical: ref(semantic.spacing.component.paddingSmall),
        paddingHorizontal: ref(semantic.spacing.component.paddingLarge),
        borderRadius: ref(semantic.radius.component.smallMedium),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        iconSize: ref(semantic.sizing.icon.small),
        gap: ref(semantic.spacing.component.gapSmall),
        minWidth: ref(semantic.sizing.interactive.minWidth),
      },
      medium: {
        height: 48,
        paddingVertical: ref(semantic.spacing.component.paddingMedium),
        paddingHorizontal: ref(semantic.spacing.component.paddingLarge),
        borderRadius: ref(semantic.radius.component.medium),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        iconSize: ref(semantic.sizing.icon.medium),
        gap: ref(semantic.spacing.component.gapSmall),
        minWidth: ref(semantic.sizing.interactive.minWidth),
      },
    },
    
    variant: {
      primary: {
        normal: {
          bg: ref(semantic.color.brand.primary),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.brand.primary),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.onBrand),
        },
        hover: {
          bg: ref(semantic.color.brand.primaryHover),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.brand.primaryHover),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.onBrand),
        },
        focus: {
          bg: ref(semantic.color.brand.primaryHover),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.brand.primaryHover),
          borderWidth: 2,
          iconColor: ref(semantic.color.text.onBrand),
        },
        active: {
          bg: ref(semantic.color.brand.primaryActive),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.brand.primaryActive),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.onBrand),
        },
        disabled: {
          bg: ref(semantic.color.brand.primaryDisabled),
          color: ref(semantic.color.text.disabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.disabled),
        },
        loading: {
          bg: ref(semantic.color.brand.primary),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.brand.primary),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.onBrand),
        },
      },
      
      secondary: {
        normal: {
          bg: ref(semantic.color.surface.transparent),
          color: ref(semantic.color.text.primary),
          borderColor: ref(semantic.color.border.dark),
          borderWidth: 1,
          iconColor: ref(semantic.color.text.primary),
        },
        hover: {
          bg: ref(semantic.color.interactive.hover),
          color: ref(semantic.color.text.inverse),
          borderColor: ref(semantic.color.interactive.hover),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.inverse),
        },
        focus: {
          bg: ref(semantic.color.interactive.hover),
          color: ref(semantic.color.text.inverse),
          borderColor: ref(semantic.color.interactive.active),
          borderWidth: 2,
          iconColor: ref(semantic.color.text.inverse),
        },
        active: {
          bg: ref(semantic.color.interactive.active),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.interactive.active),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.onBrand),
        },
        disabled: {
          bg: ref(semantic.color.brand.primaryDisabled),
          color: ref(semantic.color.text.disabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.disabled),
        },
        loading: {
          bg: ref(semantic.color.surface.transparent),
          color: ref(semantic.color.text.onBrand),
          borderColor: ref(semantic.color.border.darkStrong),
          borderWidth: 1,
          iconColor: ref(semantic.color.border.dark),
        },
      },
      
      tertiary: {
        normal: {
          bg: ref(semantic.color.surface.transparent),
          color: ref(semantic.color.text.primary),
          borderColor: ref(semantic.color.border.darkStrong),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.primary),
        },
        hover: {
          bg: ref(semantic.color.interactive.alphaHover),
          color: ref(semantic.color.text.primary),
          borderColor: ref(semantic.color.interactive.hover),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.primary),
        },
        focus: {
          bg: ref(semantic.color.interactive.alphaHover),
          color: ref(semantic.color.text.primary),
          borderColor: ref(semantic.color.interactive.alphaFocus),
          borderWidth: 2,
          iconColor: ref(semantic.color.text.primary),
        },
        active: {
          bg: ref(semantic.color.interactive.alphaActive),
          color: ref(semantic.color.text.primary),
          borderColor: ref(semantic.color.interactive.active),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.primary),
        },
        disabled: {
          bg: ref(semantic.color.brand.primaryDisabled),
          color: ref(semantic.color.text.disabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.disabled),
        },
        loading: {
          bg: ref(semantic.color.interactive.alphaDisabled),
          color: ref(semantic.color.text.primary),
          borderColor: ref(semantic.color.interactive.alphaDisabled),
          borderWidth: 2,
          iconColor: ref(semantic.color.text.primary),
        },
      },
      
      destructive: {
        normal: {
          bg: ref(semantic.color.surface.transparent),
          color: ref(semantic.color.feedback.errorStrong),
          borderColor: ref(semantic.color.feedback.error),
          borderWidth: 1,
          iconColor: ref(semantic.color.feedback.errorStrong),
        },
        hover: {
          bg: ref(semantic.color.feedback.errorStrong),
          color: ref(semantic.color.text.inverse),
          borderColor: ref(semantic.color.feedback.errorStrong),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.inverse),
        },
        focus: {
          bg: ref(semantic.color.feedback.error),
          color: ref(semantic.color.text.inverse),
          borderColor: ref(semantic.color.feedback.errorSoft),
          borderWidth: 2,
          iconColor: ref(semantic.color.text.inverse),
        },
        active: {
          bg: ref(semantic.color.feedback.errorStrong),
          color: ref(semantic.color.text.inverse),
          borderColor: ref(semantic.color.feedback.errorStrong),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.inverse),
        },
        disabled: {
          bg: ref(semantic.color.brand.primaryDisabled),
          color: ref(semantic.color.text.disabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
          iconColor: ref(semantic.color.text.disabled),
        },
        loading: {
          bg: ref(semantic.color.surface.transparent),
          color: ref(semantic.color.feedback.errorStrong),
          borderColor: ref(semantic.color.feedback.error),
          borderWidth: 1,
          iconColor: ref(semantic.color.feedback.errorStrong),
        },
      },
    },
    
    loading: {
      dotSize: ref(primitive.size[8]),
      gap: ref(semantic.spacing.component.gapMedium),
      dotBorderRadius: ref(semantic.radius.component.circular),
      dotActiveColor: ref(primitive.color.gray800Alpha80),
      dotInactiveColor: ref(semantic.color.interactive.alphaHover),
    },
  },
  
  /**
   * ICON
   */
  icon: {
    size: {
      micro: ref(semantic.sizing.icon.micro),
      extraSmall: ref(semantic.sizing.icon.extraSmall),
      small: ref(semantic.sizing.icon.small),
      medium: ref(semantic.sizing.icon.medium),
      large: ref(semantic.sizing.icon.large),
      extraLarge: ref(semantic.sizing.icon.extraLarge),
    },
    color: {
      normal: ref(semantic.color.text.primary),
    },
  },

  /**
   * LOADING
   */
  loading: {
    size: {
      dot: ref(primitive.size[8]),
      gap: ref(semantic.spacing.component.gapMedium),
      borderRadius: ref(semantic.radius.component.circular),
    },
    
    brand: {
      default: {
        active: {
          bg: ref(primitive.color.gray800Alpha80),
          bgHex: ref(primitive.color.gray800Alpha80), // Compatibilidade tokens-df
        },
        inactive: {
          bg: ref(semantic.color.interactive.alphaHover),
          bgHex: ref(semantic.color.interactive.alphaHover), // Compatibilidade tokens-df
        },
      },
      rewards: {
        active: {
          bg: ref(semantic.color.brand.secondary),
        },
        inactive: {
          bg: ref(semantic.color.brand.secondaryLight),
        },
      },
    },
    
    animation: {
      duration: 1200,
      frameDuration: 400,
      easing: ref(primitive.transition.easing.linear),
    },
  },

  /**
   * CHECKBOX
   */
  checkbox: {
    size: {
      small: {
        input: {
          height: 36,
          paddingVertical: ref(semantic.spacing.component.paddingSmall),
          paddingHorizontal: ref(semantic.spacing.component.paddingSmall),
          borderRadius: ref(semantic.radius.component.small),
          gap: ref(semantic.spacing.component.gapSmall),
          fontSize: ref(primitive.typography.fontSize.small),
          lineHeight: ref(primitive.typography.lineHeight.regular.small),
          fontWeight: ref(primitive.typography.fontWeight.regular),
          iconPlateSize: ref(semantic.sizing.icon.small),
          iconPlateBorderRadius: ref(semantic.radius.icon.small),
        },
        single: {
          size: ref(semantic.sizing.icon.small),
          borderRadius: ref(semantic.radius.icon.small),
        },
      },
      medium: {
        input: {
          height: 48,
          paddingVertical: ref(semantic.spacing.component.paddingMedium),
          paddingHorizontal: ref(semantic.spacing.component.paddingMedium),
          borderRadius: ref(semantic.radius.component.smallMedium),
          gap: ref(semantic.spacing.component.gapSmall),
          fontSize: ref(primitive.typography.fontSize.medium),
          lineHeight: ref(primitive.typography.lineHeight.regular.medium),
          fontWeight: ref(primitive.typography.fontWeight.regular),
          iconPlateSize: ref(semantic.sizing.icon.medium),
          iconPlateBorderRadius: ref(semantic.radius.icon.medium),
        },
        single: {
          size: ref(semantic.sizing.icon.medium),
          borderRadius: ref(semantic.radius.icon.medium),
        },
      },
    },
    
    state: {
      normal: {
        enabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.text.primary),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.text.primary),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: ref(semantic.color.border.default),
          iconPlateIconColor: ref(semantic.color.text.primaryStrong),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.primaryStrong),
          bgColor: ref(semantic.color.interactive.bgHover),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: ref(semantic.color.border.stronger),
          iconPlateIconColor: ref(semantic.color.text.primaryStrong),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.primaryStrong),
          bgColor: ref(semantic.color.interactive.bgActive),
          borderColor: ref(semantic.color.border.stronger),
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: ref(semantic.color.border.strong),
          iconPlateIconColor: ref(semantic.color.text.primaryStrong),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.primaryStrong),
          bgColor: ref(semantic.color.interactive.bgActive),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.text.disabled),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.text.disabled),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
      },
      error: {
        enabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.feedback.errorStrong),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.feedback.errorStrong),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: ref(semantic.color.feedback.errorBg),
          iconPlateIconColor: ref(semantic.color.text.onBrand),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.onBrand),
          bgColor: ref(semantic.color.feedback.errorBg),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: ref(primitive.color.redDarkest),
          iconPlateIconColor: ref(semantic.color.text.onBrand),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.onBrand),
          bgColor: ref(semantic.color.feedback.errorBg),
          borderColor: ref(primitive.color.redDarkest),
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: ref(semantic.color.feedback.errorSoft),
          iconPlateIconColor: ref(semantic.color.text.onBrand),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.onBrand),
          bgColor: ref(semantic.color.feedback.errorBg),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.text.disabled),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.text.disabled),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * RADIOBUTTON
   * Componente de radio button (seleção única) com border radius circular
   * Reutiliza as mesmas cores do Checkbox (apenas muda o borderRadius)
   */
  radioButton: {
    size: {
      small: {
        input: {
          height: 36,
          paddingVertical: ref(semantic.spacing.component.paddingSmall),
          paddingHorizontal: ref(semantic.spacing.component.paddingSmall),
          borderRadius: ref(semantic.radius.component.small),
          gap: ref(semantic.spacing.component.gapSmall),
          fontSize: ref(primitive.typography.fontSize.small),
          lineHeight: ref(primitive.typography.lineHeight.regular.small),
          fontWeight: ref(primitive.typography.fontWeight.regular),
          iconPlateSize: ref(semantic.sizing.icon.small),
          iconPlateBorderRadius: ref(semantic.radius.component.circular), // CIRCULAR!
        },
        single: {
          size: ref(semantic.sizing.icon.small),
          borderRadius: ref(semantic.radius.component.circular), // CIRCULAR!
        },
      },
      medium: {
        input: {
          height: 48,
          paddingVertical: ref(semantic.spacing.component.paddingMedium),
          paddingHorizontal: ref(semantic.spacing.component.paddingMedium),
          borderRadius: ref(semantic.radius.component.smallMedium),
          gap: ref(semantic.spacing.component.gapSmall),
          fontSize: ref(primitive.typography.fontSize.medium),
          lineHeight: ref(primitive.typography.lineHeight.regular.medium),
          fontWeight: ref(primitive.typography.fontWeight.regular),
          iconPlateSize: ref(semantic.sizing.icon.medium),
          iconPlateBorderRadius: ref(semantic.radius.component.circular), // CIRCULAR!
        },
        single: {
          size: ref(semantic.sizing.icon.medium),
          borderRadius: ref(semantic.radius.component.circular), // CIRCULAR!
        },
      },
    },
    
    // Reutiliza 100% os estados do checkbox (cores idênticas)
    state: {
      normal: {
        enabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.text.primary),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.text.primary),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: ref(semantic.color.border.default),
          iconPlateIconColor: ref(semantic.color.text.primaryStrong),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.primaryStrong),
          bgColor: ref(semantic.color.interactive.bgHover),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: ref(semantic.color.border.stronger),
          iconPlateIconColor: ref(semantic.color.text.primaryStrong),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.primaryStrong),
          bgColor: ref(semantic.color.interactive.bgActive),
          borderColor: ref(semantic.color.border.stronger),
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: ref(semantic.color.border.strong),
          iconPlateIconColor: ref(semantic.color.text.primaryStrong),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.primaryStrong),
          bgColor: ref(semantic.color.interactive.bgActive),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.text.disabled),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.text.disabled),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
      },
      error: {
        enabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.feedback.errorStrong),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.feedback.errorStrong),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: ref(semantic.color.feedback.errorBg),
          iconPlateIconColor: ref(semantic.color.text.onBrand),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.onBrand),
          bgColor: ref(semantic.color.feedback.errorBg),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: ref(primitive.color.redDarkest),
          iconPlateIconColor: ref(semantic.color.text.onBrand),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.onBrand),
          bgColor: ref(semantic.color.feedback.errorBg),
          borderColor: ref(primitive.color.redDarkest),
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: ref(semantic.color.feedback.errorSoft),
          iconPlateIconColor: ref(semantic.color.text.onBrand),
          iconPlateBorderWidth: 2,
          textColor: ref(semantic.color.text.onBrand),
          bgColor: ref(semantic.color.feedback.errorBg),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: ref(semantic.color.surface.transparent),
          iconPlateIconColor: ref(semantic.color.text.disabled),
          iconPlateBorderWidth: 0,
          textColor: ref(semantic.color.text.disabled),
          bgColor: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.surface.transparent),
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * BUTTON ICON
   * Botão apenas com ícone (sem texto)
   * Reutiliza as mesmas cores do componente Button
   */
  buttonIcon: {
    size: {
      small: {
        width: 36,
        height: 36,
        iconSize: ref(semantic.sizing.icon.small),
        padding: ref(semantic.spacing.component.paddingSmall),
        borderRadius: ref(semantic.radius.component.smallMedium),
      },
      medium: {
        width: 48,
        height: 48,
        iconSize: ref(semantic.sizing.icon.medium),
        padding: ref(semantic.spacing.component.paddingMedium),
        borderRadius: ref(semantic.radius.component.medium),
      },
    },
    
    variant: {
      primary: {
        normal: {
          iconColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.brand.primary),
          borderColor: ref(semantic.color.brand.primary),
          borderWidth: 0,
        },
        hover: {
          iconColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.brand.primaryHover),
          borderColor: ref(semantic.color.brand.primaryHover),
          borderWidth: 0,
        },
        focus: {
          iconColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.brand.primaryHover),
          borderColor: ref(semantic.color.brand.primaryHover),
          borderWidth: 2,
        },
        active: {
          iconColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.brand.primaryActive),
          borderColor: ref(semantic.color.brand.primaryActive),
          borderWidth: 0,
        },
        disabled: {
          iconColor: ref(semantic.color.text.disabled),
          bg: ref(semantic.color.brand.primaryDisabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
        },
        loading: {
          iconColor: ref(semantic.color.text.onBrand),
          spinnerColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.brand.primary),
          borderColor: ref(semantic.color.brand.primary),
          borderWidth: 0,
        },
      },
      
      secondary: {
        normal: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.border.dark),
          borderWidth: 1,
        },
        hover: {
          iconColor: ref(semantic.color.text.inverse),
          bg: ref(semantic.color.interactive.hover),
          borderColor: ref(semantic.color.interactive.hover),
          borderWidth: 0,
        },
        focus: {
          iconColor: ref(semantic.color.text.inverse),
          bg: ref(semantic.color.interactive.hover),
          borderColor: ref(semantic.color.interactive.active),
          borderWidth: 2,
        },
        active: {
          iconColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.interactive.active),
          borderColor: ref(semantic.color.interactive.active),
          borderWidth: 0,
        },
        disabled: {
          iconColor: ref(semantic.color.text.disabled),
          bg: ref(semantic.color.brand.primaryDisabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
        },
        loading: {
          iconColor: ref(semantic.color.text.inverse),
          spinnerColor: ref(semantic.color.text.onBrand),
          bg: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.border.darkStrong),
          borderWidth: 1,
        },
      },
      
      tertiary: {
        normal: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.border.darkStrong),
          borderWidth: 0,
        },
        hover: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaHover),
          borderColor: ref(semantic.color.interactive.hover),
          borderWidth: 0,
        },
        focus: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaHover),
          borderColor: ref(semantic.color.interactive.alphaFocus),
          borderWidth: 2,
        },
        active: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaActive),
          borderColor: ref(semantic.color.interactive.active),
          borderWidth: 0,
        },
        disabled: {
          iconColor: ref(semantic.color.text.disabled),
          bg: ref(semantic.color.brand.primaryDisabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
        },
        loading: {
          iconColor: ref(semantic.color.text.primary),
          spinnerColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaDisabled),
          borderColor: ref(semantic.color.interactive.alphaDisabled),
          borderWidth: 2,
        },
      },
      
      destructive: {
        normal: {
          iconColor: ref(semantic.color.feedback.errorStrong),
          bg: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.feedback.error),
          borderWidth: 1,
        },
        hover: {
          iconColor: ref(semantic.color.text.inverse),
          bg: ref(semantic.color.feedback.errorStrong),
          borderColor: ref(semantic.color.feedback.errorStrong),
          borderWidth: 0,
        },
        focus: {
          iconColor: ref(semantic.color.text.inverse),
          bg: ref(semantic.color.feedback.error),
          borderColor: ref(semantic.color.feedback.errorSoft),
          borderWidth: 2,
        },
        active: {
          iconColor: ref(semantic.color.text.inverse),
          bg: ref(semantic.color.feedback.error),
          borderColor: ref(semantic.color.feedback.errorStrong),
          borderWidth: 0,
        },
        disabled: {
          iconColor: ref(semantic.color.text.disabled),
          bg: ref(semantic.color.brand.primaryDisabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
        },
        loading: {
          iconColor: ref(semantic.color.feedback.errorStrong),
          spinnerColor: ref(semantic.color.feedback.errorStrong),
          bg: ref(semantic.color.surface.transparent),
          borderColor: ref(semantic.color.feedback.error),
          borderWidth: 1,
        },
      },
    },
  },

  /**
   * DISMISS BUTTON
   * Botão circular de fechar/dismiss
   */
  dismissButton: {
    size: {
      extraSmall: {
        width: ref(semantic.sizing.icon.small),
        height: ref(semantic.sizing.icon.small),
        iconSize: ref(semantic.sizing.icon.micro),
        padding: ref(primitive.space[4]),
        borderRadius: ref(semantic.radius.component.circular),
      },
      small: {
        width: ref(semantic.sizing.icon.medium),
        height: ref(semantic.sizing.icon.medium),
        iconSize: ref(semantic.sizing.icon.extraSmall),
        padding: ref(primitive.space[4]),
        borderRadius: ref(semantic.radius.component.circular),
      },
      medium: {
        width: ref(primitive.size[32]),
        height: ref(primitive.size[32]),
        iconSize: ref(semantic.sizing.icon.medium),
        padding: ref(primitive.space[4]),
        borderRadius: ref(semantic.radius.component.circular),
      },
    },
    
    variant: {
      default: {
        normal: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaDisabled),
          borderColor: ref(semantic.color.interactive.alphaDisabled),
          borderWidth: 0,
        },
        hover: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaHover),
          borderColor: ref(semantic.color.interactive.alphaHover),
          borderWidth: 0,
        },
        focus: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaHover),
          borderColor: ref(semantic.color.interactive.alphaFocus),
          borderWidth: 1,
        },
        active: {
          iconColor: ref(semantic.color.text.primary),
          bg: ref(semantic.color.interactive.alphaHover),
          borderColor: ref(semantic.color.interactive.alphaHover),
          borderWidth: 0,
        },
        disabled: {
          iconColor: ref(semantic.color.text.disabled),
          bg: ref(semantic.color.brand.primaryDisabled),
          borderColor: ref(semantic.color.brand.primaryDisabled),
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * INPUT FIELD
   * Componente de composição que envolve InputSingle/InputTextarea
   * Adiciona label, optional tag, notification e counter
   * 
   * Este é um wrapper que adiciona metadados visuais aos inputs
   * O input interno (InputSingle/InputTextarea) mantém seus próprios estilos
   */
  inputField: {
    size: {
      medium: {
        headingGap: ref(primitive.space[8]),              // Gap entre label e optional
        gap: ref(primitive.space[8]),                     // Gap vertical (heading → input → footer)
        footerGap: ref(primitive.space[16]),              // Gap entre notification e counter
        
        // Tipografia - Label
        labelFontSize: ref(primitive.typography.fontSize.small),
        labelLineHeight: ref(primitive.typography.lineHeight.tight.small),
        labelFontWeight: ref(primitive.typography.fontWeight.regular),
        
        // Tipografia - Optional Tag
        optionalFontSize: ref(primitive.typography.fontSize.extraSmall),
        optionalLineHeight: ref(primitive.typography.lineHeight.close.extraSmall),
        optionalFontWeight: ref(primitive.typography.fontWeight.regular),
        
        // Tipografia - Notification / Counter
        notificationFontSize: ref(primitive.typography.fontSize.small),
        notificationLineHeight: ref(primitive.typography.lineHeight.regular.small),
        notificationFontWeight: ref(primitive.typography.fontWeight.regular),
        
        counterFontSize: ref(primitive.typography.fontSize.small),
        counterLineHeight: ref(primitive.typography.lineHeight.regular.small),
        counterFontWeight: ref(primitive.typography.fontWeight.regular),
      },
    },
    
    // Estados (cores dos metadados + input interno)
    state: {
      normal: {
        // Metadados (label, optional, notification, counter)
        labelColor: ref(primitive.color.gray800),
        optionalColor: ref(primitive.color.gray800),
        notificationColor: ref(primitive.color.gray650),
        counterColor: ref(primitive.color.gray650),
        
        // Input interno
        inputBgColor: ref(primitive.color.white),
        inputBorderColor: ref(primitive.color.gray300),
      },
      error: {
        // Metadados
        labelColor: ref(primitive.color.redDark),
        optionalColor: ref(primitive.color.redDark),
        notificationColor: ref(primitive.color.redDark),
        counterColor: ref(primitive.color.redDark),
        
        // Input interno
        inputBgColor: ref(primitive.color.white),
        inputBorderColor: ref(primitive.color.redDark),
      },
      disabled: {
        // Metadados
        labelColor: ref(primitive.color.gray500),
        optionalColor: ref(primitive.color.gray500),
        notificationColor: ref(primitive.color.gray500),
        counterColor: ref(primitive.color.gray500),
        
        // Input interno
        inputBgColor: ref(primitive.color.gray200),
        inputBorderColor: ref(primitive.color.gray200),
      },
    },
    
    // Border padrão (quando não tem estado específico)
    defaultBorderColor: ref(primitive.color.gray650),
  },

  /**
   * INPUT SINGLE
   * Campo de entrada de texto de linha única (node-id: 4921-43563)
   * 
   * Componente base para todos os inputs do sistema
   * Estados: Normal (vazio), Filled (preenchido), Disabled
   * Foco: Blurred (sem foco), Focused (com foco)
   * Feedback: Normal, Error
   * 
   * Este componente combina 4 dimensões de estados:
   * - Tamanho (small, medium)
   * - Preenchimento (normal, filled, disabled)
   * - Foco (blurred, focused)
   * - Feedback (normal, error)
   */
  inputSingle: {
    // Tamanhos base
    size: {
      small: {
        height: 36,
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[12]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        gap: ref(primitive.space[8]),
      },
      medium: {
        height: 48,
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[16]),
        borderRadius: ref(primitive.radius[16]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        gap: ref(primitive.space[8]),
      },
    },
    
    // Estados visuais (combinação de feedback + foco + preenchimento)
    // 💡 Border width aumenta de 1→2 quando focado (exceto disabled)
    state: {
      // Feedback Normal (sem erro)
      normal: {
        // Focus False (Blurred)
        blurred: {
          normal: {
            labelColor: ref(primitive.color.gray500),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray300),
            borderWidth: 1,
          },
          filled: {
            labelColor: ref(primitive.color.gray650),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray300),
            borderWidth: 1,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            textColor: ref(primitive.color.gray500),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1,
          },
        },
        // Focus True (Focused)
        focused: {
          normal: {
            labelColor: ref(primitive.color.gray500),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray650),
            borderWidth: 2,
          },
          filled: {
            labelColor: ref(primitive.color.gray650),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray650),
            borderWidth: 2,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            textColor: ref(primitive.color.gray500),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1, // Não muda quando focado
          },
        },
      },
      
      // Feedback Error
      error: {
        // Focus False (Blurred)
        blurred: {
          normal: {
            labelColor: ref(primitive.color.gray300),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray300),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 1,
          },
          filled: {
            labelColor: ref(primitive.color.redDark),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray300),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 1,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            textColor: ref(primitive.color.gray500),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1,
          },
        },
        // Focus True (Focused)
        focused: {
          normal: {
            labelColor: ref(primitive.color.gray300),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray300),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 2,
          },
          filled: {
            labelColor: ref(primitive.color.redDark),
            textColor: ref(primitive.color.gray800),
            placeholderColor: ref(primitive.color.gray300),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 2,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            textColor: ref(primitive.color.gray500),
            placeholderColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1, // Não muda quando focado
          },
        },
      },
    },
  },

  /**
   * INPUT TEXTAREA
   * Campo de texto multilinhas (node-id: 4943-44572)
   * 
   * Baseado no InputSingle - reutiliza TODOS os tokens de cores
   * Diferenças: altura mínima (variável), múltiplas linhas, ícone de resize
   * Estados: Normal, Filled, Disabled, Focused, Blurred, Error
   * 
   * 🔄 Reutiliza cores do inputSingle.state
   * 🆕 Adiciona apenas tokens de dimensão e ícone de resize
   */
  inputTextarea: {
    // Tamanhos base (altura mínima, não fixa)
    size: {
      small: {
        minHeight: 56,
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[12]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        gap: ref(primitive.space[8]),
      },
      medium: {
        minHeight: 72,
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[16]),
        borderRadius: ref(primitive.radius[16]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        gap: ref(primitive.space[8]),
      },
    },
    
    // Ícone de redimensionamento (canto inferior direito)
    // Cores seguem o mesmo padrão do InputSingle
    resizingIcon: {
      size: 16, // Tamanho fixo do ícone
      // Cores por estado (reutiliza cores do InputSingle)
      normal: {
        blurred: {
          normal: ref(primitive.color.gray500),
          filled: ref(primitive.color.gray500),
        },
        focused: {
          normal: ref(primitive.color.gray500),
          filled: ref(primitive.color.gray500),
        },
      },
      error: {
        blurred: {
          normal: ref(primitive.color.redDark),
          filled: ref(primitive.color.redDark),
        },
        focused: {
          normal: ref(primitive.color.redDark),
          filled: ref(primitive.color.redDark),
        },
      },
    },
    
    // 💡 Estados visuais (cores) são reutilizados do inputSingle.state
    // O InputTextarea usa exatamente as mesmas cores, apenas muda dimensões
  },

  /**
   * INPUT SELECT
   * Campo de seleção dropdown (node-id: 4946-45056)
   * 
   * Reutiliza 95% do InputSingle - mesmos estados e cores
   * Diferença: trailing icon (ChevronDown) obrigatório
   * Estados: Normal, Filled, Disabled, Focused, Blurred, Error
   * 
   * 🔄 Reutiliza cores do inputSingle.state
   * 🆕 Adiciona apenas trailing icon color por estado
   */
  inputSelect: {
    // Tamanhos base (idênticos ao InputSingle)
    size: {
      small: {
        height: 36,
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[12]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        gap: ref(primitive.space[8]),
        iconSize: 20,
      },
      medium: {
        height: 48,
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[16]),
        borderRadius: ref(primitive.radius[16]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        gap: ref(primitive.space[8]),
        iconSize: 20,
      },
    },
    
    // Trailing Icon (ChevronDown) - cores específicas por estado
    trailingIcon: {
      // Feedback Normal
      normal: {
        blurred: {
          normal: ref(primitive.color.gray800),
          filled: ref(primitive.color.gray800),
          disabled: ref(primitive.color.gray500),
        },
        focused: {
          normal: ref(primitive.color.gray800),
          filled: ref(primitive.color.gray800),
          disabled: ref(primitive.color.gray500),
        },
      },
      // Feedback Error
      error: {
        blurred: {
          normal: ref(primitive.color.redDark),
          filled: ref(primitive.color.redDark),
          disabled: ref(primitive.color.gray500),
        },
        focused: {
          normal: ref(primitive.color.redDark),
          filled: ref(primitive.color.redDark),
          disabled: ref(primitive.color.gray500),
        },
      },
    },
    
    // 💡 Estados visuais (cores de bg, border, text) são reutilizados do inputSingle.state
    // O InputSelect usa exatamente as mesmas cores do InputSingle, apenas adiciona trailing icon
  },

  /**
   * LIST MENU
   * Container de lista que agrupa ListMenuItem (node-id: 5053-5994)
   * 
   * Container simples sem estilos complexos
   * Suporta 5 tipos de conteúdo: text, leading, trailing, radio, checkbox
   * Usa tokens dos componentes internos (ListMenuItem, Radio, Checkbox)
   */
  listMenu: {
    // Espaçamento do container
    gap: 0, // Sem gap, ListMenuItem já tem espaçamento interno
    padding: 0, // Sem padding externo
    
    // 💡 List Menu delega estilos para ListMenuItem
    // Não adiciona tokens visuais próprios
  },

  /**
   * LIST MENU ITEM
   * Item individual de lista (node-id: 5053-5994)
   * 
   * Item base usado pelo ListMenu
   * Estados: Normal, Hover, Active, Focus (SEM error/disabled)
   * Estrutura: Leading (opcional) + Text + Trailing (opcional)
   */
  listMenuItem: {
    // Tamanhos
    size: {
      small: {
        height: 36,
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[8]),
        gap: ref(primitive.space[8]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        fontWeight: ref(primitive.typography.fontWeight.regular),
        leadingIconSize: 20,
        trailingIconSize: 20,
      },
      medium: {
        height: 48,
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[12]),
        gap: ref(primitive.space[8]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        fontWeight: ref(primitive.typography.fontWeight.regular),
        leadingIconSize: 24,
        trailingIconSize: 24,
      },
    },
    
    // Estados (APENAS interativos, SEM error/disabled)
    state: {
      normal: {
        leadingColor: ref(primitive.color.gray800),
        textColor: ref(primitive.color.gray800),
        trailingColor: ref(primitive.color.gray800),
        bgColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      hover: {
        leadingColor: ref(primitive.color.gray850),
        textColor: ref(primitive.color.gray850),
        trailingColor: ref(primitive.color.gray850),
        bgColor: ref(primitive.color.gray100),
        borderColor: 'transparent',
        borderWidth: 0,
      },
      active: {
        leadingColor: ref(primitive.color.gray850),
        textColor: ref(primitive.color.gray850),
        trailingColor: ref(primitive.color.gray850),
        bgColor: ref(primitive.color.gray200),
        borderColor: 'transparent',
        borderWidth: 0,
      },
      focus: {
        leadingColor: ref(primitive.color.gray850),
        textColor: ref(primitive.color.gray850),
        trailingColor: ref(primitive.color.gray850),
        bgColor: ref(primitive.color.gray200),
        borderColor: ref(primitive.color.gray300),
        borderWidth: 2,
      },
    },
  },

  // 📝 TODO: Adicionar outros componentes seguindo o mesmo padrão
  // - linkAction
  // - dropdownButton
  // - toggle
  // - tag / compoundTag
  // - text
  // - snackbar
  
} as const

// ================================================================================
// TYPES
// ================================================================================

export type Tokens = typeof tokens
export type PrimitiveTokens = typeof primitive
export type SemanticTokens = typeof semantic
export type Color = keyof typeof tokens.color
export type Space = keyof typeof tokens.space
export type Size = keyof typeof tokens.size
export type Radius = keyof typeof tokens.radius

// ================================================================================
// EXPORTS ADICIONAIS
// ================================================================================

/**
 * Exportar primitivos separadamente para casos de uso avançados
 */
export { primitive }

/**
 * Exportar semantic tokens separadamente para facilitar customização de temas
 */
export { semantic }

/**
 * Export helper ref para uso em extensões
 */
export { ref }

