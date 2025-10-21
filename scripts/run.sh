#!/bin/bash
# Script auxiliar para executar os scripts Python de normalização e geração de ícones

set -e  # Para em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir cabeçalhos
print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Função para imprimir sucesso
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Função para imprimir erro
print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Função para imprimir warning
print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Verifica se Python está instalado
check_python() {
    if ! command -v python3 &> /dev/null; then
        print_error "Python 3 não encontrado!"
        echo "Por favor, instale Python 3.10 ou superior."
        exit 1
    fi
    
    PYTHON_VERSION=$(python3 --version | cut -d' ' -f2)
    print_success "Python $PYTHON_VERSION encontrado"
}

# Função de ajuda
show_help() {
    echo "Uso: ./run.sh [comando] [opções]"
    echo ""
    echo "Comandos:"
    echo "  test              - Executa testes dos scripts"
    echo "  normalize         - Apenas normaliza os SVGs"
    echo "  generate          - Apenas gera componentes (assume SVGs já normalizados)"
    echo "  full              - Executa normalização + geração (padrão)"
    echo "  full-preserve     - Executa processo completo preservando originais"
    echo "  clean             - Remove arquivos gerados"
    echo "  help              - Mostra esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  ./run.sh test"
    echo "  ./run.sh full"
    echo "  ./run.sh normalize"
    echo "  ./run.sh full-preserve"
}

# Função para executar testes
run_tests() {
    print_header "Executando Testes"
    python3 scripts/test_scripts.py
}

# Função para normalizar apenas
run_normalize() {
    print_header "Normalizando SVGs"
    python3 scripts/clean_and_generate_icons.py --normalize-only
    print_success "Normalização concluída!"
}

# Função para gerar componentes apenas
run_generate() {
    print_header "Gerando Componentes"
    python3 scripts/clean_and_generate_icons.py --generate-only
    print_success "Componentes gerados!"
}

# Função para executar processo completo
run_full() {
    print_header "Processo Completo: Normalizar + Gerar"
    python3 scripts/clean_and_generate_icons.py
    print_success "Processo completo concluído!"
}

# Função para executar processo completo preservando originais
run_full_preserve() {
    print_header "Processo Completo (Preservando Originais)"
    python3 scripts/clean_and_generate_icons.py --preserve-originals
    print_success "Processo completo concluído!"
}

# Função para limpar arquivos gerados
run_clean() {
    print_header "Limpando Arquivos Gerados"
    
    # Remove componentes gerados
    if [ -d "components/icons" ]; then
        print_warning "Removendo components/icons/"
        rm -rf components/icons
    fi
    
    # Remove relatórios
    if [ -f "svg_clean_report.txt" ]; then
        print_warning "Removendo svg_clean_report.txt"
        rm svg_clean_report.txt
    fi
    
    if [ -f "missing_viewbox.txt" ]; then
        print_warning "Removendo missing_viewbox.txt"
        rm missing_viewbox.txt
    fi
    
    # Remove logs
    if [ -d "logs" ]; then
        print_warning "Removendo logs/"
        rm -rf logs
    fi
    
    # Remove SVGs limpos se existirem
    if [ -d "assets/icons/cleaned" ]; then
        print_warning "Removendo assets/icons/cleaned/"
        rm -rf assets/icons/cleaned
    fi
    
    print_success "Limpeza concluída!"
}

# Verifica Python antes de executar qualquer comando
check_python

# Processa comando
case "${1:-full}" in
    test)
        run_tests
        ;;
    normalize)
        run_normalize
        ;;
    generate)
        run_generate
        ;;
    full)
        run_full
        ;;
    full-preserve)
        run_full_preserve
        ;;
    clean)
        run_clean
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Comando desconhecido: $1"
        echo ""
        show_help
        exit 1
        ;;
esac

