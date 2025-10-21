# ButtonIcon

Componente de botão contendo apenas um ícone, ideal para ações compactas, toolbars e interfaces densas.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Uso Básico](#uso-básico)
- [API](#api)
- [Variantes](#variantes)
- [Tamanhos](#tamanhos)
- [Estados](#estados)
- [Exemplos](#exemplos)
- [Acessibilidade](#acessibilidade)
- [Melhores Práticas](#melhores-práticas)
- [Especificação Técnica](#especificação-técnica)

## Visão Geral

ButtonIcon é um componente de botão otimizado para exibir apenas um ícone, sem texto. É perfeito para:

- 🎯 **Toolbars e barras de ação** - Múltiplas ações em espaço limitado
- ❌ **Botões de fechar** - Modais, dialogs e painéis
- ➕ **Floating Action Buttons** - Ações primárias destacadas
- 🔧 **Ações contextuais** - Editar, excluir, favoritar em cards/listas

### Características

- ✅ 4 hierarquias visuais (Primary, Secondary, Tertiary, Destructive)
- ✅ 2 tamanhos (Small, Medium)
- ✅ 6 estados interativos (Normal, Hover, Focus, Active, Loading, Disabled)
- ✅ Total de 48 variantes (conforme Figma)
- ✅ Quadrado perfeito (1:1 aspect ratio)
- ✅ Ícone sempre centralizado
- ✅ Totalmente acessível
- ✅ Funciona em Web e React Native

## Instalação

```tsx
import { ButtonIcon } from './components/ButtonIcon'
import { Checkmarkfilled } from './components/icons'
```

## Uso Básico

```tsx
<ButtonIcon 
  icon={<Checkmarkfilled />}
  onPress={() => console.log('Clicou!')}
  accessibilityLabel="Confirmar ação"
/>
```

## API

### Props

| Prop | Tipo | Padrão | Obrigatório | Descrição |
|------|------|--------|-------------|-----------|
| `icon` | `ReactNode` | - | ✅ | Ícone a ser exibido no botão |
| `size` | `'small' \| 'medium'` | `'medium'` | - | Tamanho do botão |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'primary'` | - | Hierarquia visual do botão |
| `loading` | `boolean` | `false` | - | Exibe spinner animado |
| `disabled` | `boolean` | `false` | - | Desabilita o botão |
| `onPress` | `() => void` | - | - | Função executada ao clicar/tocar |
| `accessibilityLabel` | `string` | - | ⚠️ Recomendado | Label descritivo para leitores de tela |
| `testID` | `string` | - | - | ID para testes automatizados |

### Tipos Exportados

```tsx
import type { 
  ButtonIconProps, 
  ButtonIconSize, 
  ButtonIconVariant 
} from './components/ButtonIcon'
```

## Variantes

### Primary (Ação Principal)

Botão de maior destaque, usado para ações principais.

```tsx
<ButtonIcon 
  variant="primary" 
  icon={<Checkmarkfilled />}
  accessibilityLabel="Confirmar"
/>
```

**Cores:**
- Normal: Fundo amarelo (#ffcc00), ícone preto
- Hover: Fundo amarelo escuro (#cca300)
- Disabled: Fundo cinza (#eeeeee), ícone cinza

### Secondary (Ação Secundária)

Botão com borda, para ações secundárias de igual importância.

```tsx
<ButtonIcon 
  variant="secondary" 
  icon={<Searchfilled />}
  accessibilityLabel="Buscar"
/>
```

**Cores:**
- Normal: Fundo transparente, borda cinza escura, ícone cinza
- Hover: Fundo cinza escuro (#19191b), ícone branco
- Disabled: Fundo cinza claro, ícone cinza

### Tertiary (Ação Terciária)

Botão de menor destaque, para ações opcionais ou frequentes.

```tsx
<ButtonIcon 
  variant="tertiary" 
  icon={<Editfilled />}
  accessibilityLabel="Editar"
/>
```

**Cores:**
- Normal: Fundo transparente, sem borda, ícone cinza
- Hover: Fundo cinza com transparência
- Disabled: Fundo cinza claro, ícone cinza

### Destructive (Ação Destrutiva)

Para ações irreversíveis ou perigosas (excluir, remover, etc).

```tsx
<ButtonIcon 
  variant="destructive" 
  icon={<Trashfilled />}
  accessibilityLabel="Excluir item"
/>
```

**Cores:**
- Normal: Fundo transparente, borda vermelha, ícone vermelho escuro
- Hover: Fundo vermelho escuro, ícone branco
- Disabled: Fundo cinza claro, ícone cinza

## Tamanhos

### Medium (48×48px)

Tamanho padrão, ideal para a maioria dos casos.

```tsx
<ButtonIcon 
  size="medium" 
  icon={<Checkmarkfilled />}
/>
```

**Dimensões:**
- Container: 48 × 48 px
- Ícone: 24 × 24 px
- Padding: 12px
- Border Radius: 16px

### Small (36×36px)

Tamanho compacto, ideal para espaços restritos.

```tsx
<ButtonIcon 
  size="small" 
  icon={<Checkmarkfilled />}
/>
```

**Dimensões:**
- Container: 36 × 36 px
- Ícone: 20 × 20 px
- Padding: 8px
- Border Radius: 12px

## Estados

### Normal

Estado padrão do botão.

```tsx
<ButtonIcon icon={<Checkmarkfilled />} />
```

### Hover

Acionado ao passar o mouse (web) ou long-press (mobile).

### Focus

Acionado ao focar com teclado (Tab). Inclui borda de 2px para indicação visual.

### Active

Acionado ao pressionar o botão.

### Loading

Exibe spinner animado no lugar do ícone.

```tsx
<ButtonIcon 
  loading 
  icon={<Checkmarkfilled />}
  accessibilityLabel="Salvando..."
/>
```

### Disabled

Desabilita interações e aplica estilo visual de desabilitado.

```tsx
<ButtonIcon 
  disabled 
  icon={<Checkmarkfilled />}
  accessibilityLabel="Ação não disponível"
/>
```

## Exemplos

### Toolbar de Ações

```tsx
<Stack flexDirection="row" gap={8} alignItems="center">
  <ButtonIcon 
    variant="tertiary" 
    icon={<Editfilled />}
    accessibilityLabel="Editar"
    onPress={handleEdit}
  />
  <ButtonIcon 
    variant="tertiary" 
    icon={<Searchfilled />}
    accessibilityLabel="Buscar"
    onPress={handleSearch}
  />
  <ButtonIcon 
    variant="tertiary" 
    icon={<Filterfilled />}
    accessibilityLabel="Filtrar"
    onPress={handleFilter}
  />
  <ButtonIcon 
    variant="destructive" 
    icon={<Trashfilled />}
    accessibilityLabel="Excluir"
    onPress={handleDelete}
  />
</Stack>
```

### Botão Fechar Modal

```tsx
<Stack position="absolute" top={16} right={16}>
  <ButtonIcon 
    variant="tertiary" 
    size="small" 
    icon={<Closefilled />}
    accessibilityLabel="Fechar modal"
    onPress={() => setModalOpen(false)}
  />
</Stack>
```

### Floating Action Button (FAB)

```tsx
<Stack 
  position="fixed" 
  bottom={24} 
  right={24}
  zIndex={1000}
>
  <ButtonIcon 
    variant="primary" 
    size="medium" 
    icon={<Addfilled />}
    accessibilityLabel="Adicionar novo item"
    onPress={handleAddNew}
  />
</Stack>
```

### Ações em Card/Lista

```tsx
<Stack 
  flexDirection="row" 
  justifyContent="space-between" 
  alignItems="center"
  padding={16}
>
  <Text>Item da Lista</Text>
  
  <Stack flexDirection="row" gap={4}>
    <ButtonIcon 
      variant="tertiary" 
      size="small" 
      icon={<Heartfilled />}
      accessibilityLabel="Adicionar aos favoritos"
      onPress={handleFavorite}
    />
    <ButtonIcon 
      variant="tertiary" 
      size="small" 
      icon={<Editfilled />}
      accessibilityLabel="Editar item"
      onPress={handleEdit}
    />
    <ButtonIcon 
      variant="destructive" 
      size="small" 
      icon={<Trashfilled />}
      accessibilityLabel="Excluir item"
      onPress={handleDelete}
    />
  </Stack>
</Stack>
```

### Operação Assíncrona com Loading

```tsx
const [isDeleting, setIsDeleting] = useState(false)

const handleDelete = async () => {
  setIsDeleting(true)
  try {
    await deleteItem(itemId)
  } finally {
    setIsDeleting(false)
  }
}

<ButtonIcon 
  variant="destructive" 
  icon={<Trashfilled />}
  loading={isDeleting}
  disabled={isDeleting}
  accessibilityLabel={isDeleting ? "Excluindo..." : "Excluir item"}
  onPress={handleDelete}
/>
```

### Navegação

```tsx
<Stack flexDirection="row" gap={8} justifyContent="space-between">
  <ButtonIcon 
    variant="secondary" 
    icon={<Arrowsfillerleft />}
    accessibilityLabel="Voltar"
    onPress={handleBack}
    disabled={!canGoBack}
  />
  
  <ButtonIcon 
    variant="secondary" 
    icon={<Arrowsfilledright />}
    accessibilityLabel="Avançar"
    onPress={handleNext}
    disabled={!canGoNext}
  />
</Stack>
```

## Acessibilidade

### accessibilityLabel é Essencial

⚠️ **Sempre forneça `accessibilityLabel`** quando usar ButtonIcon, pois ele não possui texto visível.

```tsx
// ✅ BOM - Descreve claramente a ação
<ButtonIcon 
  icon={<Trashfilled />}
  accessibilityLabel="Excluir este item permanentemente"
/>

// ⚠️ ACEITÁVEL - Breve mas claro
<ButtonIcon 
  icon={<Trashfilled />}
  accessibilityLabel="Excluir"
/>

// ❌ RUIM - Sem label (inacessível)
<ButtonIcon 
  icon={<Trashfilled />}
/>
```

### Navegação por Teclado

ButtonIcon é totalmente navegável por teclado:

- **Tab / Shift+Tab** - Navega entre botões
- **Enter / Space** - Ativa o botão focado
- **Estado Focus** - Indica visualmente o foco com borda de 2px

### Leitores de Tela

- Anuncia o label fornecido em `accessibilityLabel`
- Anuncia o estado (desabilitado, carregando)
- Anuncia o role "button"

### Estados Disabled e Loading

```tsx
// Estado disabled
<ButtonIcon 
  disabled
  icon={<Checkmarkfilled />}
  accessibilityLabel="Ação não disponível no momento"
/>

// Estado loading
<ButtonIcon 
  loading
  icon={<Checkmarkfilled />}
  accessibilityLabel="Salvando alterações..."
/>
```

## Melhores Práticas

### ✅ Faça

- **Use ícones reconhecíveis** - Ícones devem ser autoexplicativos
- **Forneça accessibilityLabel** - Sempre descreva a ação claramente
- **Use variant apropriado** - Primary para ação principal, Destructive para exclusão
- **Agrupe ações relacionadas** - Use Stack com gap consistente
- **Use size adequado** - Small para densidade, Medium para toque confortável

### ❌ Evite

- **Ícones ambíguos** - Se o ícone não é claro, use Button com texto
- **Muitos botões juntos** - Pode causar confusão visual
- **Ícones decorativos** - ButtonIcon é para ações, não decoração
- **Omitir accessibilityLabel** - Compromete acessibilidade
- **Usar para ações complexas** - Ações que precisam explicação devem usar Button com texto

### Quando Usar ButtonIcon vs Button

| Situação | Use ButtonIcon | Use Button |
|----------|----------------|------------|
| Toolbar/Header | ✅ | - |
| Ação primária em form | - | ✅ |
| Ícone autoexplicativo | ✅ | - |
| Primeira vez que usuário vê ação | - | ✅ |
| Espaço muito limitado | ✅ | - |
| Call-to-action importante | - | ✅ |
| Ações contextuais em cards | ✅ | - |
| Ação complexa que precisa clareza | - | ✅ |

## Especificação Técnica

### Fonte de Design

- **Figma Node ID:** 3856:7612
- **Figma URL:** [Ver no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=3856-7612)
- **Total de variantes:** 48 (4 hierarquias × 2 tamanhos × 6 estados)

### Design Tokens

ButtonIcon usa tokens do sistema de design:

```typescript
tokens.buttonIcon = {
  size: {
    small: { width: 36, height: 36, iconSize: 20, ... },
    medium: { width: 48, height: 48, iconSize: 24, ... },
  },
  variant: {
    primary: { normal: {...}, hover: {...}, ... },
    secondary: { normal: {...}, hover: {...}, ... },
    tertiary: { normal: {...}, hover: {...}, ... },
    destructive: { normal: {...}, hover: {...}, ... },
  }
}
```

Ver `tokens.ts` para estrutura completa de tokens.

### Estrutura Interna

```
ButtonIcon/
├── ButtonIcon.tsx       # Componente principal
├── ButtonIcon.stories.tsx  # Stories do Storybook
├── index.ts             # Exports públicos
├── QUICK_START.md       # Guia rápido
└── README.md            # Documentação completa (este arquivo)
```

### Dependências

- `@tamagui/core` - Styled components e sistema de design
- `../Button/Loading` - Componente de loading spinner (reutilizado)
- `../../tokens` - Sistema de tokens de design

### Browser/Platform Support

- ✅ Web (Chrome, Firefox, Safari, Edge)
- ✅ React Native (iOS, Android)
- ✅ SSR (Server-Side Rendering)

## Recursos Adicionais

- **Storybook:** Veja todos os 48 estados visuais em ação
- **Especificação Figma:** `_context/component_data/ButtonIcon-clean.md`
- **Sistema de Ícones:** `ICONS_GUIDE.md` - Lista completa de 580+ ícones
- **Design Tokens:** `tokens.ts` - Sistema completo de tokens

## Changelog

### v1.0.0 (atual)

- ✨ Implementação inicial
- ✅ 4 hierarquias (Primary, Secondary, Tertiary, Destructive)
- ✅ 2 tamanhos (Small, Medium)
- ✅ 6 estados interativos
- ✅ Total de 48 variantes conforme Figma
- ✅ Suporte completo a acessibilidade
- ✅ Funciona em Web e React Native

---

**Desenvolvido com ❤️ usando Tamagui**

