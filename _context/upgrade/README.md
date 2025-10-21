# 📦 Documentação de Upgrade - Storybook 8 + React 18

Bem-vindo à documentação completa do upgrade do Storybook 6.5 para Storybook 8.

---

## 📚 Estrutura da Documentação

### 1. [`dependencias-upgrade.md`](./dependencias-upgrade.md)
**O QUE CONTÉM:** Levantamento completo de todas as dependências que precisam ser atualizadas

**QUANDO USAR:** Antes de começar o upgrade, para entender o escopo das mudanças

**CONTEÚDO:**
- Versões atuais vs versões novas de cada dependência
- Dependências críticas (Storybook, Expo, React Native)
- Dependências que serão removidas
- Package.json final sugerido
- Ordem de execução do upgrade

---

### 2. [`atencao.md`](./atencao.md)
**O QUE CONTÉM:** Pontos críticos de código que precisam ser ajustados

**QUANDO USAR:** Durante o upgrade, para saber exatamente o que mudar no código

**CONTEÚDO:**
- Arquivos de configuração que devem ser criados
- Mudanças necessárias em arquivos existentes
- Ajustes em componentes e stories
- Verificações de compatibilidade
- Troubleshooting de erros comuns

---

### 3. [`checklist.md`](./checklist.md)
**O QUE CONTÉM:** Checklist passo a passo do upgrade completo

**QUANDO USAR:** Durante todo o processo, para não perder nenhum passo

**CONTEÚDO:**
- 10 fases do upgrade
- Checkboxes para marcar progresso
- Validações em cada fase
- Plano de rollback
- Seção de troubleshooting

---

### 4. [`exemplos-config.md`](./exemplos-config.md)
**O QUE CONTÉM:** Exemplos completos e prontos para copy/paste de todos os arquivos de configuração

**QUANDO USAR:** Durante a implementação, para copiar os arquivos exatos necessários

**CONTEÚDO:**
- `.storybook/main.ts`
- `.storybook/preview.tsx`
- `.ondevice/Storybook.tsx`
- `babel.config.js` atualizado
- `metro.config.js` atualizado
- `App.tsx` atualizado
- Exemplos de stories atualizadas

---

## 🚀 Quick Start

### Para Leitura Rápida (30 minutos)
1. Leia `dependencias-upgrade.md` (seções críticas)
2. Leia `atencao.md` (primeiros 5 pontos)
3. Olhe `exemplos-config.md` (principais arquivos)

### Para Implementação (2-3 dias)
1. Leia **toda** a documentação
2. Use `checklist.md` como guia principal
3. Consulte `dependencias-upgrade.md` para versões
4. Consulte `atencao.md` para cada ajuste
5. Copie de `exemplos-config.md` os arquivos necessários

---

## ⚠️ Antes de Começar

### Pré-requisitos
- [ ] Git configurado e sem mudanças pendentes
- [ ] Node.js 18+ instalado
- [ ] Yarn 3.6.2 instalado
- [ ] Tempo disponível: 2-3 dias
- [ ] Backup do projeto feito
- [ ] Branch separada criada

### Aviso Importante
⚠️ **Este é um upgrade complexo que afeta:**
- Storybook (6.5 → 8.3) - breaking changes significativos
- React Native (0.72 → 0.74) - mudanças de API
- Expo (49 → 51) - nova versão major
- Tamagui (1.52 → 1.112) - muitas melhorias
- Vite (4 → 5) - performance e breaking changes

**Estimativa:** 16-24 horas de trabalho
**Risco:** Médio-Alto
**Complexidade:** Alta (ambiente dual web/native)

---

## 📋 Resumo Executivo

### O que muda?

#### Storybook
- ✅ API moderna (CSF3)
- ✅ Melhor performance
- ✅ Vite 5 (mais rápido)
- ✅ Novas features (play functions, interactions)
- ⚠️ Breaking changes significativos
- ⚠️ Configuração completamente diferente

#### React Native / Expo
- ✅ React Native 0.74 (mais estável)
- ✅ Expo SDK 51 (features novas)
- ✅ Melhor compatibilidade
- ⚠️ Algumas APIs mudaram

#### Tamagui
- ✅ Versão 1.112 (muito mais estável)
- ✅ Performance melhorada
- ✅ Bugs corrigidos
- ⚠️ Verificar compatibilidade com config

### Arquivos Novos

Você precisará criar:
```
.storybook/
├── main.ts
├── preview.tsx
└── tsconfig.json (opcional)

.ondevice/
├── Storybook.tsx
├── preview.tsx
└── storybook.requires.ts (gerado automaticamente)
```

### Arquivos que Mudam

Você precisará modificar:
```
✏️ package.json (todas as dependências)
✏️ babel.config.js (remover plugin)
✏️ metro.config.js (novo loader)
✏️ app.config.js (adicionar extra)
✏️ App.tsx (suporte condicional)
```

### Arquivos que Saem

Você precisará remover:
```
🗑️ @storybook/builder-vite
🗑️ @storybook/addon-react-native-web
🗑️ babel-plugin-react-docgen-typescript (do uso)
```

---

## 🎯 Fluxo de Trabalho Recomendado

### Fase 1: Preparação (1-2 horas)
1. Ler toda documentação
2. Fazer backup completo
3. Criar branch: `upgrade/storybook-8`
4. Commitar tudo que estiver pendente

