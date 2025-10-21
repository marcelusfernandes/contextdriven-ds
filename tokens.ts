/**
 * Design Tokens - DSZé (Compatível com Tamagui)
 * 
 * ✨ Solução Híbrida: Boas Práticas + Compatibilidade Tamagui
 * 
 * Estrutura:
 * 1. Primitive Tokens - Valores raw definidos UMA ÚNICA VEZ
 * 2. Component Tokens - Referenciam primitivos mas resolvem para valores finais
 * 3. Tamagui recebe valores finais (não referências JS)
 * 
 * Benefícios:
 * ✅ Funciona perfeitamente com Tamagui
 * ✅ Fonte única de verdade (zero duplicação)
 * ✅ Type-safe com TypeScript
 * ✅ Fácil manutenção
 * ✅ Segue boas práticas de Design Systems
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
// HELPER FUNCTION (Resolve referências para valores finais)
// ================================================================================

  /**
 * Helper que resolve referências mantendo rastreabilidade
 * Tamagui recebe o valor final, mas o código mantém a referência clara
   */
const ref = <T>(value: T): T => value

  // ================================================================================
// COMPONENT TOKENS (Compatível com Tamagui)
  // ================================================================================

/**
 * Tokens de componentes usando helper ref()
 * - Código mantém rastreabilidade (ref(primitive.color.zeYellow))
 * - Tamagui recebe valor final ('#ffcc00')
 * - Melhor dos dois mundos!
 */
