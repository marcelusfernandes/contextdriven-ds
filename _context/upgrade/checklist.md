# ✅ Checklist de Upgrade - Storybook 8 + React 18

## Preparação

- [ ] Criar branch: `git checkout -b upgrade/storybook-8`
- [ ] Fazer backup completo do projeto
- [ ] Documentar versão atual funcionando
- [ ] Commitar todas as mudanças pendentes

---

## Fase 1: Atualização de Dependências

- [ ] Atualizar `package.json` conforme `dependencias-upgrade.md`
- [ ] Remover `node_modules/`: `rm -rf node_modules`
- [ ] Remover `yarn.lock`: `rm yarn.lock`
- [ ] Instalar: `yarn install`
- [ ] Resolver conflitos de peer dependencies
- [ ] Verificar warnings de instalação

### Dependências Críticas Checklist

- [ ] `@storybook/react`: 6.5.16 → 8.3.0
- [ ] `@storybook/react-native`: 6.5.6 → 8.3.0
- [ ] `@storybook/react-vite`: 8.3.0 (novo)
- [ ] `expo`: 49.0.7 → 51.0.0
- [ ] `react-native`: 0.72.10 → 0.74.5
- [ ] `vite`: 4.4.9 → 5.4.0
- [ ] `tamagui`: 1.52.9 → 1.112.0
- [ ] Remover: `@storybook/builder-vite`
- [ ] Remover: `@storybook/addon-react-native-web`

---

## Fase 2: Configuração Storybook Web

- [ ] Criar pasta `.storybook/`
- [ ] Criar `.storybook/main.ts`
- [ ] Criar `.storybook/preview.tsx`
- [ ] Configurar Tamagui no `viteFinal`
- [ ] Configurar alias `@icons`
- [ ] Configurar fonts no preview

### Validação Web
- [ ] Executar: `yarn storybook:web`
- [ ] Verificar: Storybook abre sem erros
- [ ] Verificar: Componentes carregam
- [ ] Verificar: Fonts carregam corretamente
- [ ] Verificar: Ícones aparecem
- [ ] Verificar: Controls funcionam
- [ ] Verificar: Actions registram eventos

---

## Fase 3: Configuração Storybook Native

- [ ] Criar pasta `.ondevice/`
- [ ] Criar `.ondevice/Storybook.tsx`
- [ ] Criar `.ondevice/preview.tsx` (opcional)
- [ ] Configurar tema on-device

### Ajustes de Configuração
- [ ] Atualizar `babel.config.js`
- [ ] Remover `babel-plugin-react-docgen-typescript`
- [ ] Atualizar `metro.config.js`
- [ ] Ajustar loader do Storybook
- [ ] Adicionar `cjs` no sourceExts

### App.tsx
- [ ] Importar `Constants` do expo-constants
- [ ] Adicionar lógica condicional para Storybook
- [ ] Testar se app normal ainda funciona

### Scripts
- [ ] Atualizar scripts no `package.json`:
  - [ ] `storybook:web` → usar `storybook dev`
  - [ ] `build-storybook` → usar `storybook build`
- [ ] Executar: `yarn storybook-generate`

### Validação Native
- [ ] Executar: `yarn storybook:ios` (ou android)
- [ ] Verificar: Storybook UI abre
- [ ] Verificar: Stories listam corretamente
- [ ] Verificar: Componentes renderizam
- [ ] Verificar: Controles on-device funcionam
- [ ] Verificar: Actions funcionam

---

## Fase 4: Ajustes nos Componentes

### Button
- [ ] Verificar stories carregam
- [ ] Testar todas as variantes
- [ ] Testar estados (hover, focus, active)
- [ ] Testar loading state
- [ ] Testar disabled state
- [ ] Testar com ícones

### ButtonIcon
- [ ] Verificar stories carregam
- [ ] Testar todas as variantes
- [ ] Testar tamanhos
- [ ] Testar estados

### Checkbox
- [ ] Verificar stories carregam
- [ ] Testar checked/unchecked
- [ ] Testar intermediate
- [ ] Testar disabled
- [ ] Testar com label

### RadioButton
- [ ] Verificar stories carregam
- [ ] Testar selected/unselected
- [ ] Testar disabled
- [ ] Testar grupos

---

## Fase 5: Testes de Compatibilidade

### Ambiente Web
- [ ] Build funciona: `yarn build-storybook`
- [ ] Sem erros no console
- [ ] Sem warnings críticos
- [ ] Performance aceitável
- [ ] Todas as stories visíveis

### Ambiente Native (iOS)
- [ ] Build funciona: `yarn storybook:ios`
- [ ] Storybook UI navegável
- [ ] Componentes renderizam corretamente
- [ ] Interações funcionam
- [ ] Performance aceitável

