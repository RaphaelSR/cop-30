# COP-30 Hub - Guia de Desenvolvimento

## ✅ Sistema Implementado

### 🌐 Internacionalização (i18n)
- **Sistema personalizado** com Context API e hooks
- Suporte a **Português** e **Inglês**
- Traduções centralizadas em `src/constants/translations.ts`
- Hook `useLanguage()` para acesso às traduções
- Componente `LanguageProvider` para gerenciamento de estado

### 🎨 Sistema de Temas
- **Dark/Light mode** implementado com Context API
- Persistência no `localStorage`
- Hook `useTheme()` para controle de tema
- Componente `ThemeProvider` para gerenciamento de estado
- Classes Tailwind dinâmicas (`dark:`)
- **✅ NOVA**: Sincronização completa Mantine + Tailwind
- **✅ NOVA**: Variáveis CSS customizadas para consistência
- **✅ NOVA**: Suporte dark theme em todos os componentes UI

### 📱 Responsividade
- **Mobile-first** approach com Tailwind CSS
- Sistema de breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Grid responsivo configurável
- Componentes Container com tamanhos adaptativos
- **✅ NOVA**: Layout principal otimizado para responsividade
- **✅ NOVA**: Sincronização de breakpoints Mantine/Tailwind

### 🧩 Biblioteca de Componentes UI
Componentes reutilizáveis criados seguindo princípios **DRY** e **SOLID**:

#### Componentes Base
- **Button**: Variants (primary, secondary, outline), tamanhos, estados
- **Card**: Padding configurável, hover effects
- **Container**: Tamanhos responsivos (sm, md, lg, xl, full)
- **Grid**: Sistema de grid responsivo com breakpoints
- **Icon**: Sistema de ícones SVG (home, calendar, map, users, etc.)

#### Componentes Especializados
- **FeatureCard**: Card para features da landing page
- **QuickAccessItem**: Item de acesso rápido com ícone
- **EmptyState**: Estado vazio reutilizável
- **PageLayout**: Layout padrão para páginas internas

### 📱 Responsividade
- **Mobile-first** design
- Grid system responsivo
- Navegação mobile no Header
- Componentes adaptáveis a diferentes tamanhos de tela

### 🏗️ Arquitetura
- **Separação de responsabilidades**
- **Componentização** seguindo princípios SOLID
- **Hooks personalizados** para lógicas específicas
- **TypeScript** para type safety
- **Tailwind CSS** para estilização

## 🚀 Como Executar

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm dev

# Aplicação disponível em: http://localhost:5175/
```

### Build
```bash
# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📁 Estrutura do Projeto

```
apps/web/src/
├── components/
│   ├── ui/                    # Componentes base reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Grid.tsx
│   │   ├── Icon.tsx
│   │   └── index.ts
│   ├── features/              # Componentes específicos
│   │   ├── FeatureCard.tsx
│   │   └── QuickAccessItem.tsx
│   ├── layout/                # Layouts
│   │   └── PageLayout.tsx
│   ├── common/                # Componentes comuns
│   │   └── EmptyState.tsx
│   └── Header.tsx             # Header responsivo
├── hooks/
│   ├── useLanguage.tsx        # Hook de internacionalização
│   ├── useTheme.tsx          # Hook de temas
│   └── index.ts
├── constants/
│   └── translations.ts        # Traduções PT/EN
├── pages/                     # Páginas da aplicação
│   ├── LandingPage.tsx
│   ├── StayPage.tsx
│   ├── GuidesPage.tsx
│   ├── EventsPage.tsx
│   └── ExplorePage.tsx
└── data/
    └── listings.ts            # Mock data
```

## 🔧 Tecnologias

- **React 19** com TypeScript
- **Tailwind CSS** para estilização
- **Vite** como bundler
- **Context API** para gerenciamento de estado
- **PNPM** para gerenciamento de pacotes
- **Monorepo** com packages separados

## 🎯 Padrões Implementados

### Componentização
- Componentes base reutilizáveis em `components/ui/`
- Componentes específicos em `components/features/`
- Exports centralizados para facilitar importação

### Responsividade
- **Mobile-first** approach
- Sistema de breakpoints: `sm`, `md`, `lg`, `xl`
- Grid responsivo configurável
- Componentes Container com tamanhos adaptativos

### Acessibilidade
- Contraste adequado entre temas
- Navegação por teclado
- Estados visuais claros (hover, focus, active)

### Performance
- Lazy loading de componentes quando necessário
- Otimizações do Vite
- CSS-in-JS minimizado com Tailwind

## 🧪 Testes de Funcionalidade

### ✅ Testado e Funcionando
1. **Troca de idioma**: PT ⇄ EN
2. **Troca de tema**: Light ⇄ Dark
3. **Responsividade**: Mobile, Tablet, Desktop
4. **Navegação**: Entre todas as páginas
5. **Search na StayPage**: Filtros funcionais
6. **Build**: Compilação sem erros

### 🔍 Próximos Passos
1. **Testes unitários** com Vitest
2. **Testes de integração** com Testing Library
3. **Otimizações de performance**
4. **Acessibilidade avançada** (ARIA)
5. **PWA** para experiência mobile nativa

## 📋 Checklist de Desenvolvimento

- [x] Sistema de i18n (PT/EN)
- [x] Sistema de temas (Dark/Light)
- [x] Componentização UI completa
- [x] Responsividade mobile-first
- [x] Refatoração de todas as páginas
- [x] Build sem erros TypeScript
- [x] Servidor de desenvolvimento funcionando
- [x] Correção de imports e arquivos duplicados
- [x] Limpeza de dependências não utilizadas
- [x] Teste de funcionalidades completo
- [ ] Testes unitários
- [ ] Documentação de componentes
- [ ] Storybook para componentes
- [ ] Deploy em produção

## 🤝 Contribuição

1. Mantenha a **consistência** de padrões
2. Use **TypeScript** rigorosamente
3. Siga a **estrutura de pastas** estabelecida
4. **Teste** em diferentes resoluções
5. **Documente** novos componentes
6. Mantenha **tradução** em ambos idiomas

---

**Status**: ✅ **Pronto para desenvolvimento**
**Última atualização**: Junho 2025
