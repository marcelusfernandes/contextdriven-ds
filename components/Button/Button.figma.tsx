import { figma } from '@figma/code-connect'
import { Button } from './Button'

/**
 * Code Connect para Button do Design System
 * 
 * IMPORTANTE: Substitua os valores abaixo pelos valores reais do seu Figma:
 * 1. FILE_ID: ID do arquivo no Figma
 * 2. NODE_ID: ID do componente Button no Figma (formato: 123:456)
 * 
 * Para descobrir esses valores:
 * 1. Abra o componente Button no Figma
 * 2. Botão direito → Copy Link to Selection
 * 3. URL será: https://www.figma.com/design/FILE_ID?node-id=123-456
 * 4. Substitua os valores abaixo (node-id use 123:456 com : ao invés de -)
 */

figma.connect(
  Button,
  'https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Z%C3%A9-Delivery---App-Components?node-id=3840-18250&component-browser=1&component-key=466be9204474cb987366d50653126e0ca09a6448&component-browser-scope=page_or_selection&m=dev',
  {
    source: 'https://github.com/marcelusfernandes/contextdriven-ds/blob/main/components/Button/Button.tsx',
    props: {
      /**
       * Mapeia a propriedade "Hierarchy" do Figma para a prop "variant" do código
       * 
       * No Figma: Hierarchy (Primary, Secondary, Tertiary, Destructive)
       * No código: variant (primary, secondary, ghost, destructive)
       * 
       * Nota: "Ghost" no código corresponde a "Tertiary" no Figma
       */
      variant: figma.enum('Hierarchy', {
        'Primary': 'primary',
        'Secondary': 'secondary',
        'Tertiary': 'ghost',
        'Destructive': 'destructive',
      }),
      
      /**
       * Mapeia a propriedade "Size" do Figma para a prop "size" do código
       * 
       * No Figma: Size (Medium, Small)
       * No código: size (medium, small)
       */
      size: figma.enum('Size', {
        'Small': 'small',
        'Medium': 'medium',
      }),
      
      /**
       * Mapeia o conteúdo do texto do botão
       * "Label" é o nome da camada de texto no Figma
       */
      children: figma.textContent('Label'),
      
      /**
       * IMPORTANTE: State (Normal, Hover, Focus, Active, Disabled, Loading) 
       * não é mapeado como prop porque são estados visuais do Figma,
       * não propriedades de configuração do componente.
       * 
       * No código:
       * - disabled (boolean prop)
       * - loading (boolean prop)
       * - hover/focus/active (estados CSS gerenciados automaticamente)
       * 
       * No Figma esses estados são apenas para visualização do designer.
       */
      
      /**
       * Se o Button tiver ícones opcionais no Figma, mapeie aqui:
       */
      // iconLeft: figma.instance('Icon Left'),
      // iconRight: figma.instance('Icon Right'),
    },
    
    /**
     * Template de código que aparece no Figma Dev Mode
     * Este é o código que os designers verão quando inspecionarem o componente
     * 
     * Props não incluídas aqui mas disponíveis no código:
     * - disabled: boolean
     * - loading: boolean
     * - fullWidth: boolean
     * - onPress: () => void
     */
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        onPress={() => console.log('Clicked!')}
      >
        {props.children}
      </Button>
    ),
    
    /**
     * Exemplos adicionais para casos de uso comuns
     * Estes aparecem como tabs no Figma Dev Mode
     */
    examples: [
      {
        name: 'Primary (CTA)',
        example: () => (
          <Button 
            variant="primary" 
            size="medium"
            onPress={() => console.log('Comprar')}
          >
            Comprar agora
          </Button>
        ),
      },
      {
        name: 'Secondary',
        example: () => (
          <Button 
            variant="secondary" 
            size="medium"
            onPress={() => console.log('Ver mais')}
          >
            Ver mais detalhes
          </Button>
        ),
      },
      {
        name: 'Tertiary (Ghost)',
        example: () => (
          <Button 
            variant="ghost" 
            size="medium"
            onPress={() => console.log('Cancelar')}
          >
            Cancelar
          </Button>
        ),
      },
      {
        name: 'Destructive',
        example: () => (
          <Button 
            variant="destructive" 
            size="medium"
            onPress={() => console.log('Deletar')}
          >
            Deletar conta
          </Button>
        ),
      },
      {
        name: 'Com Loading',
        example: () => (
          <Button 
            variant="primary" 
            size="medium"
            loading
          >
            Processando...
          </Button>
        ),
      },
      {
        name: 'Disabled',
        example: () => (
          <Button 
            variant="primary" 
            size="medium"
            disabled
          >
            Não disponível
          </Button>
        ),
      },
      {
        name: 'Small Size',
        example: () => (
          <Button 
            variant="primary" 
            size="small"
            onPress={() => console.log('Small')}
          >
            Botão pequeno
          </Button>
        ),
      },
      {
        name: 'Full Width',
        example: () => (
          <Button 
            variant="primary" 
            size="medium"
            fullWidth
            onPress={() => console.log('Full width')}
          >
            Largura total
          </Button>
        ),
      },
    ],
  }
)

/**
 * ✅ CONFIGURAÇÃO COMPLETA!
 * 
 * Este arquivo já está configurado com:
 * - ✅ URL do Figma conectada
 * - ✅ Propriedades mapeadas corretamente:
 *   - Hierarchy (Figma) → variant (código)
 *   - Size (Figma) → size (código)
 *   - Label (Figma) → children (código)
 * - ✅ 8 exemplos de uso
 * 
 * PRÓXIMOS PASSOS:
 * 
 * 1. Autentique (apenas primeira vez):
 *    yarn figma:auth
 * 
 * 2. Teste antes de publicar:
 *    yarn figma:publish:dry
 * 
 * 3. Publique para o Figma:
 *    yarn figma:publish:button
 * 
 * 4. Verifique no Figma:
 *    - Abra o Figma Dev Mode (tecla D)
 *    - Selecione o componente Button
 *    - Você verá o código conectado com os exemplos! 🎉
 * 
 * NOTAS IMPORTANTES:
 * - "State" (Normal, Hover, Focus, etc) não é mapeado porque são estados
 *   visuais do Figma para designers, não props configuráveis
 * - Props como disabled, loading, fullWidth estão disponíveis no código
 *   mas não são configuráveis no Figma (são decisões de implementação)
 */

