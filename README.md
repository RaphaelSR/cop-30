# COP30 Belém Hub 🌱

Uma plataforma digital web-first que conecta turistas, moradores e guias locais em Belém durante a COP30. Focada em hospedagens alternativas, experiências autênticas e impacto social positivo.

## ✨ Características

- 🌐 **Sistema de Internacionalização** (Português/Inglês)
- 🎨 **Dark/Light Mode** com persistência
- 📱 **Totalmente Responsivo** (Mobile-first)
- 🧩 **Biblioteca de Componentes** reutilizáveis
- ⚡ **Performance Otimizada** com Vite
- 🎯 **TypeScript** para type safety

## 🚀 Tecnologias

- **Frontend**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API + Custom Hooks
- **Monorepo**: PNPM Workspaces
- **UI Components**: Pacote compartilhado customizado
- **Build**: Vite com otimizações de produção

## 📦 Estrutura do Projeto

```
cop-30/
├── apps/web/           # Aplicação web principal
├── packages/ui/        # Componentes UI compartilhados
├── package.json        # Configuração do monorepo
└── pnpm-workspace.yaml # Configuração do PNPM
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- PNPM 8+

### Comandos

```bash
# Instalar dependências
pnpm install

# Compilar pacote UI
pnpm --filter ui build

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Linting
pnpm lint

# Limpar builds
pnpm clean
```

## 🌟 Funcionalidades Implementadas

### ✅ Sprint 1 - Concluído
- [x] Configuração do monorepo com PNPM
- [x] Projeto base Vite + React + TypeScript
- [x] Configuração Tailwind CSS com cores personalizadas
- [x] Pacote UI compartilhado com componentes:
  - `GSImageCard`: Cards com imagem de fundo
  - `GSSectionHeader`: Títulos e subtítulos
  - `GSTag`: Badges coloridos
  - `GSBottomSheet`: Modal bottom sheet
- [x] Página inicial (Landing Page)
- [x] Página de hospedagens (/stay) com:
  - Busca por bairro
  - Grid responsivo de 3 cards mock
  - Dados mockados de hospedagens
- [x] Sistema de roteamento completo
- [x] Header com navegação desktop e mobile
- [x] Páginas placeholder para todas as rotas

### 🏠 Hospedagens Mock
1. **Casa do Comércio** - Centro histórico
2. **Loft Cidade Velha** - Patrimônio histórico
3. **Cabana Ilha do Combu** - Experiência rural

## 🎨 Design System

### Cores Personalizadas
```css
--cop-green: #10B981      /* Verde principal */
--cop-purple: #8B5CF6     /* Roxo secundário */
```

### Componentes UI
- Layout responsivo mobile-first
- Sistema de tokens de design
- Componentes reutilizáveis
- Accessibility considerations

## 🗺️ Rotas Disponíveis

- `/` - Página inicial
- `/stay` - Hospedagens alternativas
- `/guides` - Guias e tradutores (em construção)
- `/events` - Agenda de eventos (em construção)
- `/explore` - Explorar Belém (em construção)

## 🚧 Próximos Passos

### Sprint 2
- [ ] Modal de detalhes de hospedagem
- [ ] Formulário /stay/new para anfitriões
- [ ] Página de guias com perfis
- [ ] Sistema de filtros avançados

### Sprint 3
- [ ] Agenda de eventos interativa
- [ ] Mapa de exploração
- [ ] Sistema de reviews
- [ ] Integração com APIs externas

### Futuro
- [ ] App mobile com Expo
- [ ] Backend com autenticação
- [ ] Sistema de mensagens
- [ ] Pagamentos (sem intermediação)

## 🤝 Contribuindo

1. Clone o repositório
2. Instale as dependências: `pnpm install`
3. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
4. Faça suas alterações
5. Commit: `git commit -m 'feat: adiciona nova funcionalidade'`
6. Push: `git push origin feature/nova-funcionalidade`
7. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**COP30 Belém Hub** - Conectando pessoas, preservando culturas, construindo um futuro sustentável. 🌍