### Ambiente Native (Android)
- [ ] Build funciona: `yarn storybook:android`
- [ ] Storybook UI navegável
- [ ] Componentes renderizam corretamente
- [ ] Interações funcionam
- [ ] Performance aceitável

### App Normal (sem Storybook)
- [ ] `yarn start` funciona
- [ ] `yarn web` funciona
- [ ] `yarn ios` funciona
- [ ] `yarn android` funciona
- [ ] App renderiza normalmente

---

## Fase 6: Melhorias Opcionais

- [ ] Adicionar `@storybook/addon-interactions`
- [ ] Criar play functions para testes
- [ ] Melhorar documentação nos componentes
- [ ] Adicionar mais stories de exemplo
- [ ] Configurar temas customizados
- [ ] Adicionar viewport addon
- [ ] Configurar a11y addon

---

## Fase 7: Limpeza

- [ ] Remover códigos comentados
- [ ] Remover console.logs de debug
- [ ] Atualizar README.md
- [ ] Atualizar documentação dos componentes
- [ ] Verificar não há arquivos duplicados
- [ ] Limpar cache: `rm -rf .expo node_modules/.cache`

---

## Fase 8: Validação Final

### Checklist de Qualidade
- [ ] Todos os componentes funcionam
- [ ] Não há erros no console
- [ ] Não há warnings críticos
- [ ] Performance está OK
- [ ] Builds não demoram excessivamente
- [ ] Hot reload funciona
- [ ] Documentação atualizada

### Testes Manuais
- [ ] Testar cada story individualmente
- [ ] Testar controles de cada componente
- [ ] Testar actions de cada componente
- [ ] Testar em diferentes viewports (web)
- [ ] Testar em diferentes devices (native)

### Code Review
- [ ] Revisar todos os arquivos modificados
- [ ] Verificar se seguiu padrões do projeto
- [ ] Verificar tipos TypeScript
- [ ] Verificar imports
- [ ] Verificar formatação (prettier)

---

## Fase 9: Documentação

- [ ] Criar `CHANGELOG.md` com mudanças
- [ ] Atualizar `README.md` do projeto
- [ ] Atualizar `README.md` dos componentes
- [ ] Documentar comandos novos
- [ ] Documentar breaking changes
- [ ] Criar guia de migração (se aplicável)

---

## Fase 10: Deploy

- [ ] Commitar mudanças: `git add .`
- [ ] Criar commit: `git commit -m "chore: upgrade to Storybook 8 + React 18"`
- [ ] Push para branch: `git push origin upgrade/storybook-8`
- [ ] Criar Pull Request
- [ ] Code review por outro dev
- [ ] Testar em ambiente de staging (se aplicável)
- [ ] Merge para main
- [ ] Deploy em produção
- [ ] Monitorar erros pós-deploy

---

## Rollback (se necessário)

Se algo der errado:

- [ ] `git checkout main`
- [ ] `git branch -D upgrade/storybook-8`
- [ ] Restaurar backup se necessário
- [ ] Investigar erro antes de tentar novamente
- [ ] Documentar problema encontrado

---

## Troubleshooting

### Erro: "Cannot find module '@storybook/react-vite'"
```bash
yarn add -D @storybook/react-vite@^8.3.0
```

### Erro: "Tamagui not configured"
```bash
# Verificar viteFinal em .storybook/main.ts
# Verificar import do config em .storybook/preview.tsx
```

### Erro: "Stories not loading"
```bash
yarn storybook-generate
rm -rf node_modules/.cache
```

### Erro: "Fonts not loading"
```bash
# Adicionar useFonts no preview.tsx
# Verificar caminhos das fonts
```

### Erro: "Build failed"
```bash
rm -rf node_modules
rm yarn.lock
yarn install
```

---

## Notas Importantes

⚠️ **Tempo estimado total:** 16-24 horas (2-3 dias)

⚠️ **Complexidade:** Alta (ambiente dual web/native)

⚠️ **Risco:** Médio-Alto (testar bem antes de produção)

✅ **Benefícios:** 
- Storybook moderno com melhores ferramentas
- Melhor performance
- Melhor DX (developer experience)
- Suporte a novas features

---

## Status do Upgrade

**Data Início:** ___/___/______

**Data Fim:** ___/___/______

**Responsável:** _________________

**Status:** 
- [ ] Não iniciado
- [ ] Em progresso
- [ ] Bloqueado
- [ ] Concluído
- [ ] Revertido

**Observações:**
```
[Adicionar notas aqui durante o processo]
```

