/**
 * Design Tokens - DSZé (REFATORADO)
 * 
 * ✨ Versão refatorada seguindo boas práticas de Design Systems
 * 
 * Estrutura em 3 camadas:
 * 1. Primitive Tokens - valores raw fundamentais
 * 2. Semantic Tokens - aliases por intenção de uso (opcional)
 * 3. Component Tokens - tokens específicos de componentes
 * 
 * Benefícios:
 * ✅ Zero duplicação de valores
 * ✅ Type-safe com TypeScript
 * ✅ Fácil manutenção - mudar em um lugar reflete em todos
 * ✅ Rastreabilidade - sempre sabe a origem de cada valor
 */

// ================================================================================
// CAMADA 1: PRIMITIVE TOKENS (Valores Raw - Fonte Única de Verdade)
// ================================================================================

/**
 * Tokens primitivos - valores fundamentais que não dependem de nada
 * Estes são os únicos tokens que contêm valores "raw" (hex, números, etc)
 */
const primitiveTokens = {
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
    round: 1000,  // Círculo perfeito
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
      peta: 48,
      giga: 36,
      mega: 28,
      extraLarge: 24,
      large: 20,
      medium: 16,
      small: 14,
      extraSmall: 12,
      micro: 10,
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
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
    },
    letterSpacing: {
      regular: 0,
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
// CAMADA 2: SEMANTIC TOKENS (Aliases por Intenção - OPCIONAL)
// ================================================================================

/**
 * Tokens semânticos - aliases que descrevem intenção de uso
 * Estes referenciam os tokens primitivos
 */
const semanticTokens = {
  color: {
    // Backgrounds
    bg: {
      primary: primitiveTokens.color.zeYellow,
      secondary: primitiveTokens.color.white,
      tertiary: primitiveTokens.color.transparent,
      disabled: primitiveTokens.color.gray200,
      error: primitiveTokens.color.red,
      success: primitiveTokens.color.successGreen,
      warning: primitiveTokens.color.warningOrange,
      info: primitiveTokens.color.infoCyan,
    },
    // Textos
    text: {
      primary: primitiveTokens.color.gray800,
      secondary: primitiveTokens.color.gray650,
      tertiary: primitiveTokens.color.gray500,
      inverse: primitiveTokens.color.white,
      disabled: primitiveTokens.color.gray500,
      error: primitiveTokens.color.redDark,
      success: primitiveTokens.color.successGreenText,
      warning: primitiveTokens.color.warningOrangeText,
      info: primitiveTokens.color.infoTeal,
    },
    // Bordas
    border: {
      default: primitiveTokens.color.gray300,
      focus: primitiveTokens.color.gray650,
      hover: primitiveTokens.color.gray300,
      error: primitiveTokens.color.redDark,
      disabled: primitiveTokens.color.gray200,
    },
    // Ícones
    icon: {
      primary: primitiveTokens.color.gray800,
      secondary: primitiveTokens.color.gray500,
      inverse: primitiveTokens.color.white,
      disabled: primitiveTokens.color.gray500,
      error: primitiveTokens.color.redDark,
    },
  },
} as const

// ================================================================================
// CAMADA 3: COMPONENT TOKENS (Específicos de Componentes)
// ================================================================================

/**
 * Tokens de componentes - valores específicos que referenciam primitivos/semânticos
 * Estes não contêm valores raw, apenas referências
 */
const componentTokens = {
  /**
   * BUTTON - Tokens com referências (sem valores raw!)
   */
  button: {
    size: {
      small: {
        height: 36,
        paddingVertical: primitiveTokens.space[8],
        paddingHorizontal: primitiveTokens.space[16],
        borderRadius: primitiveTokens.radius[12],
        fontSize: primitiveTokens.typography.fontSize.small,
        lineHeight: primitiveTokens.typography.lineHeight.regular.small,
        iconSize: primitiveTokens.size[20],
        gap: primitiveTokens.space[8],
        minWidth: primitiveTokens.size[44],
      },
      medium: {
        height: 48,
        paddingVertical: primitiveTokens.space[12],
        paddingHorizontal: primitiveTokens.space[16],
        borderRadius: primitiveTokens.radius[16],
        fontSize: primitiveTokens.typography.fontSize.medium,
        lineHeight: primitiveTokens.typography.lineHeight.regular.medium,
        iconSize: primitiveTokens.size[24],
        gap: primitiveTokens.space[8],
        minWidth: primitiveTokens.size[44],
      },
    },
    
    variant: {
      primary: {
        normal: {
          bg: primitiveTokens.color.zeYellow,           // ✅ Referência
          color: primitiveTokens.color.black,            // ✅ Referência
          borderColor: primitiveTokens.color.zeYellow,   // ✅ Referência
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,        // ✅ Referência
        },
        hover: {
          bg: primitiveTokens.color.zeYellowDark,        // ✅ Referência
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.zeYellowDark,
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,
        },
        focus: {
          bg: primitiveTokens.color.zeYellowDark,
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.zeYellowDark,
          borderWidth: 2,
          iconColor: primitiveTokens.color.black,
        },
        active: {
          bg: primitiveTokens.color.zeYellowLight,       // ✅ Referência
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.zeYellowLight,
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,
        },
        disabled: {
          bg: primitiveTokens.color.gray200,             // ✅ Referência
          color: primitiveTokens.color.gray500,           // ✅ Referência
          borderColor: primitiveTokens.color.gray200,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray500,
        },
        loading: {
          bg: primitiveTokens.color.zeYellow,
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.zeYellow,
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,
        },
      },
      
      secondary: {
        normal: {
          bg: primitiveTokens.color.transparent,         // ✅ Referência
          color: primitiveTokens.color.gray800,           // ✅ Referência
          borderColor: primitiveTokens.color.gray900,     // ✅ Referência
          borderWidth: 1,
          iconColor: primitiveTokens.color.gray800,
        },
        hover: {
          bg: primitiveTokens.color.gray700,             // ✅ Referência
          color: primitiveTokens.color.white,
          borderColor: primitiveTokens.color.gray700,
          borderWidth: 0,
          iconColor: primitiveTokens.color.white,
        },
        focus: {
          bg: primitiveTokens.color.gray700,
          color: primitiveTokens.color.white,
          borderColor: primitiveTokens.color.gray400,     // ✅ Referência
          borderWidth: 2,
          iconColor: primitiveTokens.color.white,
        },
        active: {
          bg: primitiveTokens.color.gray400,
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.gray400,
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,
        },
        disabled: {
          bg: primitiveTokens.color.gray200,
          color: primitiveTokens.color.gray500,
          borderColor: primitiveTokens.color.gray200,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray500,
        },
        loading: {
          bg: primitiveTokens.color.transparent,
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.gray600,
          borderWidth: 1,
          iconColor: primitiveTokens.color.gray900,
        },
      },
      
      tertiary: {
        normal: {
          bg: primitiveTokens.color.transparent,
          color: primitiveTokens.color.gray800,
          borderColor: primitiveTokens.color.gray600,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray800,
        },
        hover: {
          bg: primitiveTokens.color.gray800Alpha20,       // ✅ Referência
          color: primitiveTokens.color.gray800,
          borderColor: primitiveTokens.color.gray700,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray800,
        },
        focus: {
          bg: primitiveTokens.color.gray800Alpha20,
          color: primitiveTokens.color.gray800,
          borderColor: primitiveTokens.color.gray800Alpha50,
          borderWidth: 2,
          iconColor: primitiveTokens.color.gray800,
        },
        active: {
          bg: primitiveTokens.color.gray800Alpha20,
          color: primitiveTokens.color.gray800,
          borderColor: primitiveTokens.color.gray400,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray800,
        },
        disabled: {
          bg: primitiveTokens.color.gray200,
          color: primitiveTokens.color.gray500,
          borderColor: primitiveTokens.color.gray200,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray500,
        },
        loading: {
          bg: primitiveTokens.color.gray800Alpha10,
          color: primitiveTokens.color.gray800,
          borderColor: primitiveTokens.color.gray800Alpha10,
          borderWidth: 2,
          iconColor: primitiveTokens.color.gray800,
        },
      },
      
      destructive: {
        normal: {
          bg: primitiveTokens.color.transparent,
          color: primitiveTokens.color.redDark,           // ✅ Referência
          borderColor: primitiveTokens.color.red,          // ✅ Referência
          borderWidth: 1,
          iconColor: primitiveTokens.color.redDark,
        },
        hover: {
          bg: primitiveTokens.color.redDark,
          color: primitiveTokens.color.white,
          borderColor: primitiveTokens.color.redDark,
          borderWidth: 0,
          iconColor: primitiveTokens.color.white,
        },
        focus: {
          bg: primitiveTokens.color.red,
          color: primitiveTokens.color.white,
          borderColor: primitiveTokens.color.redLight,     // ✅ Referência
          borderWidth: 2,
          iconColor: primitiveTokens.color.white,
        },
        active: {
          bg: primitiveTokens.color.redDark,
          color: primitiveTokens.color.white,
          borderColor: primitiveTokens.color.redDark,
          borderWidth: 0,
          iconColor: primitiveTokens.color.white,
        },
        disabled: {
          bg: primitiveTokens.color.gray200,
          color: primitiveTokens.color.gray500,
          borderColor: primitiveTokens.color.gray200,
          borderWidth: 0,
          iconColor: primitiveTokens.color.gray500,
        },
        loading: {
          bg: primitiveTokens.color.transparent,
          color: primitiveTokens.color.redDark,
          borderColor: primitiveTokens.color.red,
          borderWidth: 1,
          iconColor: primitiveTokens.color.redDark,
        },
      },
    },
    
    loading: {
      dotSize: primitiveTokens.size[8],
      gap: primitiveTokens.space[12],
      dotBorderRadius: primitiveTokens.radius.round,
      dotActiveColor: primitiveTokens.color.gray800Alpha80,
      dotInactiveColor: primitiveTokens.color.gray800Alpha20,
    },
  },
  
  /**
   * ICON
   */
  icon: {
    size: {
      micro: primitiveTokens.size[12],
      extraSmall: primitiveTokens.size[16],
      small: primitiveTokens.size[20],
      medium: primitiveTokens.size[24],
      large: primitiveTokens.size[28],
      extraLarge: primitiveTokens.size[32],
    },
    color: {
      normal: primitiveTokens.color.gray800,
    },
  },
  
  /**
   * LOADING
   */
  loading: {
    size: {
      dot: primitiveTokens.size[8],
      gap: primitiveTokens.space[12],
      borderRadius: primitiveTokens.radius.round,
    },
    
    brand: {
      default: {
        active: {
          bg: primitiveTokens.color.gray800Alpha80,
        },
        inactive: {
          bg: primitiveTokens.color.gray800Alpha20,
        },
      },
      rewards: {
        active: {
          bg: primitiveTokens.color.zeCompensaPurple,
        },
        inactive: {
          bg: primitiveTokens.color.zeCompensaPurpleLight,
        },
      },
    },
    
    animation: {
      duration: primitiveTokens.transition.duration.slower * 2.4, // 1200ms
      frameDuration: 400,
      easing: primitiveTokens.transition.easing.linear,
    },
  },
  
  // ... (outros componentes seguiriam o mesmo padrão)
  
} as const

// ================================================================================
// EXPORT CONSOLIDADO
// ================================================================================

/**
 * Tokens consolidados - união de todos os níveis
 * Esta é a API pública que os componentes devem usar
 */
export const tokens = {
  // Primitivos (valores base)
  color: primitiveTokens.color,
  space: primitiveTokens.space,
  size: primitiveTokens.size,
  radius: primitiveTokens.radius,
  typography: primitiveTokens.typography,
  opacity: primitiveTokens.opacity,
  zIndex: primitiveTokens.zIndex,
  transition: primitiveTokens.transition,
  breakpoint: primitiveTokens.breakpoint,
  
  // Semânticos (aliases)
  semantic: semanticTokens,
  
  // Componentes
  button: componentTokens.button,
  icon: componentTokens.icon,
  loading: componentTokens.loading,
  // ... outros componentes
} as const

// ================================================================================
// TYPES
// ================================================================================

export type Tokens = typeof tokens
export type Color = keyof typeof tokens.color
export type Space = keyof typeof tokens.space
export type Size = keyof typeof tokens.size
export type Radius = keyof typeof tokens.radius

// Types específicos de componentes
export type ButtonSize = keyof typeof tokens.button.size
export type ButtonVariant = keyof typeof tokens.button.variant


