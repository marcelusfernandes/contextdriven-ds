# Icon - Especificação Técnica

**Componente:** Icon  
**Figma Node ID:** 20:239  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=20-239&t=WAePLGMYEe2sFS7R-11  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 20:239
- **Nome:** Icons 🟢
- **Posição:** x=-755, y=23
- **Dimensões:** 261 × 301

### Variantes Identificadas

| Node ID    | Nome da Variante          | Posição (x,y) | Dimensões (w×h) |
|------------|---------------------------|---------------|-----------------|
| 4613:2879  | Size=Micro (12)           | 25, 125       | 12 × 12         |
| 20:238     | Size=Extra Small (16)     | 61, 123       | 16 × 16         |
| 20:240     | Size=Small (20)           | 101, 121      | 20 × 20         |
| 20:248     | Size=Medium (24)          | 145, 119      | 24 × 24         |
| 4612:2624  | Size=Large (28)           | 193, 117      | 28 × 28         |
| 4613:2882  | Size=Extra Large (32)     | 245, 115      | 32 × 32         |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Cores
```typescript
"token.components.icons.styles.color.label.normal.$value": "#333333"
```

### Tamanhos
```typescript
"token.components.icons.sizes.micro.$value": "12"
"token.components.icons.sizes.extraSmall.$value": "16"
"token.components.icons.sizes.small.$value": "20"
"token.components.icons.sizes.medium.$value": "24"
"token.components.icons.sizes.large.$value": "28"
"token.components.icons.sizes.extraLarge.$value": "32"
```

### Espaçamento
```typescript
"Spacing/24": "24"
```

---

## 📐 Dimensões Extraídas das Variantes

### Tamanhos Disponíveis

| Tamanho      | Valor (px) | Token Key   | Uso Recomendado              |
|--------------|------------|-------------|------------------------------|
| Micro        | 12         | micro       | Ícones muito pequenos        |
| Extra Small  | 16         | extraSmall  | Ícones em textos pequenos    |
| Small        | 20         | small       | Ícones em botões secundários |
| Medium       | 24         | medium      | Ícones padrão (default)      |
| Large        | 28         | large       | Ícones em destaque           |
| Extra Large  | 32         | extraLarge  | Ícones grandes, cabeçalhos   |

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

- `#333333` - Cor padrão dos ícones (normal state)

**Nota:** Esta cor já existe em `tokens.color.gray900` (#333333), não precisa adicionar nova.

### Estrutura Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes
  
  // COMPONENTES
  icon: {
    size: {
      micro: 12,        // 🆕 Icon - Menor tamanho
      extraSmall: 16,   // 🆕 Icon - Extra pequeno
      small: 20,        // 🆕 Icon - Pequeno
      medium: 24,       // 🆕 Icon - Médio (padrão)
      large: 28,        // 🆕 Icon - Grande
      extraLarge: 32,   // 🆕 Icon - Extra grande
    },
    color: {
      normal: '#333333',  // 🆕 Icon - Cor padrão (mesmo que gray900)
    },
  },
}
```

---

## 🎯 Análise do Componente

### Propósito

O componente **Icon** é um **wrapper universal** que:
1. Padroniza os tamanhos dos ícones em toda a aplicação
2. Aceita qualquer ícone da biblioteca de 585 ícones
3. Garante consistência visual através dos tokens
4. Facilita o uso de ícones com tamanhos pré-definidos

### Props Interface (Deduzida)

```typescript
interface IconProps {
  /** Ícone a ser renderizado (componente da biblioteca) */
  icon: React.ComponentType<any>
  
  /** Tamanho do ícone */
  size?: 'micro' | 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
  
  /** Cor do ícone (sobrescreve cor padrão) */
  color?: string
  
  /** Props adicionais passadas ao ícone */
  [key: string]: any
}
```

### Comportamento Esperado

1. **Tamanho Padrão:** `medium` (24px)
2. **Cor Padrão:** `tokens.icon.color.normal` (#333333)
3. **Renderização:** Renderiza o ícone passado com o tamanho correto
4. **Flexibilidade:** Aceita override de tamanho e cor via props

---

## 📸 Screenshot de Referência

![Icon Component](figma-screenshot-20-239.png)

Mostra os 6 tamanhos disponíveis em escala crescente:
- 12px (micro)
- 16px (extra small)
- 20px (small)
- 24px (medium) - padrão
- 28px (large)
- 32px (extra large)

---

## 🔄 Integração com Biblioteca de Ícones

O componente Icon **utiliza a biblioteca de 585 ícones** criada em `packages/core/src/icons/`.

### Exemplo de Uso

```typescript
import { Icon, BeerBottleFilled, HeartFilled } from '@ze-delivery/ds-core'

