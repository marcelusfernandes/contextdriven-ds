#!/bin/bash

# Script para remover .env do histórico do Git
# IMPORTANTE: Execute APENAS DEPOIS de revogar o token no Figma!

echo "🚨 ATENÇÃO: Removendo .env do histórico do Git"
echo ""
echo "⚠️  Você JÁ REVOGOU o token no Figma? (s/n)"
read -r resposta

if [ "$resposta" != "s" ]; then
    echo "❌ PRIMEIRO revogue o token no Figma:"
    echo "   1. Abra Figma → Settings → Account → Personal Access Tokens"
    echo "   2. Delete/Revoke o token exposto"
    echo "   3. Execute este script novamente"
    exit 1
fi

echo ""
echo "🧹 Removendo .env do repositório local..."
git rm --cached .env 2>/dev/null || true
rm -f .env

echo ""
echo "🔥 Removendo .env do histórico Git..."
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env' \
  --prune-empty --tag-name-filter cat -- --all

echo ""
echo "✅ Limpeza concluída!"
echo ""
echo "📝 PRÓXIMOS PASSOS OBRIGATÓRIOS:"
echo "   1. git add .gitignore"
echo "   2. git commit -m 'security: remove exposed .env and add to gitignore'"
echo "   3. git push origin --force --all"
echo "   4. git push origin --force --tags"
echo ""
echo "⚠️  AVISO: Force push irá reescrever o histórico!"
echo "   Certifique-se que ninguém mais está usando este repositório agora."

