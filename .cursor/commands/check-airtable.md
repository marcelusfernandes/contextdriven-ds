Execute um curl no airtable na tabela informada pelo usuário para verificar as colunas/type field/informações retornadas e como devem ser enviadas e compare com a documentação equivalente em `_context/airtable-mapping`

## Arquivos de Referência em _context/airtable-mapping

Para comparar com os dados retornados pelo Airtable, consulte os seguintes arquivos de mapeamento:

### Tabelas Principais
- `areas-tabelas.md` - Tabela AREAS (tblNetSbZtbeEYRw7)
- `processos-tabelas.md` - Tabela PROCESSOS (tblProcessos)
- `tarefas-tabelas.md` - Tabela TAREFAS (tblTarefas)

### Tabelas Secundárias
- `diretoria-tabelas.md` - Tabela DIRETORIA (tblkDSmRVaoOjxNaI)
- `reunioes-tabelas.md` - Tabela REUNIOES (tblReunioesID)
- `rotina-tabelas.md` - Tabela ROTINA (tblRotinaID)
- `processos-decisorios-tabelas.md` - Tabela PROCESSOS_DECISORIOS (tblProcessosDecisID)
- `reports-tabelas.md` - Tabela REPORTS (tblReportsID)

### Como Usar
1. Execute o curl no Airtable para a tabela desejada
2. Compare os field IDs, tipos e estruturas retornadas
3. Verifique se a documentação está atualizada
4. Identifique discrepâncias entre API e documentação
5. Responda as diferenças existentes

