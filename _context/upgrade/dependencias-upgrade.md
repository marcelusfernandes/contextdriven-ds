# Levantamento de Dependências - Upgrade Storybook 8 + React 18

## Status Atual
- **React:** 18.2.0 ✅ (já na versão correta)
- **Storybook:** 6.5.16 → **Precisa upgrade para 8.x**
- **Expo:** 49.0.7 → **Precisa upgrade para 51.x**
- **React Native:** 0.72.10 → **Precisa upgrade para 0.74.x**

---

## 🔴 Dependências CRÍTICAS - Upgrade Obrigatório

### Storybook Core
```json
// ATUAL
"@storybook/react": "^6.5.16"
"@storybook/react-native": "^6.5.6"

// NOVO
"@storybook/react": "^8.3.0"
"@storybook/react-native": "^8.3.0"
```

### Storybook Addons - Web
```json
// ATUAL
"@storybook/addon-actions": "^6.5.16"
"@storybook/addon-controls": "^6.5.16"
"@storybook/addon-essentials": "^6.5.16"
"@storybook/addon-links": "^6.5.16"

// NOVO
"@storybook/addon-essentials": "^8.3.0"
"@storybook/addon-links": "^8.3.0"
"@storybook/addon-interactions": "^8.3.0"
// NOTE: actions e controls já inclusos no essentials
```

### Storybook Addons - React Native (On-Device)
```json
// ATUAL
"@storybook/addon-ondevice-actions": "^6.5.6"
"@storybook/addon-ondevice-backgrounds": "^6.5.6"
"@storybook/addon-ondevice-controls": "^6.5.6"
"@storybook/addon-ondevice-notes": "^6.5.6"

// NOVO
"@storybook/addon-ondevice-actions": "^8.3.0"
"@storybook/addon-ondevice-backgrounds": "^8.3.0"
"@storybook/addon-ondevice-controls": "^8.3.0"
"@storybook/addon-ondevice-notes": "^8.3.0"
```

### Storybook Builder
```json
// ATUAL
"@storybook/builder-vite": "0.4.2" // DESATUALIZADO - versão experimental
"@storybook/addon-react-native-web": "^0.0.21" // DESATUALIZADO

// NOVO
"@storybook/react-vite": "^8.3.0" // Substitui builder-vite
// REMOVER addon-react-native-web (não mais necessário)
```

---

## 🟡 Dependências de Build - Upgrade Recomendado

### Vite
```json
// ATUAL
"vite": "^4.4.9"
"@vitejs/plugin-react": "^4.0.4"
"vite-plugin-svgr": "^4.5.0"

// NOVO
"vite": "^5.4.0"
"@vitejs/plugin-react": "^4.3.1"
"vite-plugin-svgr": "^4.2.0" // Confirmar compatibilidade
```

### Babel
```json
// ATUAL
"@babel/core": "^7.19.3"
"babel-loader": "^8.2.3"

// NOVO
"@babel/core": "^7.25.0"
"babel-loader": "^9.1.3"
```

### Babel Plugins
```json
// MANTER (compatíveis)
"babel-plugin-module-resolver": "^5.0.2"
"babel-plugin-react-docgen-typescript": "^1.5.1"
"babel-plugin-react-native-web": "^0.18.10"
"babel-plugin-transform-inline-environment-variables": "^0.4.4"
```

---

## 🟢 Dependências do Expo/React Native - Upgrade Necessário

### Expo SDK
```json
// ATUAL
"expo": "^49.0.7"
"expo-constants": "~14.4.2"
"expo-font": "~11.4.0"
"expo-status-bar": "~1.6.0"

// NOVO (Expo 51 - compatível com RN 0.74)
"expo": "^51.0.0"
"expo-constants": "~16.0.0"
"expo-font": "~12.0.0"
"expo-status-bar": "~1.12.0"
```

### React Native Core
```json
// ATUAL
"react-native": "0.72.10"
"react-native-web": "^0.19.7"

// NOVO
"react-native": "0.74.5"
"react-native-web": "^0.19.12"
```

### React Native Libs
```json
// ATUAL
"@react-native-async-storage/async-storage": "1.18.2"
"@react-native-community/datetimepicker": "7.2.0"
"@react-native-community/slider": "4.4.2"
"react-native-reanimated": "~3.3.0"
"react-native-safe-area-context": "4.6.3"
"react-native-svg": "13.9.0"

// NOVO (compatíveis com Expo 51)
"@react-native-async-storage/async-storage": "1.23.1"
"@react-native-community/datetimepicker": "8.0.1"
"@react-native-community/slider": "4.5.2"
"react-native-reanimated": "~3.10.1"
"react-native-safe-area-context": "4.10.5"
"react-native-svg": "15.2.0"
```

### React Native Tooling
```json
// ATUAL
"react-native-svg-transformer": "^1.5.1"

// NOVO
"react-native-svg-transformer": "^1.5.0" // OK, versão estável
```

---

## 🔵 Dependências Tamagui - Verificar Compatibilidade

