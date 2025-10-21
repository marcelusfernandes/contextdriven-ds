/**
 * Design Tokens - DSZé
 * 
 * Tokens extraídos do Figma via MCP (Model Context Protocol)
 * Este arquivo é alimentado conforme novos componentes são analisados
 * 
 * Componentes já extraídos:
 * ✅ Button (node-id: 3840-18250)
 * ✅ Icon (node-id: 20-239)
 * ✅ Loading (node-id: 508-222)
 * ✅ DismissButton (node-id: 4432-6034)
 * ✅ InputSingle (node-id: 4921-43563)
 * ✅ ButtonIcon (node-id: 3856-7612)
 * ✅ LinkAction (node-id: 4638-2682)
 * ✅ DropdownButton (node-id: 5385-2844)
 * ✅ InputTextarea (node-id: 4943-44572)
 * ✅ InputSelect (node-id: 4946-45056)
 * ✅ InputField (node-id: 4991-4676)
 * ✅ Checkbox (node-id: 22-612)
 * ✅ RadioButton (node-id: 5555-39003)
 * ✅ Toggle (node-id: 5556-15158)
 * ✅ ListMenuItem (node-id: 5053-5994)
 * ✅ Tag (node-id: 6943-46686)
 * ✅ CompoundTag (node-id: 6963-47463)
 * ✅ Text/Typography (node-id: 2904-2129)
 * ✅ Snackbar (node-id: 8231-335)
 */