### Fase 2: Dependências (2-4 horas)
1. Atualizar `package.json`
2. Remover `node_modules` e lockfile
3. Instalar novamente
4. Resolver conflitos de peer dependencies

### Fase 3: Configuração Web (3-4 horas)
1. Criar `.storybook/main.ts`
2. Criar `.storybook/preview.tsx`
3. Ajustar `babel.config.js`
4. Testar `yarn storybook:web`

### Fase 4: Configuração Native (4-6 horas)
1. Criar `.ondevice/Storybook.tsx`
2. Ajustar `metro.config.js`
3. Ajustar `App.tsx`
4. Gerar stories: `yarn storybook-generate`
5. Testar `yarn storybook:ios`

### Fase 5: Validação (3-4 horas)
1. Testar todos os componentes
2. Verificar web e native
3. Build de produção
4. Documentar mudanças

### Fase 6: Deploy (2-3 horas)
1. Code review
2. Testes finais
3. Merge para main
4. Deploy

---

## 📊 Impacto Estimado

### Por Área

| Área | Impacto | Esforço | Risco |
|------|---------|---------|-------|
| Configuração Storybook | Alto | 6h | Médio |
| Dependências | Alto | 4h | Alto |
| Componentes | Baixo | 3h | Baixo |
| Native Setup | Alto | 6h | Alto |
| Testes | Médio | 4h | Médio |
| Documentação | Baixo | 2h | Baixo |

### Por Componente

| Componente | Mudanças Necessárias | Risco |
|------------|---------------------|-------|
| Button | Nenhuma (stories OK) | Baixo |
| ButtonIcon | Nenhuma (stories OK) | Baixo |
| Checkbox | Nenhuma (stories OK) | Baixo |
| RadioButton | Nenhuma (stories OK) | Baixo |

**✅ Boa notícia:** Seus componentes e stories já estão no formato correto!

---

## ✅ Benefícios do Upgrade

### Performance
- 🚀 50-70% mais rápido (Vite 5)
- 🚀 HMR mais rápido
- 🚀 Build mais rápido

### Developer Experience
- ✨ Melhor autocomplete
- ✨ Melhores types
- ✨ Melhor documentação automática
- ✨ Play functions para testes

### Features
- 🎯 Interaction testing
- 🎯 Better controls
- 🎯 Better docs generation
- 🎯 Component testing

### Estabilidade
- 🛡️ Menos bugs
- 🛡️ Melhor manutenção
- 🛡️ Ecossistema mais ativo
- 🛡️ Suporte a longo prazo

---

## ❌ Possíveis Problemas

### Problemas Conhecidos

1. **Tamagui pode ter conflitos com Vite 5**
   - Solução: Usar configuração específica no `viteFinal`
   - Documentado em `exemplos-config.md`

2. **Stories on-device podem não carregar**
   - Solução: Executar `yarn storybook-generate`
   - Verificar `metro.config.js`

3. **Fonts podem não carregar no Storybook**
   - Solução: Adicionar `useFonts` no preview
   - Exemplo em `exemplos-config.md`

4. **Build pode falhar no CI/CD**
   - Solução: Atualizar scripts de CI
   - Adicionar cache do Storybook

---

## 🆘 Suporte

### Se algo der errado

1. **Consulte [`atencao.md`](./atencao.md) seção "Erros Comuns"**
2. **Verifique [`checklist.md`](./checklist.md) seção "Troubleshooting"**
3. **Reverta usando:**
   ```bash
   git checkout main
   git branch -D upgrade/storybook-8
   ```

### Recursos Externos

- [Storybook 8 Migration Guide](https://storybook.js.org/docs/migration-guide)
- [Storybook Discord](https://discord.gg/storybook)
- [Tamagui Discord](https://discord.gg/tamagui)
- [Expo Discord](https://chat.expo.dev)

---

## 📈 Progresso

Use esta seção para rastrear seu progresso:

```
Fase 1: Preparação           [ ]
Fase 2: Dependências         [ ]
Fase 3: Config Web           [ ]
Fase 4: Config Native        [ ]
Fase 5: Validação            [ ]
Fase 6: Deploy               [ ]

Status Geral: Não Iniciado
Data Início: ___/___/______
Data Fim: ___/___/______
```

---

## 🎓 Lições Aprendidas

**Preencher após o upgrade:**

```
O que funcionou bem:
-

O que foi difícil:
-

O que faria diferente:
-

Dicas para próximo upgrade:
-
```

---

## 📝 Changelog

Mantenha um registro das mudanças:

```
[___/___/______]
- Iniciado upgrade
- 

[___/___/______]
- Dependências atualizadas
-

[___/___/______]
- Web funcionando
-

[___/___/______]
- Native funcionando
-

[___/___/______]
- Concluído e em produção
-
```

---

## 🎉 Conclusão

Este upgrade é significativo mas os benefícios valem o esforço:
- ✅ Ambiente moderno e mantido
- ✅ Melhor performance
- ✅ Mais features
- ✅ Melhor DX

**Lembre-se:** Vá devagar, teste bastante, e documente tudo!

**Boa sorte! 🚀**

---

**Última atualização:** Outubro 2025  
**Versão:** 1.0  
**Autor:** AI Assistant  
**Status:** Pronto para uso

