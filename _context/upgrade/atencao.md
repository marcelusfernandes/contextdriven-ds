# ⚠️ Pontos de Atenção - Ajustes de Código para Storybook 8

## 🔴 CRÍTICO - Arquivos de Configuração

### 1. Criar `.storybook/main.ts` (Web)

**Storybook 6 não possui este arquivo ou usa formato antigo**

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  core: {
    disableTelemetry: true,
  },
  
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        tamaguiPlugin({
          components: ['tamagui'],
          config: './tamagui.config.ts',
        }),
      ],
      define: {
        'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
      },
      resolve: {
        alias: {
          '@icons': '/components/icons',
        },
      },
    })
  },
  
  docs: {
    autodocs: 'tag',
  },
}

export default config
```

---

### 2. Criar `.storybook/preview.tsx` (Web)

```typescript
// .storybook/preview.tsx
import React from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/core'
import config from '../tamagui.config'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
}

export default preview
```

---

### 3. Ajustar `.ondevice/Storybook.tsx` (React Native)

**Criar arquivo para versão on-device do Storybook**

```typescript
// .ondevice/Storybook.tsx
import { view } from './storybook.requires'
import { getStorybookUI } from '@storybook/react-native'

const StorybookUIRoot = getStorybookUI({
  enableWebsockets: true,
  onDeviceUI: true,
  shouldPersistSelection: true,
  theme: {
    backgroundColor: 'white',
    headerTextColor: 'black',
    labelColor: 'black',
    borderColor: '#e6e6e6',
    previewBorderColor: '#b3b3b3',
    buttonTextColor: '#999999',
    buttonActiveTextColor: '#444444',
  },
})

export default StorybookUIRoot
```

---

### 4. Criar `.ondevice/storybook.requires.ts`

```typescript
// .ondevice/storybook.requires.ts
// ATENÇÃO: Este arquivo será gerado automaticamente pelo Storybook
// Não edite manualmente. Execute: yarn storybook-generate

import { configure } from '@storybook/react-native'

// Importar todas as stories
const stories = [
  require('../components/Button/Button.stories.tsx'),
  require('../components/ButtonIcon/ButtonIcon.stories.tsx'),
  require('../components/Checkbox/Checkbox.stories.tsx'),
  require('../components/RadioButton/RadioButton.stories.tsx'),
]

configure(() => {
  stories.forEach((story) => story)
}, module)

export { stories as view }
```

---

### 5. Atualizar `babel.config.js`

**MUDANÇAS NECESSÁRIAS:**

```javascript
// babel.config.js
if (!process.env.TAMAGUI_TARGET) {
  process.env.TAMAGUI_TARGET = "native";
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // MUDANÇA: Storybook 8 não precisa mais do babel-plugin-react-docgen-typescript
      // REMOVER esta linha:
      // process.env.STORYBOOK_ENABLED
      //   ? ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }]
      //   : null,
      
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"],
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@icons": "./components/icons",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ].filter(Boolean),
  };
};
```

---

### 6. Atualizar `metro.config.js`

**MUDANÇAS NECESSÁRIAS:**

```javascript
// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

if (process.env.STORYBOOK_ENABLED) {
  // MUDANÇA: Storybook 8 usa novo sistema de loader
  const { generate } = require("@storybook/react-native/scripts/loader");
  
  generate({
    configPath: path.resolve(__dirname, "./.ondevice"),
  });

  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    "react-native",
    ...defaultConfig.resolver.resolverMainFields,
  ];
}

// Configuração para suportar SVG
const { transformer, resolver } = defaultConfig;

defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
  unstable_allowRequireContext: true,
};

defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg", "mjs", "cjs"], // ADICIONAR cjs
};

module.exports = defaultConfig;
```

---

### 7. Atualizar `App.tsx` para Suportar Storybook Native

**MUDANÇAS NECESSÁRIAS:**

```typescript
// App.tsx
import React from 'react'
import { useFonts } from 'expo-font'

// ADICIONAR: Suporte condicional para Storybook
import Constants from 'expo-constants'

