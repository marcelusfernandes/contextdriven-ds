# Guia: Code Connect do Figma

**Última atualização:** 23/10/2025  
**Versão:** 1.0

## 📖 O que é Code Connect?

Code Connect é uma funcionalidade do Figma que conecta componentes do Figma diretamente ao código real do seu Design System. Com isso:

- ✅ Designers veem código real no Figma Dev Mode
- ✅ Props do Figma são mapeadas para props do código
- ✅ Exemplos de uso aparecem diretamente no Figma
- ✅ Sincronização automática entre design e código

## 🎯 Como Funciona

1. Você cria arquivos `.figma.tsx` ou usa anotações inline
2. Mapeia propriedades do Figma para props do React
3. Publica a conexão usando a CLI do Figma
4. Designers veem o código correto no Dev Mode do Figma

## 📦 Instalação

Já instalado! Pacote `@figma/code-connect` foi adicionado ao projeto.

## 🔧 Configuração Inicial

### 1. Autenticar com Figma

Primeiro, você precisa fazer login:

```bash
npx figma connect
```

Isso abrirá o navegador para você autorizar a CLI.

### 2. Estrutura de Arquivo

Existem duas formas de usar Code Connect:

#### Opção A: Arquivo Separado (`.figma.tsx`)

Crie um arquivo ao lado do componente:

```
components/
  Button/
    Button.tsx           # Componente
    Button.stories.tsx   # Stories
    Button.figma.tsx     # ← Code Connect (NOVO)
    index.ts
    README.md
```

#### Opção B: Inline no Componente

Adicione anotações diretamente no arquivo `.tsx` do componente.

**👍 Recomendação:** Usar arquivo separado para manter organização.

## 🎨 Exemplo Completo: Button

### Passo 1: Descobrir o Node ID do Figma

No Figma, abra o arquivo do Design System:
1. Selecione o componente Button
2. Copie o link (botão direito → Copy Link to Selection)
3. O link será algo como: `https://www.figma.com/design/FILE_ID/...?node-id=123-456`
4. O Node ID é: `123:456` (substitua `-` por `:`)

### Passo 2: Criar `Button.figma.tsx`

```typescript
import { figma } from '@figma/code-connect'
import { Button } from './Button'

/**
 * Code Connect para Button
 * -- https://www.figma.com/design/FILE_ID?node-id=NODE_ID
 */
figma.connect(
  Button,
  'https://www.figma.com/design/FILE_ID?node-id=NODE_ID',
  {
    props: {
      // Mapear variantes do Figma para props
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
        Destructive: 'destructive',
      }),
      
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      
      // Mapear boolean props
      disabled: figma.boolean('Disabled'),
      loading: figma.boolean('Loading'),
      
      // Mapear conteúdo de texto
      children: figma.textContent('Label'),
      
      // Mapear ícones (se houver)
      iconLeft: figma.instance('Icon Left'),
      iconRight: figma.instance('Icon Right'),
    },
    
    // Template de código que aparece no Figma
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        loading={props.loading}
      >
        {props.iconLeft}
        {props.children}
        {props.iconRight}
      </Button>
    ),
    
    // Exemplos adicionais (opcional)
    examples: [
      {
        name: 'Com Ícone',
        example: (props) => (
          <Button variant={props.variant} iconLeft={<Icon name="add" />}>
            {props.children}
          </Button>
        ),
      },
      {
        name: 'Loading',
        example: () => (
          <Button loading>
            Salvando...
          </Button>
        ),
      },
    ],
  }
)
```

### Passo 3: Ajustar para Seus Dados

**Você precisa descobrir:**

1. **FILE_ID**: Na URL do Figma
   - URL: `https://www.figma.com/design/abc123xyz...`
   - FILE_ID: `abc123xyz`

2. **NODE_ID**: Do componente Button
   - Selecione o Button no Figma
   - Copy Link to Selection
   - Extraia o `node-id=123-456` → converta para `123:456`

3. **Nomes das Propriedades**: No Figma, veja os nomes exatos das variants
   - Ex: "Variant" (não "variant" ou "Type")
   - Ex: "Size" (não "size")
   - Ex: "Disabled" (não "disabled")

## 🔍 Tipos de Mapeamento

### `figma.enum()`

Mapeia variants do Figma:

```typescript
variant: figma.enum('Property Name', {
  'Figma Value': 'code-value',
  'Primary': 'primary',
  'Secondary': 'secondary',
})
```

### `figma.boolean()`

Mapeia propriedades boolean:

```typescript
disabled: figma.boolean('Disabled')
```

### `figma.textContent()`

Mapeia texto de layers:

```typescript
children: figma.textContent('Label')
```

### `figma.instance()`

Mapeia instances de outros componentes:

```typescript
icon: figma.instance('Icon Swap')
```

### `figma.children()`

