# ListMenu - Especificação Técnica

**Componente:** List Menu  
**Figma Node ID:** 5053:5994 (base)  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5053-5994  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente

### Conceito

**List Menu** é um componente container que agrupa múltiplos `ListMenuItem` e suporta 5 tipos de conteúdo diferentes.

```
ListMenu (Container)
  └─ Múltiplos ListMenuItem com variantes de Content:
       ├─ Content / Text (só texto)
       ├─ Content / Leading (ícone à esquerda + texto)
       ├─ Content / Trailing (texto + ícone à direita)
       ├─ Content / Radio Buttons (lista com seleção única)
       └─ Content / Checkboxes (lista com seleção múltipla)
```

### Variantes de Content

#### 1. Content / Text
**Node ID:** 5169:11600  
Itens de lista apenas com texto, sem ícones.

```tsx
<ListMenu contentType="text">
  <ListMenuItem>Opção 1</ListMenuItem>
  <ListMenuItem>Opção 2</ListMenuItem>
  <ListMenuItem>Opção 3</ListMenuItem>
</ListMenu>
```

#### 2. Content / Leading
**Node ID:** 5176:13846  
Itens de lista com ícone à esquerda.

```tsx
<ListMenu contentType="leading">
  <ListMenuItem leading={<Icon />}>Início</ListMenuItem>
  <ListMenuItem leading={<Icon />}>Configurações</ListMenuItem>
  <ListMenuItem leading={<Icon />}>Ajuda</ListMenuItem>
</ListMenu>
```

#### 3. Content / Trailing
**Node ID:** 5176:13847  
Itens de lista com ícone à direita (geralmente seta).

```tsx
<ListMenu contentType="trailing">
  <ListMenuItem trailing={<ChevronRight />}>Ver detalhes</ListMenuItem>
  <ListMenuItem trailing={<ChevronRight />}>Ver mais</ListMenuItem>
</ListMenu>
```

#### 4. Content / Radio Buttons
**Node ID:** 5757:5118  
Lista com seleção única usando RadioButton.

```tsx
<ListMenu contentType="radio" value={selected} onChange={setSelected}>
  <ListMenuItem value="1">Opção 1</ListMenuItem>
  <ListMenuItem value="2">Opção 2</ListMenuItem>
  <ListMenuItem value="3">Opção 3</ListMenuItem>
</ListMenu>
```

#### 5. Content / Checkboxes
**Node ID:** 5757:5590  
Lista com seleção múltipla usando Checkbox.

```tsx
<ListMenu contentType="checkbox" value={selected} onChange={setSelected}>
  <ListMenuItem value="1">Opção 1</ListMenuItem>
  <ListMenuItem value="2">Opção 2</ListMenuItem>
  <ListMenuItem value="3">Opção 3</ListMenuItem>
</ListMenu>
```

---

## 🎨 Tokens

### Estrutura

O List Menu **não adiciona tokens novos**. Ele usa:
- Tokens do `ListMenuItem` (já implementado)
- Tokens do `RadioButton` (já implementado)
- Tokens do `Checkbox` (já implementado)

### Espaçamento

```typescript
listMenu: {
  gap: 0,
  padding: 0,
}
```

O espaçamento visual vem dos próprios `ListMenuItem`.

---

## 🎯 Componente React

### Props Esperadas

```typescript
interface ListMenuProps {
  /** Tipo de conteúdo da lista */
  contentType?: 'text' | 'leading' | 'trailing' | 'radio' | 'checkbox'
  
  /** Tamanho dos itens (propagado para ListMenuItem) */
  size?: 'small' | 'medium'
  
  /** Itens da lista */
  children: React.ReactNode
  
  /** Valor selecionado (apenas para radio/checkbox) */
  value?: string | string[]
  
  /** Callback quando valor muda (apenas para radio/checkbox) */
  onChange?: (value: string | string[]) => void
  
  /** Nome do grupo (apenas para radio) */
  name?: string
  
  /** Label de acessibilidade */
  accessibilityLabel?: string
  
  /** ID para testes */
  testID?: string
}
```

### Comportamento por Content Type

#### Text
- Renderiza ListMenuItem simples
- Sem ícones

#### Leading
- Renderiza ListMenuItem com leading
- Adiciona ícone à esquerda automaticamente (ou via prop)

#### Trailing  
- Renderiza ListMenuItem com trailing
- Adiciona seta à direita automaticamente

#### Radio
- Renderiza ListMenuItem com RadioButton integrado
- Seleção única
- Gerencia estado via `value` e `onChange`

#### Checkbox
- Renderiza ListMenuItem com Checkbox integrado
- Seleção múltipla
- Gerencia estado via `value` (array) e `onChange`

---

## 📝 Notas de Implementação

1. **Container Simples:**
   - List Menu é principalmente um container
   - Não adiciona estilos complexos
   - Usa `flex-direction: column` para empilhar itens

2. **Delegação:**
   - Delega renderização para `ListMenuItem`
   - Injeta componentes (Radio/Checkbox) quando necessário
   - Propaga props comuns (size, disabled, etc)

3. **Gerenciamento de Estado:**
   - Para `radio`: valor único (string)
   - Para `checkbox`: array de valores (string[])
   - Parent component controla o estado

4. **Acessibilidade:**
   - `role="menu"` ou `role="list"`
   - `role="menuitem"` nos itens
   - Navegação via teclado (setas, Enter, Space)

5. **Casos de Uso:**
   - Menus de navegação (leading/trailing)
   - Listas de configurações (checkboxes)
   - Seleção de opções (radio)
   - Dropdowns
   - Action sheets

6. **Composição:**
   - Pode ser usado com qualquer Children que seja ListMenuItem
   - Flexível para customização

---

## 🔗 Dependências

- ✅ **ListMenuItem** (base individual)
- ✅ **RadioButton** (para content type radio)
- ✅ **Checkbox** (para content type checkbox)
- ✅ **Icon** (para leading/trailing)

---

## 🎯 Exemplos de Uso

### Menu de Navegação (Leading + Trailing)
```tsx
<ListMenu size="medium">
  <ListMenuItem 
    leading={<HomeOutlined />}
    trailing={<ChevronOutlinedRight />}
    onPress={() => navigate('home')}
  >
    Início
  </ListMenuItem>
  <ListMenuItem 
    leading={<SettingsOutlined />}
    trailing={<ChevronOutlinedRight />}
    onPress={() => navigate('settings')}
  >
    Configurações
  </ListMenuItem>
</ListMenu>
```

### Lista com Seleção Única (Radio)
```tsx
<ListMenu 
  contentType="radio"
  value={paymentMethod}
  onChange={setPaymentMethod}
  name="payment"
>
  <ListMenuItem value="credit">Cartão de Crédito</ListMenuItem>
  <ListMenuItem value="debit">Cartão de Débito</ListMenuItem>
  <ListMenuItem value="pix">PIX</ListMenuItem>
</ListMenu>
```

### Lista com Seleção Múltipla (Checkbox)
```tsx
<ListMenu 
  contentType="checkbox"
  value={selectedOptions}
  onChange={setSelectedOptions}
>
  <ListMenuItem value="notifications">Notificações</ListMenuItem>
  <ListMenuItem value="email">Email</ListMenuItem>
  <ListMenuItem value="sms">SMS</ListMenuItem>
</ListMenu>
```

---

**Container de lista com 5 variantes de Content! 📋**