export const tokens = {
  /**
   * Expor tokens primitivos (uso direto)
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

  /**
   * BUTTON
   */
  button: {
    size: {
      small: {
        height: 36,
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[16]),
        borderRadius: ref(primitive.radius[12]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        iconSize: ref(primitive.size[20]),
        gap: ref(primitive.space[8]),
        minWidth: ref(primitive.size[44]),
      },
      medium: {
        height: 48,
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[16]),
        borderRadius: ref(primitive.radius[16]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        iconSize: ref(primitive.size[24]),
        gap: ref(primitive.space[8]),
        minWidth: ref(primitive.size[44]),
      },
    },
    
    variant: {
      primary: {
        normal: {
          bg: ref(primitive.color.zeYellow),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.zeYellow),
          borderWidth: 0,
          iconColor: ref(primitive.color.black),
        },
        hover: {
          bg: ref(primitive.color.zeYellowDark),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.zeYellowDark),
          borderWidth: 0,
          iconColor: ref(primitive.color.black),
        },
        focus: {
          bg: ref(primitive.color.zeYellowDark),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.zeYellowDark),
          borderWidth: 2,
          iconColor: ref(primitive.color.black),
        },
        active: {
          bg: ref(primitive.color.zeYellowLight),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.zeYellowLight),
          borderWidth: 0,
          iconColor: ref(primitive.color.black),
        },
        disabled: {
          bg: ref(primitive.color.gray200),
          color: ref(primitive.color.gray500),
          borderColor: ref(primitive.color.gray200),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray500),
        },
        loading: {
          bg: ref(primitive.color.zeYellow),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.zeYellow),
          borderWidth: 0,
          iconColor: ref(primitive.color.black),
        },
      },
      
      secondary: {
        normal: {
          bg: ref(primitive.color.transparent),
          color: ref(primitive.color.gray800),
          borderColor: ref(primitive.color.gray900),
          borderWidth: 1,
          iconColor: ref(primitive.color.gray800),
        },
        hover: {
          bg: ref(primitive.color.gray700),
          color: ref(primitive.color.white),
          borderColor: ref(primitive.color.gray700),
          borderWidth: 0,
          iconColor: ref(primitive.color.white),
        },
        focus: {
          bg: ref(primitive.color.gray700),
          color: ref(primitive.color.white),
          borderColor: ref(primitive.color.gray400),
          borderWidth: 2,
          iconColor: ref(primitive.color.white),
        },
        active: {
          bg: ref(primitive.color.gray400),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.gray400),
          borderWidth: 0,
          iconColor: ref(primitive.color.black),
        },
        disabled: {
          bg: ref(primitive.color.gray200),
          color: ref(primitive.color.gray500),
          borderColor: ref(primitive.color.gray200),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray500),
        },
        loading: {
          bg: ref(primitive.color.transparent),
          color: ref(primitive.color.black),
          borderColor: ref(primitive.color.gray600),
          borderWidth: 1,
          iconColor: ref(primitive.color.gray900),
        },
      },
      
      tertiary: {
        normal: {
          bg: ref(primitive.color.transparent),
          color: ref(primitive.color.gray800),
          borderColor: ref(primitive.color.gray600),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray800),
        },
        hover: {
          bg: ref(primitive.color.gray800Alpha20),
          color: ref(primitive.color.gray800),
          borderColor: ref(primitive.color.gray700),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray800),
        },
        focus: {
          bg: ref(primitive.color.gray800Alpha20),
          color: ref(primitive.color.gray800),
          borderColor: ref(primitive.color.gray800Alpha50),
          borderWidth: 2,
          iconColor: ref(primitive.color.gray800),
        },
        active: {
          bg: ref(primitive.color.gray800Alpha20),
          color: ref(primitive.color.gray800),
          borderColor: ref(primitive.color.gray400),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray800),
        },
        disabled: {
          bg: ref(primitive.color.gray200),
          color: ref(primitive.color.gray500),
          borderColor: ref(primitive.color.gray200),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray500),
        },
        loading: {
          bg: ref(primitive.color.gray800Alpha10),
          color: ref(primitive.color.gray800),
          borderColor: ref(primitive.color.gray800Alpha10),
          borderWidth: 2,
          iconColor: ref(primitive.color.gray800),
        },
      },
      
      destructive: {
        normal: {
          bg: ref(primitive.color.transparent),
          color: ref(primitive.color.redDark),
          borderColor: ref(primitive.color.red),
          borderWidth: 1,
          iconColor: ref(primitive.color.redDark),
        },
        hover: {
          bg: ref(primitive.color.redDark),
          color: ref(primitive.color.white),
          borderColor: ref(primitive.color.redDark),
          borderWidth: 0,
          iconColor: ref(primitive.color.white),
        },
        focus: {
          bg: ref(primitive.color.red),
          color: ref(primitive.color.white),
          borderColor: ref(primitive.color.redLight),
          borderWidth: 2,
          iconColor: ref(primitive.color.white),
        },
        active: {
          bg: ref(primitive.color.redDark),
          color: ref(primitive.color.white),
          borderColor: ref(primitive.color.redDark),
          borderWidth: 0,
          iconColor: ref(primitive.color.white),
        },
        disabled: {
          bg: ref(primitive.color.gray200),
          color: ref(primitive.color.gray500),
          borderColor: ref(primitive.color.gray200),
          borderWidth: 0,
          iconColor: ref(primitive.color.gray500),
        },
        loading: {
          bg: ref(primitive.color.transparent),
          color: ref(primitive.color.redDark),
          borderColor: ref(primitive.color.red),
          borderWidth: 1,
          iconColor: ref(primitive.color.redDark),
        },
      },
    },
    
    loading: {
      dotSize: ref(primitive.size[8]),
      gap: ref(primitive.space[12]),
      dotBorderRadius: ref(primitive.radius.round),
      dotActiveColor: ref(primitive.color.gray800Alpha80),
      dotInactiveColor: ref(primitive.color.gray800Alpha20),
    },
  },
  
  /**
   * ICON
   */
  icon: {
    size: {
      micro: ref(primitive.size[12]),
      extraSmall: ref(primitive.size[16]),
      small: ref(primitive.size[20]),
      medium: ref(primitive.size[24]),
      large: ref(primitive.size[28]),
      extraLarge: ref(primitive.size[32]),
    },
    color: {
      normal: ref(primitive.color.gray800),
    },
  },

  /**
   * LOADING
   */
  loading: {
    size: {
      dot: ref(primitive.size[8]),
      gap: ref(primitive.space[12]),
      borderRadius: ref(primitive.radius.round),
    },
    
    brand: {
      default: {
        active: {
          bg: ref(primitive.color.gray800Alpha80),
        },
        inactive: {
          bg: ref(primitive.color.gray800Alpha20),
        },
      },
      rewards: {
        active: {
          bg: ref(primitive.color.zeCompensaPurple),
        },
        inactive: {
          bg: ref(primitive.color.zeCompensaPurpleLight),
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
          paddingVertical: ref(primitive.space[8]),
          paddingHorizontal: ref(primitive.space[8]),
          borderRadius: ref(primitive.radius[8]),
          gap: ref(primitive.space[8]),
          fontSize: ref(primitive.typography.fontSize.small),
          lineHeight: ref(primitive.typography.lineHeight.regular.small),
          iconPlateSize: ref(primitive.size[20]),
          iconPlateBorderRadius: ref(primitive.radius[4]),
        },
        single: {
          size: ref(primitive.size[20]),
          borderRadius: ref(primitive.radius[4]),
        },
      },
      medium: {
        input: {
          height: 48,
          paddingVertical: ref(primitive.space[12]),
          paddingHorizontal: ref(primitive.space[12]),
          borderRadius: ref(primitive.radius[12]),
          gap: ref(primitive.space[8]),
          fontSize: ref(primitive.typography.fontSize.medium),
          lineHeight: ref(primitive.typography.lineHeight.regular.medium),
          iconPlateSize: ref(primitive.size[24]),
          iconPlateBorderRadius: ref(primitive.radius[8]),
        },
        single: {
          size: ref(primitive.size[24]),
          borderRadius: ref(primitive.radius[8]),
        },
      },
    },
    
    state: {
      normal: {
        enabled: {
          iconPlateBorderColor: ref(primitive.color.transparent),
          iconPlateIconColor: ref(primitive.color.gray800),
          iconPlateBorderWidth: 0,
          textColor: ref(primitive.color.gray800),
          bgColor: ref(primitive.color.transparent),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: ref(primitive.color.gray300),
          iconPlateIconColor: ref(primitive.color.gray850),
          iconPlateBorderWidth: 2,
          textColor: ref(primitive.color.gray850),
          bgColor: ref(primitive.color.gray100),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: ref(primitive.color.gray650),
          iconPlateIconColor: ref(primitive.color.gray850),
          iconPlateBorderWidth: 2,
          textColor: ref(primitive.color.gray850),
          bgColor: ref(primitive.color.gray200),
          borderColor: ref(primitive.color.gray650),
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: ref(primitive.color.gray500),
          iconPlateIconColor: ref(primitive.color.gray850),
          iconPlateBorderWidth: 2,
          textColor: ref(primitive.color.gray850),
          bgColor: ref(primitive.color.gray200),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: ref(primitive.color.transparent),
          iconPlateIconColor: ref(primitive.color.gray500),
          iconPlateBorderWidth: 0,
          textColor: ref(primitive.color.gray500),
          bgColor: ref(primitive.color.transparent),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
      },
      error: {
        enabled: {
          iconPlateBorderColor: ref(primitive.color.transparent),
          iconPlateIconColor: ref(primitive.color.redDark),
          iconPlateBorderWidth: 0,
          textColor: ref(primitive.color.redDark),
          bgColor: ref(primitive.color.transparent),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: ref(primitive.color.redLightest),
          iconPlateIconColor: ref(primitive.color.black),
          iconPlateBorderWidth: 2,
          textColor: ref(primitive.color.black),
          bgColor: ref(primitive.color.redLightest),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: ref(primitive.color.redDarkest),
          iconPlateIconColor: ref(primitive.color.black),
          iconPlateBorderWidth: 2,
          textColor: ref(primitive.color.black),
          bgColor: ref(primitive.color.redLightest),
          borderColor: ref(primitive.color.redDarkest),
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: ref(primitive.color.redLight),
          iconPlateIconColor: ref(primitive.color.black),
          iconPlateBorderWidth: 2,
          textColor: ref(primitive.color.black),
          bgColor: ref(primitive.color.redLightest),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: ref(primitive.color.transparent),
          iconPlateIconColor: ref(primitive.color.gray500),
          iconPlateBorderWidth: 0,
          textColor: ref(primitive.color.gray500),
          bgColor: ref(primitive.color.transparent),
          borderColor: ref(primitive.color.transparent),
          borderWidth: 0,
        },
      },
    },
  },

  // 📝 TODO: Adicionar outros componentes seguindo o mesmo padrão
  // - dismissButton
  // - inputSingle / inputTextarea / inputSelect / inputField
  // - buttonIcon
  // - linkAction
  // - dropdownButton
  // - radioButton / toggle
  // - listMenuItem
  // - tag / compoundTag
  // - text
  // - snackbar
  
} as const

// ================================================================================
// TYPES
// ================================================================================

export type Tokens = typeof tokens
export type PrimitiveTokens = typeof primitive
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
 * Export helper ref para uso em extensões
 */
export { ref }