export const tokens = {
  /**
   * CORES
   * Paleta consolidada de todos os componentes
   */
  color: {
    // Brand - Amarelo Zé
    zeYellow: '#ffcc00',
    zeYellowDark: '#cca300',
    zeYellowLight: '#ffe680',
    zeYellowLightest: '#fffae5',  // 🆕 Tag - Primary weak background
    zeYellowDarkest: '#806600',   // 🆕 Tag - Primary weak text
    
    // Neutral Colors
    black: '#000000',
    white: '#ffffff',
    
    // Gray Scale
    gray950: '#141417',    // 🆕 Tag - Secondary weak text
    gray900: '#1c1c1f',    // Quase preto
    gray850: '#111111',    // 🆕 Checkbox - Texto e ícone em hover/focus/active
    gray800: '#333333',    // Cinza escuro
    gray700: '#19191b',
    gray650: '#555555',    // 🆕 InputSingle - Texto preenchido e borda com foco
    gray600: '#1f1f22',
    gray500: '#888888',    // Cinza médio
    gray400: '#979797',
    gray350: '#c0c0c0',    // 🆕 LinkAction - Border focus
    gray300: '#bbbbbb',    // 🆕 InputSingle - Borda padrão e label em erro
    gray250: '#eaeaea',    // 🆕 Tag - Secondary weak background
    gray200: '#eeeeee',    // Cinza claro
    gray150: '#d5d5d5',    // 🆕 LinkAction - Background pressed
    gray100: '#f7f7f7',    // 🆕 Checkbox - Background hover (normal)
    
    // Destructive/Error - Red
    red: '#e91935',
    redDark: '#bc1229',
    redDarker: '#b60018',    // 🆕 Tag - Danger weak text
    redLight: '#f48c9a',
    redLightest: '#fde8eb',  // 🆕 Checkbox - Background error (hover/focus/active)
    redDarkest: '#47070f',   // 🆕 Checkbox - Border error focus
    
    // Success - Green
    successGreen: '#2c855f',          // 🆕 Tag - Success solid background
    successGreenDark: '#1f5d42',      // 🆕 Snackbar - Success border
    successGreenDarker: '#006440',    // 🆕 Tag - Success weak text
    successGreenLight: '#e6f7f0',     // 🆕 Tag - Success weak background
    
    // Cold - Blue/Cyan
    coldBlue: '#118198',              // 🆕 Tag - Cold solid background
    coldBlueLight: '#e0f7fc',         // 🆕 Tag - Cold weak background
    coldBlueDark: '#050400',          // 🆕 Tag - Cold weak text
    
    // Info - Cyan/Teal
    infoCyan: '#10a8c7',              // 🆕 Snackbar - Info feedback background
    infoCyanDark: '#0c5a6a',          // 🆕 Snackbar - Info feedback border
    
    // Warning - Orange
    warningOrange: '#eb8207',         // 🆕 Tag - Warning solid background
    warningOrangeLight: '#fef3e5',    // 🆕 Tag - Warning weak background
    warningOrangeDark: '#b93200',     // 🆕 Tag - Warning weak text
    
    // ZeCompensa/Rewards - Purple
    zeCompensaPurple: '#6e3ce4',       // 🆕 Loading - ZeCompensa brand active
    zeCompensaPurpleLight: '#f1ecfc',  // 🆕 Loading - ZeCompensa brand inactive
    zeCompensaPurpleDark: '#3c1598',   // 🆕 Tag - Rewards weak text
    
    // Info/Cold - Teal/Cyan (Text specific)
    infoTeal: '#0e677a',               // 🆕 Text - Cor de informação/frio (mais escuro)
    
    // Success - Green (Text specific)
    successGreenText: '#236a4c',       // 🆕 Text - Cor de sucesso para texto
    
    // Warning - Orange (Text specific / Snackbar border)
    warningOrangeText: '#bc6806',      // 🆕 Text - Cor de alerta para texto / Snackbar - Warning border
    
    // Transparency - Black Alpha
    transparent: '#00000000',
    blackAlpha10: '#0000001a',
    blackAlpha20: '#00000033',
    blackAlpha50: '#00000080',
    blackAlpha80: '#000000cc',
    
    // Transparency - Gray800 Alpha (🆕 DismissButton)
    gray800Alpha10: '#3333331a',  // 🆕 DismissButton - Normal background (10% opacity)
    gray800Alpha20: '#33333333',  // 🆕 DismissButton - Hover/Active background (20% opacity)
    gray800Alpha50: '#33333380',  // 🆕 DismissButton - Focus border (50% opacity)
  },

  /**
   * ESPAÇAMENTOS
   * Sistema de espaçamento consistente
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
    
    // ⏳ Mais valores podem ser adicionados
  },

  /**
   * TAMANHOS
   * Tamanhos de elementos e componentes
   */
  size: {
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    32: 32,
    40: 40,
    44: 44,    // minTouch - área mínima de toque (acessibilidade)
    48: 48,
    64: 64,
    
    // Ícones
    iconSmall: 20,
    iconMedium: 24,
    iconLarge: 32,
    
    // ⏳ Mais tamanhos serão adicionados
  },

  /**
   * BORDER RADIUS
   * Raios de borda
   */
  radius: {
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    round: 1000,    // Círculo perfeito
    
    // ⏳ Mais variações podem ser adicionadas
  },

  /**
   * TIPOGRAFIA
   * Estrutura completa extraída do Figma (node-id: 2904-2129)
   */
  typography: {
    // Font Families (com fallbacks)
    fontFamily: {
      display: 'Gelada RC3, Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',     // Display typography com fallbacks
      main: 'Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',                    // Main typography com fallbacks
      content: 'Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',                 // Content typography com fallbacks
      body: 'Roboto Flex, Roboto, system-ui, -apple-system, sans-serif',                    // Body typography com fallbacks (atualizado)
      mono: 'Monaco, Courier, monospace',                                                    // Monospace (mantido)
    },
    
    // Font Sizes (Nomenclatura do Figma + Legacy)
    fontSize: {
      // Nomenclatura do Figma (semântica)
      peta: 48,        // 🆕 Text - Display 1
      giga: 36,        // 🆕 Text - Display 2
      mega: 28,        // 🆕 Text - Display 3
      extraLarge: 24,  // 🆕 Text - Display 4, Title 1
      large: 20,       // 🆕 Text - Title 2, Highlight 1
      medium: 16,      // 🆕 Text - Title 3, Highlight 2, Body Large
      small: 14,       // 🆕 Text - Title 4, Highlight 3, Body, Label, Informative
      extraSmall: 12,  // 🆕 Text - Highlight 4, Meta
      
      // Legacy (manter para compatibilidade com componentes existentes)
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
    
    // Font Weights (Estrutura semântica do Figma + Legacy)
    fontWeight: {
      // Estrutura Display (Gelada RC3 Variable)
      display: {
        stronger: {
          normal: 900,  // 🆕 Text - Black (Display 1, 2, 3, 4)
        },
      },
      
      // Estrutura Main (Roboto Flex - Titles e Highlights)
      main: {
        bold: {
          normal: 700,  // Text - Bold (Titles)
        },
        semibold: {
          normal: 600,  // 🆕 Text - SemiBold (Highlights)
        },
      },
      
      // Estrutura Content (Roboto Flex - Body)
      content: {
        regular: {
          normal: 400,  // 🆕 Text - Regular (Body, Informative, Meta)
        },
        semibold: {
          normal: 600,  // 🆕 Text - SemiBold (Label)
        },
      },
      
      // Legacy (manter para compatibilidade)
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    
    // Line Heights (Estrutura semântica do Figma + Legacy)
    lineHeight: {
      // Nomenclatura do Figma (semântica)
      close: {
        peta: 60,        // 🆕 Text - Display 1
        giga: 44,        // 🆕 Text - Display 2
        mega: 36,        // 🆕 Text - Display 3
        extraLarge: 32,  // 🆕 Text - Display 4, Title 1
        large: 24,       // 🆕 Text - Title 2, Highlight 1
        medium: 20,      // 🆕 Text - Highlight 2
        extraSmall: 16,  // 🆕 Text - Meta
      },
      regular: {
        medium: 24,      // 🆕 Text - Title 3, Body Large
        small: 20,       // 🆕 Text - Title 4, Highlight 3, Body, Informative
        extraSmall: 20,  // 🆕 Text - Highlight 4
      },
      tight: {
        small: 16,       // 🆕 Text - Label
      },
      
      // Legacy (manter para compatibilidade)
      xs: 16,
      sm: 18,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    },
    
    // Letter Spacing
    letterSpacing: {
      regular: 0,       // 🆕 Text - Todas as variantes usam 0
      
      // Legacy (manter para compatibilidade)
      tighter: -0.05,
      tight: -0.025,
      normal: 0,
      wide: 0.025,
      wider: 0.05,
    },
  },

  /**
   * OPACIDADE
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
   * Z-INDEX
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
   * TRANSIÇÕES
   */
  transition: {
    duration: {
      instant: 0,
      fast: 100,
      normal: 200,
      slow: 300,
      slower: 500,
    },
    easing: {
      linear: 'linear',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },

  /**
   * BREAKPOINTS (Responsividade)
   */
  breakpoint: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },

  /**
   * SOMBRAS
   * ⏳ Aguardando extração de componentes com sombras (Card, Modal, Dropdown)
   */
  shadow: {
    // TODO: Adicionar quando analisar Cards, Modals, etc
  },

  // ================================================================================
  // TOKENS ESPECÍFICOS DE COMPONENTES
  // ================================================================================

  /**
   * BUTTON
   * Extraído do Figma (node-id: 3840-18250)
   */
  button: {
    // Tamanhos
    size: {
      small: {
        height: 36,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 14,
        lineHeight: 20,
        iconSize: 20,
        gap: 8,
        minWidth: 44,
      },
      medium: {
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        fontSize: 16,
        lineHeight: 24,
        iconSize: 24,
        gap: 8,
        minWidth: 44,
      },
    },
    
    // Variantes de estilo
    variant: {
      primary: {
        normal: {
          bg: '#ffcc00',          // tokens.color.zeYellow
          color: '#000000',        // tokens.color.black
          borderColor: '#ffcc00',  // tokens.color.zeYellow
          borderWidth: 0,
          iconColor: '#000000',    // tokens.color.black
        },
        hover: {
          bg: '#cca300',          // tokens.color.zeYellowDark
          color: '#000000',        // tokens.color.black
          borderColor: '#cca300',  // tokens.color.zeYellowDark
          borderWidth: 0,
          iconColor: '#000000',    // tokens.color.black
        },
        focus: {
          bg: '#cca300',          // tokens.color.zeYellowDark
          color: '#000000',        // tokens.color.black
          borderColor: '#cca300',  // tokens.color.zeYellowDark
          borderWidth: 2,
          iconColor: '#000000',    // tokens.color.black
        },
        active: {
          bg: '#ffe680',          // tokens.color.zeYellowLight
          color: '#000000',        // tokens.color.black
          borderColor: '#ffe680',  // tokens.color.zeYellowLight
          borderWidth: 0,
          iconColor: '#000000',    // tokens.color.black
        },
        disabled: {
          bg: '#eeeeee',          // tokens.color.gray200
          color: '#888888',        // tokens.color.gray500
          borderColor: '#eeeeee',  // tokens.color.gray200
          borderWidth: 0,
          iconColor: '#888888',    // tokens.color.gray500
        },
        loading: {
          bg: '#ffcc00',          // tokens.color.zeYellow
          color: '#000000',        // tokens.color.black
          borderColor: '#ffcc00',  // tokens.color.zeYellow
          borderWidth: 0,
          iconColor: '#000000',    // tokens.color.black
        },
      },
      
      secondary: {
        normal: {
          bg: '#33333300',
          color: '#333333',
          borderColor: '#1c1c1f',
          borderWidth: 1,
          iconColor: '#333333', // 🆕 Leading/Trailing Icon
        },
        hover: {
          bg: '#19191b',
          color: '#ffffff',
          borderColor: '#19191b',
          borderWidth: 0,
          iconColor: '#ffffff', // 🆕 Leading/Trailing Icon
        },
        focus: {
          bg: '#19191b',
          color: '#ffffff',
          borderColor: '#979797',
          borderWidth: 2,
          iconColor: '#ffffff', // 🆕 Leading/Trailing Icon
        },
        active: {
          bg: '#979797',
          color: '#000000',
          borderColor: '#979797',
          borderWidth: 0,
          iconColor: '#000000', // 🆕 Leading/Trailing Icon
        },
        disabled: {
          bg: '#eeeeee',
          color: '#888888',
          borderColor: '#eeeeee',
          borderWidth: 0,
          iconColor: '#888888', // 🆕 Leading/Trailing Icon
        },
        loading: {
          bg: '#33333300',
          color: '#000000',
          borderColor: '#1f1f22',
          borderWidth: 1,
          iconColor: '#1c1c1f', // 🆕 Leading/Trailing Icon
        },
      },
      
      tertiary: {
        normal: {
          bg: '#33333300',
          color: '#333333',
          borderColor: '#1f1f22',
          borderWidth: 0,
          iconColor: '#333333', // 🆕 Leading/Trailing Icon
        },
        hover: {
          bg: '#33333333',
          color: '#333333',
          borderColor: '#19191b',
          borderWidth: 0,
          iconColor: '#333333', // 🆕 Leading/Trailing Icon
        },
        focus: {
          bg: '#33333333',
          color: '#333333',
          borderColor: '#33333380',
          borderWidth: 2,
          iconColor: '#333333', // 🆕 Leading/Trailing Icon
        },
        active: {
          bg: '#33333333',
          color: '#333333',
          borderColor: '#979797',
          borderWidth: 0,
          iconColor: '#333333', // 🆕 Leading/Trailing Icon
        },
        disabled: {
          bg: '#eeeeee',
          color: '#888888',
          borderColor: '#eeeeee',
          borderWidth: 0,
          iconColor: '#888888', // 🆕 Leading/Trailing Icon
        },
        loading: {
          bg: '#3333331a',
          color: '#333333',
          borderColor: '#3333331a',
          borderWidth: 2,
          iconColor: '#333333', // 🆕 Leading/Trailing Icon
        },
      },
      
      destructive: {
        normal: {
          bg: '#33333300',
          color: '#bc1229',
          borderColor: '#e91935',
          borderWidth: 1,
          iconColor: '#bc1229', // 🆕 Leading/Trailing Icon
        },
        hover: {
          bg: '#bc1229',
          color: '#ffffff',
          borderColor: '#bc1229',
          borderWidth: 0,
          iconColor: '#ffffff', // 🆕 Leading/Trailing Icon
        },
        focus: {
          bg: '#e91935',
          color: '#ffffff',
          borderColor: '#f48c9a',
          borderWidth: 2,
          iconColor: '#ffffff', // 🆕 Leading/Trailing Icon
        },
        active: {
          bg: '#bc1229',
          color: '#ffffff',
          borderColor: '#bc1229',
          borderWidth: 0,
          iconColor: '#ffffff', // 🆕 Leading/Trailing Icon
        },
        disabled: {
          bg: '#eeeeee',
          color: '#888888',
          borderColor: '#eeeeee',
          borderWidth: 0,
          iconColor: '#888888', // 🆕 Leading/Trailing Icon
        },
        loading: {
          bg: '#33333300',
          color: '#bc1229',
          borderColor: '#e91935',
          borderWidth: 1,
          iconColor: '#bc1229', // 🆕 Leading/Trailing Icon
        },
      },
    },
    
    // Loading indicator
    loading: {
      dotSize: 8,
      gap: 12,
      dotBorderRadius: 1000,
      dotActiveColor: '#333333cc',
      dotInactiveColor: '#33333333',
    },
  },

  // 🆕 ICON - Componente wrapper para ícones (node-id: 20-239)
  icon: {
    size: {
      micro: 12,        // 🆕 Icon - Menor tamanho (ícones muito pequenos)
      extraSmall: 16,   // 🆕 Icon - Extra pequeno (ícones em textos pequenos)
      small: 20,        // 🆕 Icon - Pequeno (botões secundários)
      medium: 24,       // 🆕 Icon - Médio (padrão/default)
      large: 28,        // 🆕 Icon - Grande (ícones em destaque)
      extraLarge: 32,   // 🆕 Icon - Extra grande (cabeçalhos, banners)
    },
    color: {
      normal: '#333333',  // 🆕 Icon - Cor padrão (mesmo que gray800)
    },
  },

  /**
   * LOADING
   * Componente de indicador de carregamento (node-id: 508-222)
   * Extraído do Figma via MCP - 08/10/2025
   */
  loading: {
    // Tamanhos dos dots
    size: {
      dot: 8,              // Tamanho (width/height) de cada dot
      gap: 12,             // Espaçamento entre dots
      borderRadius: 1000,  // Border radius para círculo perfeito
    },
    
    // Brands/Variantes
    brand: {
      // Default - Brand Zé Delivery (tons de cinza)
      default: {
        active: {
          bg: 'rgba(51, 51, 51, 0.8)',    // #333333 com 80% opacidade
          bgHex: '#333333cc',              // Alternativa em hex
        },
        inactive: {
          bg: 'rgba(51, 51, 51, 0.2)',    // #333333 com 20% opacidade
          bgHex: '#33333333',              // Alternativa em hex
        },
      },
      
      // Rewards - Brand ZeCompensa (tons de roxo)
      rewards: {
        active: {
          bg: '#6e3ce4',    // Roxo ZeCompensa (opaco)
        },
        inactive: {
          bg: '#f1ecfc',    // Roxo claro ZeCompensa (opaco)
        },
      },
    },
    
    // Timing da animação (valores sugeridos - não extraídos do Figma)
    animation: {
      duration: 1200,      // Duração total do ciclo em ms
      frameDuration: 400,  // Duração de cada frame em ms
      easing: 'linear',    // Tipo de easing
    },
  },

  /**
   * DISMISS BUTTON
   * Botão circular de fechar/dismiss (node-id: 4432-6034)
   * Extraído do Figma via MCP - 08/10/2025
   */
  dismissButton: {
    // Tamanhos
    size: {
      extraSmall: {
        width: 20,
        height: 20,
        iconSize: 12,
        padding: 4,
        borderRadius: 9999,  // circular
      },
      small: {
        width: 24,
        height: 24,
        iconSize: 16,
        padding: 4,
        borderRadius: 9999,  // circular
      },
      medium: {
        width: 32,
        height: 32,
        iconSize: 24,
        padding: 4,
        borderRadius: 9999,  // circular
      },
    },
    
    // Variante de estilo
    variant: {
      default: {
        normal: {
          iconColor: '#333333',
          bg: '#3333331a',          // gray800 com 10% opacity
          borderColor: '#3333331a',
          borderWidth: 0,
        },
        hover: {
          iconColor: '#333333',
          bg: '#33333333',          // gray800 com 20% opacity
          borderColor: '#33333333',
          borderWidth: 0,
        },
        focus: {
          iconColor: '#333333',
          bg: '#33333333',          // gray800 com 20% opacity
          borderColor: '#33333380', // gray800 com 50% opacity
          borderWidth: 1,
        },
        active: {
          iconColor: '#333333',
          bg: '#33333333',          // gray800 com 20% opacity
          borderColor: '#33333333',
          borderWidth: 0,
        },
        disabled: {
          iconColor: '#888888',
          bg: '#eeeeee',
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * INPUT SINGLE
   * Campo de entrada de texto de linha única (node-id: 4921-43563)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Base para todos os inputs (Textarea, Select, Field)
   * Estados: Normal (vazio), Filled (preenchido), Disabled
   * Foco: Blurred (sem foco), Focused (com foco)
   * Feedback: Normal, Error
   */
  inputSingle: {
    // Tamanhos base (usados como referência)
    size: {
      small: {
        height: 36,
        borderRadius: 12,
        fontSize: 14,
        lineHeight: 20,
        gap: 8,
      },
      medium: {
        height: 48,
        borderRadius: 16,
        fontSize: 16,
        lineHeight: 24,
        gap: 8,
      },
    },
    
    // Estados visuais (combinação de feedback + foco + preenchimento)
    // 💡 Padding é ajustado dinamicamente: quando borderWidth aumenta de 1→2, padding reduz em 1px
    state: {
      // Feedback Normal (sem erro)
      normal: {
        // Sem foco (blurred)
        blurred: {
          normal: {          // Vazio
            labelColor: '#888888',   // gray500
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#bbbbbb',  // gray300
            borderWidth: 1,
            // Padding normal (small: 8/12, medium: 12/16)
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          filled: {          // Preenchido
            labelColor: '#555555',   // gray650
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#bbbbbb',  // gray300
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          disabled: {        // Desabilitado
            labelColor: '#888888',   // gray500
            textColor: '#888888',    // gray500
            bg: '#eeeeee',           // gray200
            borderColor: '#eeeeee',  // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
        
        // Com foco (focused)
        focused: {
          normal: {          // Vazio com foco
            labelColor: '#888888',   // gray500
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#555555',  // gray650
            borderWidth: 2,
            // ✨ Padding compensado: -1px para manter tamanho total igual
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          filled: {          // Preenchido com foco
            labelColor: '#555555',   // gray650
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#555555',  // gray650
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          disabled: {        // Desabilitado (não muda com foco)
            labelColor: '#888888',   // gray500
            textColor: '#888888',    // gray500
            bg: '#eeeeee',           // gray200
            borderColor: '#eeeeee',  // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
      },
      
      // Feedback Error (com erro)
      error: {
        // Sem foco (blurred)
        blurred: {
          normal: {          // Vazio com erro
            labelColor: '#bbbbbb',   // gray300
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#bc1229',  // redDark
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          filled: {          // Preenchido com erro
            labelColor: '#bc1229',   // redDark
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#bc1229',  // redDark
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          disabled: {        // Desabilitado com erro
            labelColor: '#888888',   // gray500
            textColor: '#888888',    // gray500
            bg: '#eeeeee',           // gray200
            borderColor: '#eeeeee',  // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
        
        // Com foco (focused)
        focused: {
          normal: {          // Vazio com erro e foco
            labelColor: '#bbbbbb',   // gray300
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#bc1229',  // redDark
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          filled: {          // Preenchido com erro e foco
            labelColor: '#bc1229',   // redDark
            textColor: '#333333',    // gray800
            bg: '#ffffff',
            borderColor: '#bc1229',  // redDark
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          disabled: {        // Desabilitado com erro (não muda com foco)
            labelColor: '#888888',   // gray500
            textColor: '#888888',    // gray500
            bg: '#eeeeee',           // gray200
            borderColor: '#eeeeee',  // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
      },
    },
  },

  /**
   * BUTTON ICON
   * Botão apenas com ícone (quadrado) (node-id: 3856-7612)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Botão circular/quadrado contendo apenas um ícone centralizado.
   * Usa as mesmas hierarquias do Button (Primary, Secondary, Tertiary, Destructive).
   */
  buttonIcon: {
    // Tamanhos
    size: {
      small: {
        width: 36,
        height: 36,
        iconSize: 20,
        padding: 8,
        borderRadius: 12,
      },
      medium: {
        width: 48,
        height: 48,
        iconSize: 24,
        padding: 12,
        borderRadius: 16,
      },
    },
    
    // Hierarquias (mesmas do Button)
    variant: {
      primary: {
        normal: {
          iconColor: '#000000',
          bg: '#ffcc00',         // zeYellow
          borderColor: '#ffcc00',
          borderWidth: 0,
        },
        hover: {
          iconColor: '#000000',
          bg: '#cca300',         // zeYellowDark
          borderColor: '#cca300',
          borderWidth: 0,
        },
        focus: {
          iconColor: '#000000',
          bg: '#cca300',         // zeYellowDark
          borderColor: '#cca300',
          borderWidth: 2,
        },
        active: {
          iconColor: '#000000',
          bg: '#ffe680',         // zeYellowLight
          borderColor: '#ffe680',
          borderWidth: 0,
        },
        disabled: {
          iconColor: '#888888',  // gray500
          bg: '#eeeeee',         // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
        loading: {
          iconColor: '#000000',
          spinnerColor: '#000000',
          bg: '#ffcc00',         // zeYellow
          borderColor: '#ffcc00',
          borderWidth: 0,
        },
      },
      
      secondary: {
        normal: {
          iconColor: '#333333',  // gray800
          bg: '#33333300',       // transparent
          borderColor: '#1c1c1f', // gray900
          borderWidth: 1,
        },
        hover: {
          iconColor: '#ffffff',
          bg: '#19191b',         // gray700
          borderColor: '#19191b',
          borderWidth: 0,
        },
        focus: {
          iconColor: '#ffffff',
          bg: '#19191b',         // gray700
          borderColor: '#979797', // gray400
          borderWidth: 2,
        },
        active: {
          iconColor: '#000000',
          bg: '#979797',         // gray400
          borderColor: '#979797',
          borderWidth: 0,
        },
        disabled: {
          iconColor: '#888888',  // gray500
          bg: '#eeeeee',         // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
        loading: {
          iconColor: '#ffffff',
          spinnerColor: '#000000',
          bg: '#33333300',       // transparent
          borderColor: '#1f1f22', // gray600
          borderWidth: 1,
        },
      },
      
      tertiary: {
        normal: {
          iconColor: '#333333',  // gray800
          bg: '#33333300',       // transparent
          borderColor: '#1f1f22', // gray600
          borderWidth: 0,
        },
        hover: {
          iconColor: '#333333',
          bg: '#33333333',       // gray800Alpha20
          borderColor: '#19191b', // gray700
          borderWidth: 0,
        },
        focus: {
          iconColor: '#333333',
          bg: '#33333333',       // gray800Alpha20
          borderColor: '#33333380', // gray800Alpha50
          borderWidth: 2,
        },
        active: {
          iconColor: '#333333',
          bg: '#33333333',       // gray800Alpha20
          borderColor: '#979797', // gray400
          borderWidth: 0,
        },
        disabled: {
          iconColor: '#888888',  // gray500
          bg: '#eeeeee',         // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
        loading: {
          iconColor: '#333333',
          spinnerColor: '#333333',
          bg: '#3333331a',       // gray800Alpha10
          borderColor: '#3333331a',
          borderWidth: 2,
        },
      },
      
      destructive: {
        normal: {
          iconColor: '#bc1229',  // redDark
          bg: '#33333300',       // transparent
          borderColor: '#e91935', // red
          borderWidth: 1,
        },
        hover: {
          iconColor: '#ffffff',
          bg: '#bc1229',         // redDark
          borderColor: '#bc1229',
          borderWidth: 0,
        },
        focus: {
          iconColor: '#ffffff',
          bg: '#e91935',         // red
          borderColor: '#f48c9a', // redLight
          borderWidth: 2,
        },
        active: {
          iconColor: '#ffffff',
          bg: '#e91935',         // red
          borderColor: '#bc1229', // redDark
          borderWidth: 0,
        },
        disabled: {
          iconColor: '#888888',  // gray500
          bg: '#eeeeee',         // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
        loading: {
          iconColor: '#bc1229',
          spinnerColor: '#bc1229',
          bg: '#33333300',       // transparent
          borderColor: '#e91935', // red
          borderWidth: 1,
        },
      },
    },
  },

  /**
   * LINK ACTION
   * Link com ícone de ação/navegação (node-id: 4638-2682)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Link clicável com ícone indicando tipo de ação:
   * - Go To (→): Navegação para frente
   * - Down (↓): Download ou expandir para baixo
   * - Up (↑): Upload ou expandir para cima
   * - External (↗): Abrir link externo
   * 
   * Dois estilos:
   * - Button: Com background e padding (botão estilizado)
   * - Link: Sem background (link inline)
   */
  linkAction: {
    // Tamanhos
    size: {
      small: {
        // Button padding (estilo com background)
        button: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 4,
          borderRadius: 8,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600', // SemiBold
        },
        // Link padding (estilo sem background)
        link: {
          height: 20,
          padding: 0,
          fontSize: 14,
          lineHeight: 16,
          fontWeight: '400', // Regular
        },
        iconSize: 20,
        gap: 4,
      },
      medium: {
        // Button padding (estilo com background)
        button: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 8,
          borderRadius: 12,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600', // SemiBold
        },
        // Link padding (estilo sem background)
        link: {
          height: 24,
          padding: 0,
          fontSize: 16,
          lineHeight: 16,
          fontWeight: '400', // Regular
        },
        iconSize: 24,
        gap: 4,
      },
      large: {
        // Button padding (estilo com background)
        button: {
          height: 52,
          paddingVertical: 12,
          paddingHorizontal: 8,
          borderRadius: 12,
          fontSize: 20,
          lineHeight: 28,
          fontWeight: '600', // SemiBold
        },
        // Link padding (estilo sem background)
        link: {
          height: 28,
          padding: 0,
          fontSize: 20,
          lineHeight: 20,
          fontWeight: '400', // Regular
        },
        iconSize: 28,
        gap: 4,
      },
    },
    
    // Estilos de Padding
    padding: {
      // Estilo Button (com background)
      button: {
        normal: {
          labelColor: '#333333',  // gray800
          iconColor: '#333333',   // gray800
          bg: '#ffffff00',        // transparent
          borderColor: '#ffffff00', // transparent
          borderWidth: 0,
        },
        hover: {
          labelColor: '#333333',     // gray800
          iconColor: '#33333380',    // gray800Alpha50
          bg: '#ffffff00',           // transparent
          borderColor: '#ffffff00',  // transparent
          borderWidth: 0,
        },
        pressed: {
          labelColor: '#000000',  // black
          iconColor: '#000000',   // black
          bg: '#d5d5d5',          // gray150
          borderColor: '#ffffff00', // transparent
          borderWidth: 0,
        },
        focus: {
          labelColor: '#000000',  // black
          iconColor: '#000000',   // black
          bg: '#ffffff00',        // transparent
          borderColor: '#c0c0c0', // gray350
          borderWidth: 1,
        },
      },
      
      // Estilo Link (sem background)
      link: {
        normal: {
          labelColor: '#333333',  // gray800
          iconColor: '#333333',   // gray800
          bg: '#ffffff00',        // transparent
          borderColor: '#ffffff00', // transparent
          borderWidth: 0,
        },
        hover: {
          labelColor: '#33333380',   // gray800Alpha50
          iconColor: '#33333380',    // gray800Alpha50
          bg: '#ffffff00',           // transparent
          borderColor: '#ffffff00',  // transparent
          borderWidth: 0,
        },
        pressed: {
          labelColor: '#333333',  // gray800
          iconColor: '#333333',   // gray800
          bg: '#ffffff00',        // transparent
          borderColor: '#ffffff00', // transparent
          borderWidth: 0,
        },
        focus: {
          labelColor: '#000000',  // black
          iconColor: '#000000',   // black
          bg: '#ffffff00',        // transparent
          borderColor: '#ffffff00', // transparent
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * DROPDOWN BUTTON
   * Botão com dropdown (chevron down) (node-id: 5385-2844)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Botão com ícone chevron (dropdown indicator) sempre à direita.
   * Pode ter ícone leading opcional à esquerda do label.
   * 
   * Hierarquias: Primary, Secondary, Tertiary (mesmas do Button)
   * Tamanhos: Small (36px), Medium (48px)
   * Ícone Trailing: ChevronOutlinedDown (sempre presente)
   * Ícone Leading: Opcional (qualquer ícone da biblioteca)
   */
  dropdownButton: {
    // Tamanhos
    size: {
      small: {
        // Sem Leading Icon (single)
        single: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600', // SemiBold
          trailingIconSize: 20,
          gap: 8,
        },
        // Com Leading Icon
        leading: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600', // SemiBold
          leadingIconSize: 20,
          trailingIconSize: 20,
          gap: 8,
        },
      },
      medium: {
        // Sem Leading Icon (single)
        single: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 16,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600', // SemiBold
          trailingIconSize: 24,
          gap: 8,
        },
        // Com Leading Icon
        leading: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 16,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600', // SemiBold
          leadingIconSize: 24,
          trailingIconSize: 24,
          gap: 8,
        },
      },
    },
    
    // Hierarquias (variantes)
    hierarchy: {
      primary: {
        normal: {
          labelColor: '#000000',      // black
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#ffcc00',              // zeYellow
          borderColor: '#ffcc00',
          borderWidth: 0,
        },
        hover: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#cca300',              // zeYellowDark
          borderColor: '#cca300',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#cca300',              // zeYellowDark
          borderColor: '#cca300',
          borderWidth: 2,
        },
        active: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#ffe680',              // zeYellowLight
          borderColor: '#ffe680',
          borderWidth: 0,
        },
        loading: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#ffcc00',              // zeYellow
          borderColor: '#ffcc00',
          borderWidth: 0,
        },
        disabled: {
          labelColor: '#888888',      // gray500
          trailingIconColor: '#888888',
          leadingIconColor: '#888888',
          bg: '#eeeeee',              // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
      
      secondary: {
        normal: {
          labelColor: '#333333',      // gray800
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333300',            // transparent
          borderColor: '#1c1c1f',     // gray900
          borderWidth: 1,
        },
        hover: {
          labelColor: '#ffffff',      // white
          trailingIconColor: '#ffffff',
          leadingIconColor: '#ffffff',
          bg: '#19191b',              // gray700
          borderColor: '#19191b',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#ffffff',
          trailingIconColor: '#ffffff',
          leadingIconColor: '#ffffff',
          bg: '#19191b',              // gray700
          borderColor: '#979797',     // gray400
          borderWidth: 2,
        },
        active: {
          labelColor: '#000000',      // black
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#979797',              // gray400
          borderColor: '#979797',
          borderWidth: 0,
        },
        loading: {
          labelColor: '#ffffff',
          trailingIconColor: '#ffffff',
          leadingIconColor: '#ffffff',
          bg: '#33333300',            // transparent
          borderColor: '#1f1f22',     // gray600
          borderWidth: 1,
        },
        disabled: {
          labelColor: '#888888',      // gray500
          trailingIconColor: '#888888',
          leadingIconColor: '#888888',
          bg: '#eeeeee',              // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
      
      tertiary: {
        normal: {
          labelColor: '#333333',      // gray800
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333300',            // transparent
          borderColor: '#1f1f22',     // gray600
          borderWidth: 0,
        },
        hover: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333333',            // gray800Alpha20
          borderColor: '#19191b',     // gray700
          borderWidth: 0,
        },
        focus: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333333',            // gray800Alpha20
          borderColor: '#33333380',   // gray800Alpha50
          borderWidth: 2,
        },
        active: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333333',            // gray800Alpha20
          borderColor: '#979797',     // gray400
          borderWidth: 0,
        },
        loading: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#3333331a',            // gray800Alpha10
          borderColor: '#3333331a',
          borderWidth: 2,
        },
        disabled: {
          labelColor: '#888888',      // gray500
          trailingIconColor: '#888888',
          leadingIconColor: '#888888',
          bg: '#eeeeee',              // gray200
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * INPUT TEXTAREA
   * Campo de texto multilinhas com redimensionamento (node-id: 4943-44572)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Textarea para entrada de texto em múltiplas linhas.
   * Reutiliza a maioria dos tokens do InputSingle.
   * Diferenças: altura mínima (não fixa), ícone de redimensionamento.
   */
  inputTextarea: {
    // Tamanhos (altura mínima, cresce verticalmente)
    size: {
      small: {
        minHeight: 56,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        fontSize: 14,
        lineHeight: 20,
        gap: 8,
      },
      medium: {
        minHeight: 72,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        fontSize: 16,
        lineHeight: 24,
        gap: 8,
      },
    },
    
    // Ícone de redimensionamento (canto inferior direito)
    // Nota: As cores são as mesmas do InputSingle, mas isoladas aqui para clareza
    resizingIcon: {
      size: 20, // Tamanho do ícone de resize
      
      // Feedback Normal
      normal: {
        blurred: {
          normal: '#888888',    // gray500 - textarea vazio, sem foco
          filled: '#888888',    // gray500 - textarea preenchido, sem foco
        },
        focused: {
          normal: '#888888',    // gray500 - textarea vazio, com foco
          filled: '#888888',    // gray500 - textarea preenchido, com foco
        },
      },
      
      // Feedback Error
      error: {
        blurred: {
          normal: '#bc1229',    // redDark - textarea vazio, sem foco, erro
          filled: '#bc1229',    // redDark - textarea preenchido, sem foco, erro
        },
        focused: {
          normal: '#bc1229',    // redDark - textarea vazio, com foco, erro
          filled: '#bc1229',    // redDark - textarea preenchido, com foco, erro
        },
      },
    },
  },

  /**
   * INPUT SELECT
   * Campo de seleção com dropdown (node-id: 4946-45056)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Select para escolher uma opção de uma lista.
   * Reutiliza 95% dos tokens do InputSingle.
   * Diferenças: trailing icon obrigatório (ChevronDown), não editável.
   */
  inputSelect: {
    // Tamanhos base (usados como referência)
    size: {
      small: {
        height: 36,
        borderRadius: 12,
        fontSize: 14,
        lineHeight: 20,
        gap: 8,
        iconSize: 20,  // Tamanho do trailing icon
      },
      medium: {
        height: 48,
        borderRadius: 16,
        fontSize: 16,
        lineHeight: 24,
        gap: 8,
        iconSize: 20,  // Tamanho do trailing icon
      },
    },
    
    // Estados visuais (reutiliza InputSingle com adição do trailing icon)
    // 💡 Padding é ajustado dinamicamente: quando borderWidth aumenta de 1→2, padding reduz em 1px
    state: {
      // Feedback Normal (sem erro)
      normal: {
        // Sem foco (blurred)
        blurred: {
          normal: {          // Vazio
            labelColor: '#888888',        // gray500
            textColor: '#333333',         // gray800
            trailingIconColor: '#333333', // gray800 - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#bbbbbb',       // gray300
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          filled: {          // Preenchido (opção selecionada)
            labelColor: '#555555',        // gray650
            textColor: '#333333',         // gray800
            trailingIconColor: '#333333', // gray800 - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#bbbbbb',       // gray300
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          disabled: {        // Desabilitado
            labelColor: '#888888',        // gray500
            textColor: '#888888',         // gray500
            trailingIconColor: '#888888', // gray500 - 🆕 Diferença do InputSingle
            bg: '#eeeeee',                // gray200
            borderColor: '#eeeeee',       // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
        
        // Com foco (focused / dropdown aberto)
        focused: {
          normal: {          // Vazio com foco
            labelColor: '#888888',        // gray500
            textColor: '#333333',         // gray800
            trailingIconColor: '#333333', // gray800 - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#555555',       // gray650
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          filled: {          // Preenchido com foco
            labelColor: '#555555',        // gray650
            textColor: '#333333',         // gray800
            trailingIconColor: '#333333', // gray800 - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#555555',       // gray650
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          disabled: {        // Desabilitado (não muda com foco)
            labelColor: '#888888',        // gray500
            textColor: '#888888',         // gray500
            trailingIconColor: '#888888', // gray500 - 🆕 Diferença do InputSingle
            bg: '#eeeeee',                // gray200
            borderColor: '#eeeeee',       // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
      },
      
      // Feedback Error (com erro)
      error: {
        // Sem foco (blurred)
        blurred: {
          normal: {          // Vazio com erro
            labelColor: '#bbbbbb',        // gray300
            textColor: '#333333',         // gray800
            trailingIconColor: '#bc1229', // redDark - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#bc1229',       // redDark
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          filled: {          // Preenchido com erro
            labelColor: '#bc1229',        // redDark
            textColor: '#333333',         // gray800
            trailingIconColor: '#bc1229', // redDark - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#bc1229',       // redDark
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
          disabled: {        // Desabilitado com erro
            labelColor: '#888888',        // gray500
            textColor: '#888888',         // gray500
            trailingIconColor: '#888888', // gray500 - 🆕 Diferença do InputSingle
            bg: '#eeeeee',                // gray200
            borderColor: '#eeeeee',       // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
        
        // Com foco (focused / dropdown aberto)
        focused: {
          normal: {          // Vazio com erro e foco
            labelColor: '#bbbbbb',        // gray300
            textColor: '#333333',         // gray800
            trailingIconColor: '#bc1229', // redDark - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#bc1229',       // redDark
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          filled: {          // Preenchido com erro e foco
            labelColor: '#bc1229',        // redDark
            textColor: '#333333',         // gray800
            trailingIconColor: '#bc1229', // redDark - 🆕 Diferença do InputSingle
            bg: '#ffffff',
            borderColor: '#bc1229',       // redDark
            borderWidth: 2,
            paddingVertical: { small: 7, medium: 11 },
            paddingHorizontal: { small: 11, medium: 15 },
          },
          disabled: {        // Desabilitado com erro (não muda com foco)
            labelColor: '#888888',        // gray500
            textColor: '#888888',         // gray500
            trailingIconColor: '#888888', // gray500 - 🆕 Diferença do InputSingle
            bg: '#eeeeee',                // gray200
            borderColor: '#eeeeee',       // gray200
            borderWidth: 1,
            paddingVertical: { small: 8, medium: 12 },
            paddingHorizontal: { small: 12, medium: 16 },
          },
        },
      },
    },
  },

  /**
   * INPUT FIELD
   * Campo de formulário completo com metadados (node-id: 4991-4676)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente de composição que combina:
   * - Heading: Label + Optional tag
   * - Input: InputSingle (Vertical Auto) ou InputTextarea (Textarea Fluid)
   * - Footer: Notification + Counter
   * 
   * Este é um wrapper de alto nível que unifica a experiência de formulários.
   */
  inputField: {
    // Tamanhos (apenas layout, inputs internos têm seus próprios tamanhos)
    size: {
      medium: {
        headingGap: 8,              // Gap entre label e optional tag
        gap: 8,                     // Gap vertical (heading → input → footer)
        footerGap: 16,              // Gap entre notification e counter
        
        // Tipografia - Label
        labelFontSize: 14,
        labelLineHeight: 16,
        labelFontWeight: '400' as const,
        
        // Tipografia - Optional tag
        optionalFontSize: 12,
        optionalLineHeight: 16,
        optionalFontWeight: '400' as const,
        
        // Tipografia - Notification e Counter
        notificationFontSize: 14,
        notificationLineHeight: 20,
        notificationFontWeight: '400' as const,
        
        counterFontSize: 14,
        counterLineHeight: 20,
        counterFontWeight: '400' as const,
      },
    },
    
    // Estados (apenas cores dos metadados, input reutiliza InputSingle/Textarea)
    state: {
      // Estado Normal
      normal: {
        labelColor: '#333333',        // gray800 - Label
        optionalColor: '#333333',     // gray800 - Tag "Opcional"
        notificationColor: '#555555', // gray650 - Mensagem de ajuda
        counterColor: '#555555',      // gray650 - Contador "0/150"
      },
      
      // Estado Error
      error: {
        labelColor: '#bc1229',        // redDark - Label em erro
        optionalColor: '#bc1229',     // redDark - Tag "Opcional" em erro
        notificationColor: '#bc1229', // redDark - Mensagem de erro
        counterColor: '#bc1229',      // redDark - Contador em erro
      },
      
      // Estado Disabled
      disabled: {
        labelColor: '#888888',        // gray500 - Label desabilitado
        optionalColor: '#888888',     // gray500 - Tag "Opcional" desabilitado
        notificationColor: '#888888', // gray500 - Mensagem desabilitada
        counterColor: '#888888',      // gray500 - Contador desabilitado
      },
    },
  },

  /**
   * CHECKBOX
   * Seleção múltipla com estados unchecked/checked/indeterminate (node-id: 22-612)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente mais complexo do DS com 108 variantes!
   * - 2 Functions: Input (com label), Single (apenas checkbox)
   * - 3 Types: Unchecked, Checked, Indeterminate
   * - 2 Sizes: Small (20/36px), Medium (24/48px)
   * - 5 States: Enabled, Hover, Focus, Active, Disabled
   * - 2 Error states: Normal, Error
   */
  checkbox: {
    // Tamanhos
    size: {
      small: {
        // Function=Input (com label)
        input: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 8,
          gap: 8,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '400' as const,
          iconPlateSize: 20,
          iconPlateBorderRadius: 4,
        },
        // Function=Single (apenas checkbox)
        single: {
          size: 20,
          borderRadius: 4,
        },
      },
      medium: {
        // Function=Input (com label)
        input: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 12,
          gap: 8,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '400' as const,
          iconPlateSize: 24,
          iconPlateBorderRadius: 8,
        },
        // Function=Single (apenas checkbox)
        single: {
          size: 24,
          borderRadius: 8,
        },
      },
    },
    
    // Estados (normal vs error × estados interativos)
    state: {
      // Estado Normal (sem erro)
      normal: {
        enabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#333333',      // gray800
          iconPlateBorderWidth: 0,
          textColor: '#333333',               // gray800
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: '#bbbbbb',    // gray300
          iconPlateIconColor: 'gray850',
          iconPlateBorderWidth: 2,
          textColor: 'gray850',
          bgColor: 'gray100',
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: '#555555',    // gray650
          iconPlateIconColor: 'gray850',
          iconPlateBorderWidth: 2,
          textColor: 'gray850',
          bgColor: '#eeeeee',                 // gray200
          borderColor: '#555555',             // gray650
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: '#888888',    // gray500
          iconPlateIconColor: 'gray850',
          iconPlateBorderWidth: 2,
          textColor: 'gray850',
          bgColor: '#eeeeee',                 // gray200
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#888888',      // gray500
          iconPlateBorderWidth: 0,
          textColor: '#888888',               // gray500
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
      },
      
      // Estado Error
      error: {
        enabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#bc1229',      // redDark
          iconPlateBorderWidth: 0,
          textColor: '#bc1229',               // redDark
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: 'redLightest',
          iconPlateIconColor: '#000000',      // black
          iconPlateBorderWidth: 2,
          textColor: '#000000',               // black
          bgColor: 'redLightest',
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: 'redDarkest',
          iconPlateIconColor: '#000000',      // black
          iconPlateBorderWidth: 2,
          textColor: '#000000',               // black
          bgColor: 'redLightest',
          borderColor: 'redDarkest',
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: '#f48c9a',    // redLight
          iconPlateIconColor: '#000000',      // black
          iconPlateBorderWidth: 2,
          textColor: '#000000',               // black
          bgColor: 'redLightest',
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#888888',      // gray500
          iconPlateBorderWidth: 0,
          textColor: '#888888',               // gray500
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * RADIO BUTTON
   * Seleção única com border radius circular (node-id: 5555-39003)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente de seleção única com 82 variantes.
   * Reutiliza 95% dos tokens do Checkbox.
   * Diferença principal: border radius CIRCULAR (16px) ao invés de quadrado.
   * - 2 Functions: Input (com label), Single (apenas radio)
   * - 2 Types: Unchecked, Checked (SEM indeterminate!)
   * - 2 Sizes: Small (20/36px), Medium (24/48px)
   * - 5 States: Enabled, Hover, Focus, Active, Disabled
   * - 2 Error states: Normal, Error
   */
  radioButton: {
    // Tamanhos (border radius CIRCULAR!)
    size: {
      small: {
        // Function=Input (com label)
        input: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 8,
          gap: 8,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '400' as const,
          iconPlateSize: 20,
          iconPlateBorderRadius: 16,  // CIRCULAR (diferença do checkbox!)
        },
        // Function=Single (apenas radio)
        single: {
          size: 20,
          borderRadius: 16,  // CIRCULAR!
        },
      },
      medium: {
        // Function=Input (com label)
        input: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 12,
          gap: 8,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '400' as const,
          iconPlateSize: 24,
          iconPlateBorderRadius: 16,  // CIRCULAR (diferença do checkbox!)
        },
        // Function=Single (apenas radio)
        single: {
          size: 24,
          borderRadius: 16,  // CIRCULAR!
        },
      },
    },
    
    // Estados (IDÊNTICOS ao checkbox, reutilizados 100%)
    state: {
      // Estado Normal (sem erro)
      normal: {
        enabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#333333',      // gray800
          iconPlateBorderWidth: 0,
          textColor: '#333333',               // gray800
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: '#bbbbbb',    // gray300
          iconPlateIconColor: 'gray850',
          iconPlateBorderWidth: 2,
          textColor: 'gray850',
          bgColor: 'gray100',
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: '#555555',    // gray650
          iconPlateIconColor: 'gray850',
          iconPlateBorderWidth: 2,
          textColor: 'gray850',
          bgColor: '#eeeeee',                 // gray200
          borderColor: '#555555',             // gray650
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: '#888888',    // gray500
          iconPlateIconColor: 'gray850',
          iconPlateBorderWidth: 2,
          textColor: 'gray850',
          bgColor: '#eeeeee',                 // gray200
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#888888',      // gray500
          iconPlateBorderWidth: 0,
          textColor: '#888888',               // gray500
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
      },
      
      // Estado Error (idêntico ao checkbox)
      error: {
        enabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#bc1229',      // redDark
          iconPlateBorderWidth: 0,
          textColor: '#bc1229',               // redDark
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        hover: {
          iconPlateBorderColor: 'redLightest',
          iconPlateIconColor: '#000000',      // black
          iconPlateBorderWidth: 2,
          textColor: '#000000',               // black
          bgColor: 'redLightest',
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        focus: {
          iconPlateBorderColor: 'redDarkest',
          iconPlateIconColor: '#000000',      // black
          iconPlateBorderWidth: 2,
          textColor: '#000000',               // black
          bgColor: 'redLightest',
          borderColor: 'redDarkest',
          borderWidth: 2,
        },
        active: {
          iconPlateBorderColor: '#f48c9a',    // redLight
          iconPlateIconColor: '#000000',      // black
          iconPlateBorderWidth: 2,
          textColor: '#000000',               // black
          bgColor: 'redLightest',
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
        disabled: {
          iconPlateBorderColor: '#33333300',  // transparent
          iconPlateIconColor: '#888888',      // gray500
          iconPlateBorderWidth: 0,
          textColor: '#888888',               // gray500
          bgColor: '#33333300',               // transparent
          borderColor: '#33333300',           // transparent
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * TOGGLE (SWITCH)
   * Switch ON/OFF com animação deslizante (node-id: 5556-15158)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente de switch com 40 variantes.
   * SEM estado Error (diferente de Checkbox/Radio).
   * Amarelo quando ON, cinza quando OFF.
   * - 2 Functions: Input (com label), Single (apenas switch)
   * - 2 Types: Unchecked (OFF), Checked (ON)
   * - 2 Sizes: Small (20/36px), Medium (24/48px)
   * - 5 States: Enabled, Hover, Focus, Active, Disabled
   */
  toggle: {
    // Tamanhos
    size: {
      small: {
        // Function=Input (com label)
        input: {
          height: 36,
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 8,
          gap: 8,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '400' as const,
          trackWidth: 34,
          trackHeight: 20,
          trackBorderRadius: 16,  // CIRCULAR
          thumbSize: 16,
          thumbPadding: 2,
        },
        // Function=Single (apenas toggle)
        single: {
          trackWidth: 34,
          trackHeight: 20,
          trackBorderRadius: 16,  // CIRCULAR
          thumbSize: 16,
          thumbPadding: 2,
        },
      },
      medium: {
        // Function=Input (com label)
        input: {
          height: 48,
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 12,
          gap: 8,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '400' as const,
          trackWidth: 41,
          trackHeight: 24,
          trackBorderRadius: 16,  // CIRCULAR
          thumbSize: 20,
          thumbPadding: 2,
        },
        // Function=Single (apenas toggle)
        single: {
          trackWidth: 41,
          trackHeight: 24,
          trackBorderRadius: 16,  // CIRCULAR
          thumbSize: 20,
          thumbPadding: 2,
        },
      },
    },
    
    // Estados (SEM error! Apenas unchecked/checked)
    state: {
      // Unchecked (OFF) - Cinza
      unchecked: {
        enabled: {
          trackColor: '#eeeeee',    // gray200
          thumbColor: '#888888',    // gray500
          textColor: '#333333',     // gray800
          bgColor: '#33333300',     // transparent
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
        hover: {
          trackColor: '#eeeeee',    // gray200
          thumbColor: '#555555',    // gray650 (mais escuro)
          textColor: 'gray850',
          bgColor: 'gray100',
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
        focus: {
          trackColor: '#eeeeee',    // gray200
          thumbColor: '#555555',    // gray650
          textColor: 'gray850',
          bgColor: '#eeeeee',       // gray200
          borderColor: '#555555',   // gray650
          borderWidth: 2,
        },
        active: {
          trackColor: '#eeeeee',    // gray200
          thumbColor: '#555555',    // gray650
          textColor: 'gray850',
          bgColor: '#eeeeee',       // gray200
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
        disabled: {
          trackColor: '#eeeeee',    // gray200
          thumbColor: '#888888',    // gray500
          textColor: '#888888',     // gray500
          bgColor: '#33333300',     // transparent
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
      },
      
      // Checked (ON) - AMARELO! 🟡
      checked: {
        enabled: {
          trackColor: '#ffcc00',    // zeYellow (AMARELO!)
          thumbColor: '#ffffff',    // white
          textColor: '#333333',     // gray800
          bgColor: '#33333300',     // transparent
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
        hover: {
          trackColor: '#cca300',    // zeYellowDark (amarelo escuro)
          thumbColor: '#ffffff',    // white
          textColor: 'gray850',
          bgColor: 'gray100',
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
        focus: {
          trackColor: '#ffcc00',    // zeYellow
          thumbColor: '#ffffff',    // white
          textColor: 'gray850',
          bgColor: '#eeeeee',       // gray200
          borderColor: '#555555',   // gray650
          borderWidth: 2,
        },
        active: {
          trackColor: '#ffe680',    // zeYellowLight (amarelo claro)
          thumbColor: '#ffffff',    // white
          textColor: 'gray850',
          bgColor: '#eeeeee',       // gray200
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
        disabled: {
          trackColor: '#eeeeee',    // gray200 (cinza quando disabled)
          thumbColor: '#888888',    // gray500
          textColor: '#888888',     // gray500
          bgColor: '#33333300',     // transparent
          borderColor: '#33333300', // transparent
          borderWidth: 0,
        },
      },
    },
  },

  /**
   * LIST MENU ITEM
   * Item básico de lista com leading/trailing opcional (node-id: 5053-5994)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente base individual para listas com 8 variantes.
   * SEM estado Error ou Disabled (componente de navegação/lista).
   * Estrutura: Leading icon (opcional) + Text + Trailing icon (opcional)
   * - 2 Sizes: Small (36px), Medium (48px)
   * - 4 States: Normal, Hover, Active, Focus
   */
  listMenuItem: {
    // Tamanhos
    size: {
      small: {
        height: 36,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        gap: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400' as const,
        leadingIconSize: 20,
        trailingIconSize: 20,
      },
      medium: {
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        gap: 8,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400' as const,
        leadingIconSize: 24,
        trailingIconSize: 24,
      },
    },
    
    // Estados (APENAS normal, SEM error/disabled)
    state: {
      normal: {
        leadingColor: '#333333',      // gray800
        textColor: '#333333',          // gray800
        trailingColor: '#333333',      // gray800
        bgColor: '#33333300',          // transparent
        borderColor: '#33333300',      // transparent
        borderWidth: 0,
      },
      hover: {
        leadingColor: 'gray850',
        textColor: 'gray850',
        trailingColor: 'gray850',
        bgColor: 'gray100',
        borderColor: '#33333300',      // transparent
        borderWidth: 0,
      },
      active: {
        leadingColor: 'gray850',
        textColor: 'gray850',
        trailingColor: 'gray850',
        bgColor: '#eeeeee',            // gray200
        borderColor: '#33333300',      // transparent
        borderWidth: 0,
      },
      focus: {
        leadingColor: 'gray850',
        textColor: 'gray850',
        trailingColor: 'gray850',
        bgColor: '#eeeeee',            // gray200
        borderColor: '#bbbbbb',        // gray300
        borderWidth: 2,
      },
    },
  },

  /**
   * TAG
   * Badge/Label informativo com múltiplas cores e estilos (node-id: 6943-46686)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente de tag/badge com 160 variantes!
   * - 2 Hierarchies: Solid (fundo colorido), Weak (fundo claro)
   * - 7 Colors: Success, Cold, Warning, Danger, Primary, Secondary, Rewards
   * - 2 Radius: Rounded (4px), Pill (1000px - totalmente arredondado)
   * - 5 Sizes: ExtraSmall (16px), Small (20px), Medium (24px), Large (28px), ExtraLarge (32px)
   * 
   * SEM estados interativos (hover/focus/active) - é um componente informativo estático.
   */
  tag: {
    // Hierarchy: Solid (fundo colorido, texto branco/preto)
    solid: {
      success: {
        bg: '#2c855f',        // successGreen
        color: '#ffffff',      // white
      },
      cold: {
        bg: '#118198',        // coldBlue
        color: '#ffffff',      // white
      },
      warning: {
        bg: '#eb8207',        // warningOrange
        color: '#000000',      // black
      },
      danger: {
        bg: '#e91935',        // red
        color: '#ffffff',      // white
      },
      primary: {
        bg: '#ffcc00',        // zeYellow
        color: '#000000',      // black
      },
      secondary: {
        bg: '#1f1f22',        // gray600
        color: '#ffffff',      // white
      },
      rewards: {
        bg: '#6e3ce4',        // zeCompensaPurple
        color: '#ffffff',      // white
      },
    },
    
    // Hierarchy: Weak (fundo claro, texto da cor base)
    weak: {
      success: {
        bg: '#e6f7f0',        // successGreenLight
        color: '#006440',      // successGreenDark
      },
      cold: {
        bg: '#e0f7fc',        // coldBlueLight
        color: '#050400',      // coldBlueDark
      },
      warning: {
        bg: '#fef3e5',        // warningOrangeLight
        color: '#b93200',      // warningOrangeDark
      },
      danger: {
        bg: 'redLightest',
        color: '#b60018',      // redDarker
      },
      primary: {
        bg: '#fffae5',        // zeYellowLightest
        color: '#806600',      // zeYellowDarkest
      },
      secondary: {
        bg: '#eaeaea',        // gray250
        color: '#141417',      // gray950
      },
      rewards: {
        bg: '#f1ecfc',        // zeCompensaPurpleLight
        color: '#3c1598',      // zeCompensaPurpleDark
      },
    },
    
    // Sizes - Rounded (border radius: 4px)
    rounded: {
      extraSmall: {
        height: 16,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 4,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 12,
        gap: 4,
      },
      small: {
        height: 20,
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderRadius: 4,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 12,
        gap: 4,
      },
      medium: {
        height: 24,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 16,
        gap: 4,
      },
      large: {
        height: 28,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 20,
        gap: 4,
      },
      extraLarge: {
        height: 32,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 24,
        gap: 4,
      },
    },
    
    // Sizes - Pill (border radius: 1000px - totalmente arredondado)
    pill: {
      extraSmall: {
        height: 16,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 1000,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 12,
        gap: 4,
      },
      small: {
        height: 20,
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderRadius: 1000,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 12,
        gap: 4,
      },
      medium: {
        height: 24,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 1000,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 16,
        gap: 4,
      },
      large: {
        height: 28,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 1000,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 20,
        gap: 4,
      },
      extraLarge: {
        height: 32,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 1000,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600' as const,  // SemiBold
        iconSize: 24,
        gap: 4,
      },
    },
  },
  
  /**
   * COMPOUND TAG
   * Tag composta com leading (colorido) + trailing (claro) (node-id: 6963-47463)
   * Extraído do Figma via MCP - 08/10/2025
   * 
   * Componente composto com 112 variantes:
   * - Leading pode ser Label (texto) ou Icon (ícone)
   * - Leading tem fundo colorido sólido (solid)
   * - Trailing tem fundo colorido claro (weak)
   * - 7 cores × 2 leading types × 2 radius × 5 sizes = 140 combinações possíveis
   * 
   * Estrutura visual:
   * ┌─────────────────────────────────────┐
   * │ [Leading]  +  [Trailing Text]       │
   * │  (colorido)    (fundo claro)        │
   * └─────────────────────────────────────┘
   */
  compoundTag: {
    // Leading Part - Solid/Strong Colors (mesmo esquema do Tag solid)
    leading: {
      success: {
        bg: '#2c855f',        // successGreen
        color: '#ffffff',      // white
      },
      cold: {
        bg: '#118198',        // coldBlue
        color: '#ffffff',      // white
      },
      warning: {
        bg: '#eb8207',        // warningOrange
        color: '#000000',      // black
      },
      danger: {
        bg: '#e91935',        // red
        color: '#ffffff',      // white
      },
      primary: {
        bg: '#ffcc00',        // zeYellow
        color: '#000000',      // black
      },
      secondary: {
        bg: '#1f1f22',        // gray600
        color: '#ffffff',      // white
      },
      rewards: {
        bg: '#6e3ce4',        // zeCompensaPurple
        color: '#ffffff',      // white
      },
    },
    
    // Trailing Part - Weak/Light Colors (mesmo esquema do Tag weak)
    trailing: {
      success: {
        bg: '#e6f7f0',        // successGreenLight
        color: '#006440',      // successGreenDark
      },
      cold: {
        bg: '#e0f7fc',        // coldBlueLight
        color: '#050400',      // coldBlueDark
      },
      warning: {
        bg: '#fef3e5',        // warningOrangeLight
        color: '#b93200',      // warningOrangeDark
      },
      danger: {
        bg: 'redLightest',
        color: '#b60018',      // redDarker
      },
      primary: {
        bg: '#fffae5',        // zeYellowLightest
        color: '#806600',      // zeYellowDarkest
      },
      secondary: {
        bg: '#eaeaea',        // gray250
        color: '#141417',      // gray950
      },
      rewards: {
        bg: '#f1ecfc',        // zeCompensaPurpleLight
        color: '#3c1598',      // zeCompensaPurpleDark
      },
    },
    
    // Sizes - Rounded (border-radius: 4px)
    rounded: {
      extraSmall: {
        height: 16,
        gap: 8,
        paddingRight: 8,
        borderRadius: 4,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 4,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 12,
          padding: 2,
          borderRadius: 4,
        },
      },
      small: {
        height: 20,
        gap: 8,
        paddingRight: 8,
        borderRadius: 4,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 4,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 12,
          padding: 4,
          borderRadius: 4,
        },
      },
      medium: {
        height: 24,
        gap: 12,
        paddingRight: 12,
        borderRadius: 4,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 4,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 16,
          padding: 4,
          borderRadius: 4,
        },
      },
      large: {
        height: 28,
        gap: 12,
        paddingRight: 12,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 4,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 20,
          padding: 4,
          borderRadius: 4,
        },
      },
      extraLarge: {
        height: 32,
        gap: 12,
        paddingRight: 12,
        borderRadius: 4,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 4,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 24,
          padding: 4,
          borderRadius: 4,
        },
      },
    },
    
    // Sizes - Pill (border-radius: 1000px)
    pill: {
      extraSmall: {
        height: 16,
        gap: 4,
        paddingRight: 8,
        borderRadius: 1000,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 1000,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 12,
          padding: 2,
          borderRadius: 1000,
        },
      },
      small: {
        height: 20,
        gap: 4,
        paddingRight: 8,
        borderRadius: 1000,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 1000,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 12,
          padding: 4,
          borderRadius: 1000,
        },
      },
      medium: {
        height: 24,
        gap: 12,
        paddingRight: 12,
        borderRadius: 1000,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 1000,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 16,
          padding: 4,
          borderRadius: 1000,
        },
      },
      large: {
        height: 28,
        gap: 12,
        paddingRight: 12,
        borderRadius: 1000,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 1000,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 20,
          padding: 4,
          borderRadius: 1000,
        },
      },
      extraLarge: {
        height: 32,
        gap: 12,
        paddingRight: 12,
        borderRadius: 1000,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600' as const,  // SemiBold
        // Leading Label
        leadingLabel: {
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 1000,
        },
        // Leading Icon
        leadingIcon: {
          iconSize: 24,
          padding: 4,
          borderRadius: 1000,
        },
      },
    },
  },

  /**
   * TEXT / TYPOGRAPHY
   * Extraído do Figma (node-id: 2904-2129)
   * 
   * Sistema de tipografia completo com 17 variantes organizadas em 4 categorias:
   * - Display (4): Para elementos proeminentes e banners grandes
   * - Title (4): Para hierarquia de títulos
   * - Highlight (4): Para texto de suporte enfatizado
   * - Content (5): Para conteúdo de leitura (body, labels, meta)
   */
  text: {
    // Display Variants (Gelada RC3 - Black 900)
    display1: {
      fontFamily: 'Gelada RC3',
      fontSize: 48,      // peta
      fontWeight: 900,   // stronger/black
      lineHeight: 60,    // close/peta
      letterSpacing: 0,
    },
    display2: {
      fontFamily: 'Gelada RC3',
      fontSize: 36,      // giga
      fontWeight: 900,   // stronger/black
      lineHeight: 44,    // close/giga
      letterSpacing: 0,
    },
    display3: {
      fontFamily: 'Gelada RC3',
      fontSize: 28,      // mega
      fontWeight: 900,   // stronger/black
      lineHeight: 36,    // close/mega
      letterSpacing: 0,
    },
    display4: {
      fontFamily: 'Gelada RC3',
      fontSize: 24,      // extraLarge
      fontWeight: 900,   // stronger/black
      lineHeight: 32,    // close/extraLarge
      letterSpacing: 0,
    },
    
    // Title Variants (Roboto Flex - Bold 700)
    title1: {
      fontFamily: 'Roboto Flex',
      fontSize: 24,      // extraLarge
      fontWeight: 700,   // bold
      lineHeight: 32,    // close/extraLarge
      letterSpacing: 0,
    },
    title2: {
      fontFamily: 'Roboto Flex',
      fontSize: 20,      // large
      fontWeight: 700,   // bold
      lineHeight: 24,    // close/large
      letterSpacing: 0,
    },
    title3: {
      fontFamily: 'Roboto Flex',
      fontSize: 16,      // medium
      fontWeight: 700,   // bold
      lineHeight: 24,    // regular/medium
      letterSpacing: 0,
    },
    title4: {
      fontFamily: 'Roboto Flex',
      fontSize: 14,      // small
      fontWeight: 700,   // bold
      lineHeight: 20,    // regular/small
      letterSpacing: 0,
    },
    
    // Highlight Variants (Roboto Flex - SemiBold 600)
    highlight1: {
      fontFamily: 'Roboto Flex',
      fontSize: 20,      // large
      fontWeight: 600,   // semibold
      lineHeight: 24,    // close/large
      letterSpacing: 0,
    },
    highlight2: {
      fontFamily: 'Roboto Flex',
      fontSize: 16,      // medium
      fontWeight: 600,   // semibold
      lineHeight: 20,    // close/medium
      letterSpacing: 0,
    },
    highlight3: {
      fontFamily: 'Roboto Flex',
      fontSize: 14,      // small
      fontWeight: 600,   // semibold
      lineHeight: 20,    // regular/small
      letterSpacing: 0,
    },
    highlight4: {
      fontFamily: 'Roboto Flex',
      fontSize: 12,      // extraSmall
      fontWeight: 600,   // semibold
      lineHeight: 20,    // regular/extraSmall
      letterSpacing: 0,
    },
    
    // Content Variants (Roboto Flex - Regular 400 / SemiBold 600)
    body: {
      fontFamily: 'Roboto Flex',
      fontSize: 14,      // small
      fontWeight: 400,   // regular
      lineHeight: 20,    // regular/small
      letterSpacing: 0,
    },
    bodyLarge: {
      fontFamily: 'Roboto Flex',
      fontSize: 16,      // medium
      fontWeight: 400,   // regular
      lineHeight: 24,    // regular/medium
      letterSpacing: 0,
    },
    label: {
      fontFamily: 'Roboto Flex',
      fontSize: 14,      // small
      fontWeight: 600,   // semibold
      lineHeight: 16,    // tight/small
      letterSpacing: 0,
    },
    informative: {
      fontFamily: 'Roboto Flex',
      fontSize: 14,      // small
      fontWeight: 400,   // regular
      lineHeight: 20,    // regular/small
      letterSpacing: 0,
    },
    meta: {
      fontFamily: 'Roboto Flex',
      fontSize: 12,      // extraSmall
      fontWeight: 400,   // regular
      lineHeight: 16,    // close/extraSmall
      letterSpacing: 0,
    },
    
    // ========================================
    // CORES SEMÂNTICAS DO TEXT
    // (Extraídas do Figma: node-id 2906-1121)
    // ========================================
    colors: {
      title: '#333333',      // txt/title - Cor padrão para títulos
      body: '#555555',       // txt/body - Cor padrão para corpo de texto
      highlight: 'gray850',  // txt/highlight - Cor para texto enfatizado (mais escuro)
      muted: '#bbbbbb',      // txt/muted - Cor para texto secundário/desabilitado
      label: '#333333',      // txt/label - Cor para labels (igual a title)
      disabled: '#888888',   // txt/disabled - Cor para texto desabilitado
      
      // Estados e feedback
      info: '#0e677a',       // txt/info - Cor para mensagens informativas (infoTeal)
      success: '#236a4c',    // txt/success - Cor para mensagens de sucesso
      warning: '#bc6806',    // txt/warning - Cor para mensagens de alerta
      danger: '#bc1229',     // txt/danger - Cor para mensagens de erro
      
      // Especiais
      rewards: '#6e3ce4',    // txt/rewards - Cor para ZeCompensa/Rewards
      cold: '#0e677a',       // txt/cold - Cor para produtos gelados (igual a info/infoTeal)
    },
  },

  /**
   * SNACKBAR (TOAST)
   * Sistema de notificações temporárias (node-id: 8231-335)
   * Extraído do Figma via MCP - 13/10/2025
   * 
   * Componente baseado no Toast do Tamagui com 16 variantes:
   * - 4 Feedback types: Success, Informative, Warning, Error
   * - 2 Lines: One (1 linha), Two (2 linhas com descrição)
   * - 2 Action types: Dismiss (botão X), Button (botão de ação)
   * 
   * Estrutura: [Icon] Title + Description (opcional) [Action]
   */
  snackbar: {
    // Dimensões base
    size: {
      width: 328,              // Largura fixa
      oneLine: {
        height: 124,           // Altura com 1 linha (título apenas)
      },
      twoLines: {
        height: 136,           // Altura com 2 linhas (título + descrição)
      },
      icon: {
        size: 24,              // Tamanho do ícone de feedback
      },
    },
    
    // Layout e espaçamento
    spacing: {
      padding: 16,             // Padding interno do container
      gap: 8,                  // Gap entre elementos (icon, content, action)
    },
    
    // Border radius
    borderRadius: 16,
    
    // Feedback colors (4 tipos)
    feedback: {
      success: {
        background: '#2c855f',       // successGreen
        border: '#1f5d42',           // successGreenDark
        textColor: '#ffffff',        // white
        iconColor: '#ffffff',        // white
      },
      informative: {
        background: '#10a8c7',       // infoCyan
        border: '#0c5a6a',           // infoCyanDark
        textColor: '#000000',        // black
        iconColor: '#000000',        // black
      },
      warning: {
        background: '#eb8207',       // warningOrange
        border: '#bc6806',           // warningOrangeText (border específico do snackbar)
        textColor: '#000000',        // black
        iconColor: '#000000',        // black
      },
      error: {
        background: '#e91935',       // red
        border: '#bc1229',           // redDark
        textColor: '#ffffff',        // white
        iconColor: '#ffffff',        // white
      },
    },
    
    // Tipografia
    typography: {
      title: {
        fontFamily: 'Roboto Flex',
        fontWeight: 700,             // Bold
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
      },
      description: {
        fontFamily: 'Roboto Flex',
        fontWeight: 400,             // Regular
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
      },
    },
    
    // Animações (valores sugeridos para Tamagui Toast)
    animation: {
      enterDuration: 200,            // Duração da entrada (ms)
      exitDuration: 150,             // Duração da saída (ms)
      swipeThreshold: 50,            // Threshold para swipe dismiss (px)
      autoCloseDuration: 5000,       // Auto-close após 5 segundos
    },
    
    // Posicionamento (Tamagui Toast Viewport)
    viewport: {
      top: 16,                       // Distância do topo (mobile)
      bottom: 16,                    // Distância do fundo (desktop)
      left: 16,                      // Margem lateral esquerda
      right: 16,                     // Margem lateral direita
    },
  },

} as const

// Types
export type Tokens = typeof tokens
export type Color = keyof typeof tokens.color
export type Space = keyof typeof tokens.space
export type Size = keyof typeof tokens.size
export type Radius = keyof typeof tokens.radius

