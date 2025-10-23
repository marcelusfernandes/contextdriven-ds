# 🚨 INCIDENTE DE SEGURANÇA - Token Figma Exposto

**Data:** 23/10/2025  
**Severidade:** 🔴 **CRÍTICA**  
**Status:** ⚠️ **AÇÃO IMEDIATA NECESSÁRIA**

---

## 📋 Resumo

O token de acesso do Figma (`FIGMA_ACCESS_TOKEN`) foi **acidentalmente commitado** no arquivo `.env` e **publicado no GitHub**.

**Token exposto:**
```
figd_HM8_XQumW5xMZmPGb6fNs_iLsDXFWi-6qXU_8giW
```

**Commits afetados:**
- `619909a` - "feat: integrate Figma Code Connect for Button component"
- Arquivo: `.env`

---

## ⚡ AÇÕES IMEDIATAS (FAÇA AGORA!)

### 1️⃣ REVOGAR TOKEN NO FIGMA 🔴

**FAÇA ISSO PRIMEIRO, ANTES DE QUALQUER OUTRA COISA!**

1. Abra o Figma
2. Vá para: **Settings → Account → Personal Access Tokens**
3. Encontre o token que começa com `figd_HM8_...`
4. Clique em **Delete/Revoke**
5. Confirme a revogação

✅ **Token revogado?** → Continue para o passo 2

---

### 2️⃣ LIMPAR O ARQUIVO .ENV DO HISTÓRICO

Agora que o token foi revogado, vamos remover o arquivo do Git:

```bash
# Execute o script de limpeza
./cleanup-security.sh
```

Ou manualmente:

```bash
# 1. Remover do repositório local
git rm --cached .env
rm -f .env

# 2. Remover do histórico Git
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env' \
  --prune-empty --tag-name-filter cat -- --all

# 3. Commit das mudanças do .gitignore
git add .gitignore
git commit -m "security: remove exposed .env and add to gitignore"

# 4. Force push para reescrever o histórico
git push origin --force --all
git push origin --force --tags
```

⚠️ **AVISO:** Force push reescreve o histórico. Avise outros colaboradores!

---

### 3️⃣ CRIAR NOVO TOKEN DO FIGMA

Agora que limpamos tudo:

1. Vá para: **Figma → Settings → Account → Personal Access Tokens**
2. Clique em **Generate new token**
3. Nome: `Code Connect - Local Dev`
4. Escopo: Selecione as permissões necessárias
5. Clique em **Generate token**
6. **COPIE o token** (você só verá uma vez!)

---

### 4️⃣ CONFIGURAR LOCALMENTE (SEM COMMITAR!)

```bash
# Criar arquivo .env LOCAL (já está no .gitignore)
echo 'FIGMA_ACCESS_TOKEN="seu-novo-token-aqui"' > .env

# Verificar que NÃO está sendo trackeado
git status

# Deve mostrar:
# ".env" não deve aparecer!
```

---

## ✅ CHECKLIST DE SEGURANÇA

Marque conforme completar:

- [ ] ✅ Token antigo REVOGADO no Figma
- [ ] 🧹 Arquivo `.env` removido localmente
- [ ] 🔥 Histórico Git limpo (filter-branch executado)
- [ ] 📝 `.gitignore` atualizado com `.env`
- [ ] 🚀 Force push realizado
- [ ] 🔑 Novo token gerado no Figma
- [ ] 💻 Novo token configurado localmente em `.env`
- [ ] 🔒 `.env` NÃO aparece no `git status`
- [ ] ✅ Code Connect funcionando com novo token

---

## 🛡️ PREVENÇÃO FUTURA

### 1. SEMPRE use .env para credenciais

```bash
# ✅ BOM: .env (gitignored)
FIGMA_ACCESS_TOKEN="seu-token"

# ❌ RUIM: hardcode no código
const token = "figd_..."
```

### 2. Verifique .gitignore ANTES de commitar

```bash
# Adicione ao .gitignore:
.env
.env.*
!.env.example
*.key
*.secret
*token*
```

### 3. Use pre-commit hooks

```bash
# Instale git-secrets ou gitleaks
brew install gitleaks

# Configure para detectar tokens
gitleaks protect --staged
```

### 4. NUNCA commite:
- ❌ Tokens de API
- ❌ Senhas
- ❌ Chaves privadas
- ❌ Certificados
- ❌ Arquivos `.env`

---

## 📊 IMPACTO DO INCIDENTE

**Exposição:**
- ✅ Token exposto publicamente no GitHub
- ✅ Qualquer pessoa poderia acessar sua conta Figma
- ✅ Possível leitura/modificação de arquivos
- ✅ Possível exportação de assets

**Mitigação:**
- ✅ Token revogado → acesso bloqueado
- ✅ Histórico limpo → token não mais visível
- ✅ Novo token gerado → acesso restaurado
- ✅ `.gitignore` atualizado → prevenção futura

---

## 🔗 Recursos

- [Figma API Tokens](https://www.figma.com/developers/api#access-tokens)
- [Git Filter-Branch](https://git-scm.com/docs/git-filter-branch)
- [GitHub: Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) (alternativa ao filter-branch)

---

## ✅ FINALIZAÇÃO

Após completar TODOS os passos acima:

1. ✅ Teste o Code Connect com o novo token
2. ✅ Verifique que `.env` não está no repositório: `git ls-files | grep .env`
3. ✅ Confirme no GitHub que o arquivo sumiu do histórico
4. ✅ Delete este arquivo (SECURITY_INCIDENT.md) após resolver
5. ✅ Delete o script (cleanup-security.sh) após usar

---

**IMPORTANTE:** Mantenha este documento até resolver completamente o incidente!

