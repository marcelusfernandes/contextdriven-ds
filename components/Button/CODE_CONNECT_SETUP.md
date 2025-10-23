# Setup do Code Connect - Button

## ⚡️ Guia Rápido

### 1️⃣ Descobrir as Informações do Figma

No Figma:
1. Abra o arquivo do Design System
2. Selecione o componente **Button**
3. Botão direito → **Copy Link to Selection**
4. A URL será algo como:
   ```
   https://www.figma.com/design/abc123xyz?node-id=123-456
   ```

Extraia:
- **FILE_ID**: `abc123xyz` (parte do design/...)
- **NODE_ID**: `123:456` (converta o `-` para `:`)

### 2️⃣ Atualizar Button.figma.tsx

Abra `Button.figma.tsx` e substitua:

```typescript
// Linha 26 - Substitua pela sua URL real
figma.connect(
  Button,
  'https://www.figma.com/design/SEU_FILE_ID?node-id=SEU_NODE_ID',  // ← Atualize aqui
  {
    props: {
      // ...
    }
  }
)
```

### 3️⃣ Verificar Nomes das Propriedades

No Figma, com o Button selecionado:
1. Olhe o painel de propriedades (direita)
2. Anote os **nomes EXATOS** (case-sensitive):
   - Variant → Ex: "Variant" ou "Type"?
   - Size → Ex: "Size" ou "Tamanho"?
   - Disabled → Ex: "Disabled" ou "disabled"?

Se os nomes forem diferentes, atualize em `Button.figma.tsx`:

```typescript
props: {
  variant: figma.enum('Variant', {  // ← Nome deve bater com o Figma
    // ...
  }),
  size: figma.enum('Size', {  // ← Nome deve bater com o Figma
    // ...
  }),
}
```

### 4️⃣ Autenticar (Primeira Vez)

```bash
yarn figma:auth
```

Isso abrirá o navegador para você autorizar. Precisa fazer apenas uma vez.

### 5️⃣ Testar Antes de Publicar

```bash
yarn figma:publish:dry
```

Isso simula a publicação e mostra se há erros.

### 6️⃣ Publicar para o Figma

```bash
yarn figma:publish:button
```

Ou publique todos os componentes:
```bash
yarn figma:publish
```

### 7️⃣ Verificar no Figma

1. Abra o Figma
2. Entre no **Dev Mode** (tecla D ou botão no topo direito)
3. Selecione o componente Button
4. Na aba **Code**, você verá o código conectado! 🎉

## 🐛 Se Algo Der Errado

### Erro: "Component not found"
- Verifique se o NODE_ID está correto
- Formato deve ser `123:456` (com `:` não `-`)

### Erro: "Property not found"
- Nomes são case-sensitive
- Verifique os nomes EXATOS no Figma
- `Variant` ≠ `variant`

### Erro: "Failed to authenticate"
```bash
yarn figma:auth  # Re-autentique
```

### Mudanças não aparecem
- Recarregue o Figma
- Pode levar alguns segundos
- Verifique se a publicação teve sucesso

## 📚 Documentação Completa

Para informações detalhadas, veja:
- **Guia Completo:** [`_context/support-docs/CODE_CONNECT_GUIA.md`](../../_context/support-docs/CODE_CONNECT_GUIA.md)
- **Docs Oficiais:** https://www.figma.com/developers/code-connect

## 🔄 Próximos Componentes

Após configurar o Button, replique para:
- Checkbox
- RadioButton  
- InputField
- Tag
- ListMenu
- etc.

O processo é o mesmo, apenas mude:
1. URL do Figma
2. NODE_ID
3. Props específicas do componente