Mapeia children complexos:

```typescript
children: figma.children('*')
```

## 🚀 Publicar Code Connect

### 1. Publicar pela primeira vez

```bash
npx figma connect publish
```

Isso irá:
- Analisar todos os arquivos `.figma.tsx`
- Enviar as conexões para o Figma
- Disponibilizar no Dev Mode

### 2. Verificar antes de publicar

```bash
npx figma connect publish --dry-run
```

### 3. Publicar componente específico

```bash
npx figma connect publish components/Button/Button.figma.tsx
```

## 📋 Workflow Recomendado

### Para Button (Exemplo Completo)

1. **Preparar informações:**
   ```bash
   # Abra o Button no Figma
   # Copie o link
   # Anote os nomes das properties
   ```

2. **Criar arquivo:**
   ```bash
   touch components/Button/Button.figma.tsx
   ```

3. **Implementar mapeamento:**
   - Use o template acima
   - Substitua FILE_ID e NODE_ID
   - Ajuste nomes das properties
   - Teste os exemplos

4. **Publicar:**
   ```bash
   npx figma connect publish
   ```

5. **Verificar no Figma:**
   - Abra o Figma Dev Mode
   - Selecione o Button
   - Veja o código gerado

## 🎯 Exemplo Completo Real

Aqui está como ficaria para o Button do seu Design System:

```typescript
// components/Button/Button.figma.tsx
import { figma } from '@figma/code-connect'
import { Button } from './Button'

/**
 * Code Connect para Button do Design System Zé Delivery
 * Figma: [Cole aqui a URL do seu componente]
 */
figma.connect(
  Button,
  'https://www.figma.com/design/SEU_FILE_ID?node-id=SEU_NODE_ID',
  {
    props: {
      // Variantes visuais
      variant: figma.enum('Variant', {
        'Primary': 'primary',
        'Secondary': 'secondary',
        'Ghost': 'ghost',
        'Destructive': 'destructive',
      }),
      
      // Tamanhos
      size: figma.enum('Size', {
        'Small': 'small',
        'Medium': 'medium',
        'Large': 'large',
      }),
      
      // Estados
      disabled: figma.boolean('Disabled'),
      loading: figma.boolean('Loading'),
      
      // Conteúdo
      children: figma.textContent('Label'),
    },
    
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        loading={props.loading}
      >
        {props.children}
      </Button>
    ),
  }
)
```

## 📝 Checklist de Implementação

### Antes de Começar
- [ ] `@figma/code-connect` instalado
- [ ] Autenticado com `npx figma connect`
- [ ] FILE_ID copiado do Figma
- [ ] NODE_ID do componente Button copiado
- [ ] Nomes exatos das properties anotados

### Implementação
- [ ] Arquivo `Button.figma.tsx` criado
- [ ] FILE_ID substituído
- [ ] NODE_ID substituído
- [ ] Todos os props mapeados corretamente
- [ ] Example funcional
- [ ] Imports corretos

### Publicação
- [ ] Teste com `--dry-run`
- [ ] Publique com `npx figma connect publish`
- [ ] Verifique no Figma Dev Mode
- [ ] Teste alterando variants no Figma

## 🔄 Atualizar Code Connect

Quando o componente mudar:

```bash
# 1. Atualize o arquivo .figma.tsx
# 2. Publique novamente
npx figma connect publish

# Ou para componente específico
npx figma connect publish components/Button/Button.figma.tsx
```

## 🚨 Troubleshooting

### "Component not found"
- Verifique se o NODE_ID está correto
- Formato deve ser `123:456` (com `:`)
- Certifique-se que o componente existe no Figma

### "Property not found"
- Nomes de properties são case-sensitive
- Verifique os nomes exatos no Figma
- Ex: "Variant" ≠ "variant"

### "Failed to authenticate"
```bash
# Re-autentique
npx figma connect
```

### "Changes not appearing"
- Recarregue o Figma
- Pode levar alguns segundos para sincronizar
- Verifique se publicou com sucesso

## 📚 Próximos Passos

1. **Configurar Button primeiro** - Use como teste
2. **Replicar para outros componentes:**
   - Checkbox
   - RadioButton
   - InputField
   - Tag
   - etc.

3. **Documentar no README:**
   - Adicione seção "Code Connect" no README.md do componente
   - Link para este guia
   - Instruções específicas do componente

## 🔗 Recursos Úteis

- [Documentação Oficial do Code Connect](https://www.figma.com/developers/code-connect)
- [Exemplos no GitHub](https://github.com/figma/code-connect)
- [Tutoriais em Vídeo](https://www.figma.com/developers)

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Consulte este guia
2. Verifique a documentação oficial
3. Teste com Button primeiro (componente mais simples)

---

**Dica:** Comece com Button (mais simples) antes de partir para componentes complexos como ListMenu ou DropdownButton.