// Uso básico (tamanho médio)
<Icon icon={BeerBottleFilled} />

// Especificando tamanho
<Icon icon={HeartFilled} size="large" />

// Sobrescrevendo cor
<Icon icon={BeerBottleFilled} size="small" color={tokens.color.zeYellow} />
```

---

## 💡 Casos de Uso

### 1. Ícones em Botões
```typescript
<Button>
  <Icon icon={AddCircleFilled} size="small" color="white" />
  Adicionar
</Button>
```

### 2. Ícones em Listas
```typescript
<ListItem>
  <Icon icon={CheckmarkCircleFilled} size="medium" color={tokens.color.green} />
  Item Completo
</ListItem>
```

### 3. Ícones em Cabeçalhos
```typescript
<Header>
  <Icon icon={LocationFilled} size="extraLarge" />
  <Title>Meu Endereço</Title>
</Header>
```

### 4. Ícones em Inputs
```typescript
<Input
  leftIcon={<Icon icon={SearchOutlined} size="small" />}
  placeholder="Buscar..."
/>
```

---

## ⚙️ Considerações Técnicas

### 1. Wrapper vs Ícone Direto

**Quando usar Icon wrapper:**
- Quando precisa garantir tamanhos padronizados
- Em componentes compartilhados
- Para manter consistência de design

**Quando usar ícone diretamente:**
- Quando precisa customização total
- Em casos específicos fora do padrão
- Performance crítica (menos overhead)

### 2. Performance

- O wrapper adiciona mínimo overhead
- Tree-shaking funciona normalmente
- Apenas o ícone usado é incluído no bundle

### 3. Acessibilidade

O wrapper deve:
- Preservar props de acessibilidade do ícone
- Passar `accessibilityLabel` automaticamente
- Suportar `accessibilityRole="img"`

---

## 🚀 Implementação Recomendada

### Abordagem 1: Wrapper Simples (Recomendada)

```typescript
import { styled } from '@tamagui/core'
import { View } from 'react-native'
import { tokens } from '../../../../tokens'

export interface IconProps {
  icon: React.ComponentType<any>
  size?: 'micro' | 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
  color?: string
  [key: string]: any
}

export const Icon = ({ 
  icon: IconComponent, 
  size = 'medium', 
  color = tokens.icon.color.normal,
  ...props 
}: IconProps) => {
  const sizeValue = tokens.icon.size[size]
  
  return (
    <IconComponent 
      size={sizeValue} 
      color={color} 
      {...props} 
    />
  )
}
```

### Abordagem 2: Com Styled Component

```typescript
export const Icon = styled(View, {
  name: 'Icon',
  
  variants: {
    size: {
      micro: { width: tokens.icon.size.micro, height: tokens.icon.size.micro },
      extraSmall: { width: tokens.icon.size.extraSmall, height: tokens.icon.size.extraSmall },
      small: { width: tokens.icon.size.small, height: tokens.icon.size.small },
      medium: { width: tokens.icon.size.medium, height: tokens.icon.size.medium },
      large: { width: tokens.icon.size.large, height: tokens.icon.size.large },
      extraLarge: { width: tokens.icon.size.extraLarge, height: tokens.icon.size.extraLarge },
    },
  },
  
  defaultVariants: {
    size: 'medium',
  },
})
```

---

## 📊 Comparação com Button

| Aspecto         | Button                    | Icon                       |
|-----------------|---------------------------|----------------------------|
| Complexidade    | Alta (múltiplos estados)  | Baixa (wrapper simples)    |
| Variantes       | 5 visual + 5 tamanhos     | 6 tamanhos apenas          |
| Estados         | 5 (normal, hover, etc)    | 1 (normal)                 |
| Dependências    | Standalone                | Biblioteca de 585 ícones   |
| Uso             | Ações do usuário          | Representação visual       |

---

## ✅ Checklist de Implementação

- [ ] Adicionar tokens em `tokens.ts`
- [ ] Criar componente `Icon.tsx`
- [ ] Criar testes unitários
- [ ] Criar Storybook stories
- [ ] Documentar exemplos de uso
- [ ] Integrar com biblioteca de ícones
- [ ] Validar acessibilidade
- [ ] Testar em mobile e web

---

**Observações Finais:**

Este componente é **muito mais simples** que o Button, pois é essencialmente um **wrapper** que padroniza o uso dos 585 ícones já criados. A complexidade está na biblioteca de ícones (já implementada), não no componente wrapper.

**Prioridade:** ALTA - Usado por Button Icon, Dismiss Button, Dropdown Button e outros componentes.

---

**Próximos Passos:**
1. Atualizar `tokens.ts` com seção `icon`
2. Implementar componente `Icon.tsx`
3. Criar stories no Storybook
4. Marcar como concluído em `components_links.md`