// Carregar Storybook se STORYBOOK_ENABLED estiver ativo
const enableStorybook = Constants.expoConfig?.extra?.storybookEnabled === 'true'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Gelada RC3 Black': require('./assets/fonts/GeladaRC3-Black.otf'),
    'Roboto Flex': require('./assets/fonts/RobotoFlex.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  // ADICIONAR: Retornar Storybook se habilitado
  if (enableStorybook) {
    const StorybookUI = require('./.ondevice/Storybook').default
    return <StorybookUI />
  }

  // Continuar com app normal...
  return (
    // ... resto do código
  )
}
```

---

### 8. Adicionar `app.config.js` extra

```javascript
// app.config.js
module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED || 'false',
    },
  }
}
```

---

## 🟡 IMPORTANTE - Ajustes em Stories

### 9. Atualizar Imports nas Stories

**ANTES (Storybook 6):**
```typescript
import type { Meta, StoryObj } from '@storybook/react'
```

**DEPOIS (Storybook 8):**
```typescript
// MANTÉM IGUAL - mas verificar se todos os tipos funcionam
import type { Meta, StoryObj } from '@storybook/react'
```

✅ **Os tipos já estão corretos!** Não precisa alterar.

---

### 10. Verificar `satisfies` nas Stories

**Arquivos afetados:**
- `components/Button/Button.stories.tsx`
- `components/ButtonIcon/ButtonIcon.stories.tsx`
- `components/Checkbox/Checkbox.stories.tsx`
- `components/RadioButton/RadioButton.stories.tsx`

```typescript
// ✅ CORRETO - já está usando satisfies (compatível com SB8)
const meta = {
  title: 'Components/Button',
  component: Button,
  // ...
} satisfies Meta<typeof Button>
```

**Nenhuma mudança necessária!** Já está usando o padrão correto.

---

## 🟢 OPCINAL - Melhorias Recomendadas

### 11. Adicionar Play Functions (novo no Storybook 8)

```typescript
// Exemplo: Button.stories.tsx
import { expect, userEvent, within } from '@storybook/test'

export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}
```

---

### 12. Usar Component Story Format 3 (CSF3)

```typescript
// Novo formato mais conciso (opcional)
export default {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

// Stories podem ser ainda mais simples
export const Primary = {}

export const WithIcon = {
  args: {
    leadingIcon: <Checkmarkfilled />,
  },
}
```

---

## 🔵 Scripts do package.json

### 13. Atualizar Comandos Storybook

**ANTES:**
```json
{
  "storybook:web": "TAMAGUI_TARGET=web start-storybook -p 6138",
  "storybook:web:clean": "rm -rf node_modules/.cache && TAMAGUI_TARGET=web start-storybook -p 6138 --no-manager-cache",
  "build-storybook": "build-storybook",
}
```

**DEPOIS:**
```json
{
  "storybook:web": "TAMAGUI_TARGET=web storybook dev -p 6138",
  "storybook:web:clean": "rm -rf node_modules/.cache && TAMAGUI_TARGET=web storybook dev -p 6138",
  "build-storybook": "TAMAGUI_TARGET=web storybook build",
}
```

**Scripts Native mantém igual:**
```json
{
  "storybook": "TAMAGUI_TARGET=native STORYBOOK_ENABLED='true' expo start",
  "storybook-generate": "sb-rn-get-stories --config-path .ondevice",
}
```

---

## ⚠️ Pontos de ATENÇÃO em Componentes

### 14. Verificar Props Condicionais

**Arquivo:** Todos os componentes com stories

```typescript
// ✅ VERIFICAR: Props opcionais devem ter default
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive'
  size?: 'small' | 'medium'
  loading?: boolean
  disabled?: boolean
}

// Se não tiver defaults, adicionar:
const Button = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  // ...
}
```

---

### 15. Verificar Uso de `onPress` vs `onClick`

**Storybook 8 web pode ter comportamentos diferentes**

```typescript
// Em componentes Tamagui, usar sempre onPress
<Button onPress={handlePress}>Click</Button>

// Nas stories, mapear action:
export default {
  argTypes: {
    onPress: { action: 'pressed' }, // ✅ correto
  },
} satisfies Meta<typeof Button>
```

---

## 🟣 Tamagui Específico

### 16. Verificar `tamagui.config.ts`

**ATENÇÃO:** Tamagui 1.112 pode ter mudanças na API de config

```typescript
// tamagui.config.ts
import { createTamagui } from '@tamagui/core'

// VERIFICAR se precisa adicionar:
const config = createTamagui({
  // ... sua config atual
  
  // ADICIONAR se não existir:
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
})