### Tamagui Core
```json
// ATUAL
"tamagui": "^1.52.9"
"@tamagui/animations-react-native": "^1.52.9"
"@tamagui/config": "^1.52.9"
"@tamagui/font-inter": "^1.52.9"
"@tamagui/shorthands": "^1.52.9"
"@tamagui/theme-base": "^1.52.9"
"@tamagui/themes": "^1.52.9"
"@tamagui/vite-plugin": "^1.52.9"

// NOVO (última versão estável)
// Verificar em: https://tamagui.dev
"tamagui": "^1.112.0"
"@tamagui/animations-react-native": "^1.112.0"
"@tamagui/config": "^1.112.0"
"@tamagui/font-inter": "^1.112.0"
"@tamagui/shorthands": "^1.112.0"
"@tamagui/theme-base": "^1.112.0"
"@tamagui/themes": "^1.112.0"
"@tamagui/vite-plugin": "^1.112.0"
"@tamagui/core": "^1.112.0" // Adicionar explicitamente
```

---

## 🟣 Dependências TypeScript

```json
// ATUAL
"typescript": "^5.1.3"
"@types/react": "~18.2.14"

// NOVO
"typescript": "^5.5.0"
"@types/react": "~18.3.0"
"@types/react-dom": "~18.3.0" // Adicionar se não existir
```

---

## ⚠️ Dependências REMOVIDAS (não mais necessárias)

```json
// REMOVER estas dependências:
"@storybook/addon-react-native-web": "^0.0.21" // Substituído pelo react-vite
"@storybook/builder-vite": "0.4.2" // Substituído pelo react-vite
```

---

## 🔧 Resolutions/Overrides - AJUSTAR

```json
// ATUAL (remover)
"resolutions": {
  "react-docgen-typescript": "2.2.2",
  "@storybook/react-docgen-typescript-plugin": "1.0.6--canary.9.cd77847.0"
},

// NOVO (se necessário, mas testar sem primeiro)
"resolutions": {
  "react-docgen-typescript": "^2.2.2"
}
```

---

## 📦 Package.json Final Sugerido

### dependencies
```json
{
  "@react-native-async-storage/async-storage": "1.23.1",
  "@react-native-community/datetimepicker": "8.0.1",
  "@react-native-community/slider": "4.5.2",
  "@tamagui/animations-react-native": "^1.112.0",
  "@tamagui/config": "^1.112.0",
  "@tamagui/core": "^1.112.0",
  "@tamagui/font-inter": "^1.112.0",
  "@tamagui/shorthands": "^1.112.0",
  "@tamagui/theme-base": "^1.112.0",
  "@tamagui/themes": "^1.112.0",
  "expo": "^51.0.0",
  "expo-constants": "~16.0.0",
  "expo-font": "~12.0.0",
  "expo-status-bar": "~1.12.0",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "react-native": "0.74.5",
  "react-native-reanimated": "~3.10.1",
  "react-native-safe-area-context": "4.10.5",
  "react-native-svg": "15.2.0",
  "react-native-web": "^0.19.12",
  "tamagui": "^1.112.0"
}
```

### devDependencies
```json
{
  "@babel/core": "^7.25.0",
  "@storybook/addon-essentials": "^8.3.0",
  "@storybook/addon-interactions": "^8.3.0",
  "@storybook/addon-links": "^8.3.0",
  "@storybook/addon-ondevice-actions": "^8.3.0",
  "@storybook/addon-ondevice-backgrounds": "^8.3.0",
  "@storybook/addon-ondevice-controls": "^8.3.0",
  "@storybook/addon-ondevice-notes": "^8.3.0",
  "@storybook/react": "^8.3.0",
  "@storybook/react-native": "^8.3.0",
  "@storybook/react-vite": "^8.3.0",
  "@tamagui/vite-plugin": "^1.112.0",
  "@types/react": "~18.3.0",
  "@types/react-dom": "~18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "babel-loader": "^9.1.3",
  "babel-plugin-module-resolver": "^5.0.2",
  "babel-plugin-react-docgen-typescript": "^1.5.1",
  "babel-plugin-react-native-web": "^0.18.10",
  "babel-plugin-transform-inline-environment-variables": "^0.4.4",
  "prettier": "^3.3.0",
  "react-native-svg-transformer": "^1.5.0",
  "typescript": "^5.5.0",
  "vite": "^5.4.0",
  "vite-plugin-svgr": "^4.2.0"
}
```

---

## 🎯 Ordem de Execução do Upgrade

1. **Backup completo** do projeto
2. Atualizar `package.json` com as novas versões
3. Remover `node_modules` e lockfiles
4. Executar `yarn install` (ou npm install)
5. Resolver conflitos de dependências (peer dependencies)
6. Ajustar arquivos de configuração (ver `atencao.md`)
7. Testar ambiente web primeiro
8. Testar ambiente native depois
9. Validar todos os componentes no Storybook

---

## 📚 Referências Importantes

- [Storybook 8 Migration Guide](https://storybook.js.org/docs/migration-guide)
- [Expo SDK 51 Changelog](https://expo.dev/changelog/2024/05-07-sdk-51)
- [Tamagui Latest Docs](https://tamagui.dev)
- [React Native 0.74 Changelog](https://reactnative.dev/blog/2024/04/22/release-0.74)

---

**Estimativa de Tempo:** 2-4 dias
**Risco:** Alto (ambiente dual web/native)
**Prioridade:** Testar em branch separada primeiro