export default config

// ADICIONAR type export para Storybook 8
export type AppConfig = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
```

---

### 17. Verificar Imports de Tamagui

**ANTES:**
```typescript
import { TamaguiProvider, Stack } from '@tamagui/core'
```

**VERIFICAR se precisa:**
```typescript
import { TamaguiProvider } from '@tamagui/core'
import { Stack } from 'tamagui' // ou continuar com @tamagui/core
```

**Provavelmente não precisa mudar**, mas testar.

---

## 🔧 Testes e Validação

### 18. Checklist de Validação Pós-Upgrade

```bash
# 1. Limpar cache
rm -rf node_modules/.cache .expo

# 2. Testar web storybook
yarn storybook:web

# 3. Gerar stories para native
yarn storybook-generate

# 4. Testar native storybook
yarn storybook:ios

# 5. Build storybook
yarn build-storybook

# 6. Verificar cada componente:
# - Button ✅
# - ButtonIcon ✅
# - Checkbox ✅
# - RadioButton ✅

# 7. Testar estados interativos:
# - Hover
# - Focus
# - Active
# - Disabled
# - Loading

# 8. Testar em diferentes viewports
# - Mobile
# - Tablet
# - Desktop
```

---

## 📝 Arquivos que DEVEM ser Criados

```
.storybook/
├── main.ts          # ⚠️ CRIAR
├── preview.tsx      # ⚠️ CRIAR
└── tsconfig.json    # ⚠️ CRIAR (opcional)

.ondevice/
├── Storybook.tsx         # ⚠️ CRIAR
├── storybook.requires.ts # ⚠️ CRIAR (ou auto-gerado)
└── preview.tsx           # ⚠️ CRIAR (opcional)
```

---

## 🚨 Erros Comuns e Soluções

### Erro 1: "Cannot find module '@storybook/react-vite'"
**Solução:** Instalar `@storybook/react-vite` em vez de `@storybook/builder-vite`

### Erro 2: "Tamagui config not found"
**Solução:** Verificar caminho no `viteFinal` do main.ts

### Erro 3: "Stories not loading on device"
**Solução:** Executar `yarn storybook-generate` antes de rodar native

### Erro 4: "Fonts not loading in Storybook"
**Solução:** Adicionar fonts no preview.tsx com useFonts

### Erro 5: "Icons não aparecem no Storybook"
**Solução:** Verificar alias `@icons` no vite config e babel config

### Erro 6: "SVG import error"
**Solução:** Adicionar `vite-plugin-svgr` no viteFinal

---

## 📊 Estimativa de Esforço

| Tarefa | Tempo | Complexidade |
|--------|-------|--------------|
| Criar configs Storybook | 2h | Média |
| Ajustar babel/metro | 1h | Baixa |
| Testar web storybook | 2h | Média |
| Configurar native | 4h | Alta |
| Ajustar componentes | 3h | Média |
| Testes completos | 4h | Alta |
| **TOTAL** | **16h** | **Alta** |

---

## 🎯 Ordem de Implementação

1. ✅ Backup do projeto
2. ✅ Atualizar package.json (ver `dependencias-upgrade.md`)
3. ✅ Instalar dependências
4. 🔧 Criar `.storybook/main.ts`
5. 🔧 Criar `.storybook/preview.tsx`
6. 🔧 Ajustar `babel.config.js`
7. 🔧 Ajustar `metro.config.js`
8. 🔧 Atualizar scripts no `package.json`
9. 🧪 Testar web (`yarn storybook:web`)
10. 🔧 Criar `.ondevice/Storybook.tsx`
11. 🔧 Gerar stories native (`yarn storybook-generate`)
12. 🧪 Testar native (`yarn storybook:ios`)
13. ✅ Validar todos os componentes
14. 📝 Documentar mudanças

---

## 📚 Referências

- [Storybook 8 Breaking Changes](https://storybook.js.org/docs/8.0/migration-guide)
- [React Native Storybook Setup](https://github.com/storybookjs/react-native)
- [Tamagui + Vite](https://tamagui.dev/docs/intro/installation)
- [Expo SDK 51 Guide](https://expo.dev/changelog/2024/05-07-sdk-51)

---

**⚠️ IMPORTANTE:** Sempre testar em branch separada antes de mergear para main!

