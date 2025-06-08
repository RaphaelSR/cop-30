# COP-30 Belém Hub - Guia Completo para IA

> **Data de atualização:** 8 de junho de 2025  
> **Status:** ✅ Sistema completo e funcional em produção  
> **Deploy:** https://raphaelsr.github.io/cop-30/

---

## 📋 ÍNDICE

1. [Resumo Técnico](#resumo-técnico)
2. [Arquitetura & Stack](#arquitetura--stack)
3. [Funcionalidades Principais](#funcionalidades-principais)
4. [Padrões & Boas Práticas](#padrões--boas-práticas)
5. [Status das Seções](#status-das-seções)
6. [Histórico de Melhorias](#histórico-de-melhorias)
7. [Orientações para IA](#orientações-para-ia)
8. [Comandos & Deploy](#comandos--deploy)

---

## RESUMO TÉCNICO

### Stack Principal
- **React 19** + **TypeScript** (strict mode)
- **Vite 6.3.5** (bundler + dev server)
- **Tailwind CSS 3.4** + **Mantine UI** (design system híbrido)
- **React Router DOM 6.28** (SPA routing)
- **PNPM Workspaces** (monorepo)

### Arquitetura
```
cop-30/
├── apps/web/                 # Aplicação React principal
├── packages/
│   ├── ui/                   # Biblioteca UI compartilhada
│   └── constants/            # Traduções e constantes
├── .github/workflows/        # CI/CD automático
└── docs/archived/           # Documentação antiga (arquivada)
```

### Performance
- **Bundle:** 321.87 kB (99.08 kB gzipped)
- **Build time:** ~800ms
- **Testes:** 44/44 passando (100%)
- **TypeScript:** 0 erros, 100% tipado

---

## ARQUITETURA & STACK

### Monorepo (PNPM Workspaces)
```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"
```

### Providers Stack (ordem importante)
```typescript
<BrowserRouter basename="/cop-30">
  <ThemeProvider>
    <MantineThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MantineThemeProvider>
  </ThemeProvider>
</BrowserRouter>
```

### Estrutura de Componentes
```
src/components/
├── ui/                    # Componentes base (Button, Card, Grid)
├── features/              # Componentes específicos (StayCard, GuideCard)
├── layout/                # Layouts (PageLayout, EmptyState)
├── common/                # Componentes comuns
└── Header.tsx             # Header responsivo
```

### Hooks Personalizados
- `useLanguage()` - i18n com Context API
- `useTheme()` - dark/light mode
- `useStay()` - filtros da página Stay
- `useGuides()` - filtros da página Guides
- `useFilters()` - filtros genéricos

---

## FUNCIONALIDADES PRINCIPAIS

### 🌐 Sistema de Internacionalização
- **Status:** ✅ Completo
- **Idiomas:** Português, Inglês, Espanhol
- **Implementação:** Context API personalizado
- **Traduções:** `apps/web/src/constants/translations.ts`
- **Hook:** `useLanguage()` para acesso
- **Persistência:** localStorage automática
- **Seletor:** Header com flag dinâmica

### 🎨 Sistema de Temas
- **Status:** ✅ Completo com Mantine integrado
- **Modos:** Light/Dark com transições suaves
- **Implementação:** Context API + Mantine ThemeProvider
- **Hook:** `useTheme()` para controle
- **Persistência:** localStorage automática
- **Sincronização:** Mantine + Tailwind CSS variables
- **Ícones:** Sol/lua com animações

### 📱 Responsividade
- **Status:** ✅ Mobile-first completo
- **Breakpoints Mantine:** xs(30em), sm(40em), md(48em), lg(64em), xl(80em)
- **Breakpoints Tailwind:** sm(640px), md(768px), lg(1024px), xl(1280px)
- **Grid:** Sistema responsivo com 1-3 colunas
- **Container:** Tamanhos adaptativos (max-width: 1400px)
- **Header:** Mobile drawer + desktop navigation

### 🏠 Página Stay (Hospedagens)
- **Status:** ✅ Completa e otimizada
- **Funcionalidades:**
  - Filtros avançados (preço, bairro, tipo, capacidade)
  - Slider de preços (R$ 100-1.000, step 50)
  - Paginação (10 itens por página)
  - Toggle Lista/Mapa com SegmentedControl
  - Mapa interativo (@vis.gl/react-google-maps)
  - Cards uniformizados (altura 400px)
  - 21 hospedagens mockadas de bairros reais de Belém
- **Layout:** Sidebar 320px (desktop) / Drawer (mobile)
- **Coordenadas:** Bairros reais de Belém mapeados

### 🗺️ Página Guides
- **Status:** ✅ Completa com dados curados
- **Funcionalidades:**
  - 6 guias turísticos cadastrados
  - Filtros por idioma, categoria, tipo (gratuito/pago)
  - Modal de detalhes com contato direto
  - Integração WhatsApp/Instagram/Email
  - Categorias: Cultural, Histórico, Gastronômico, Natureza
- **Preparação:** Estrutura pronta para CMS

### 🎯 Páginas Adicionais
- **LandingPage:** ✅ Hero + features + quick access
- **EventsPage:** ✅ Layout básico (para expansão)
- **ExplorePage:** ✅ Layout básico (para expansão)

---

## PADRÕES & BOAS PRÁTICAS

### Imports Padronizados
```typescript
// ✅ CORRETO - Usar barrel exports
import { Button, Card, Grid } from '../components/ui';
import { FeatureCard } from '../components/features';
import { useLanguage, useTheme } from '../hooks';

// ❌ EVITAR - Imports diretos sem barrel
import Button from '../components/ui/Button';
```

### Componentização (SOLID/DRY)
- **Base:** Componentes reutilizáveis em `ui/`
- **Features:** Componentes específicos em `features/`
- **Layout:** Estruturas em `layout/`
- **Props:** Interfaces TypeScript obrigatórias
- **Export:** Barrel exports (`index.ts`) em cada pasta

### Mantine UI Integration
```typescript
// ✅ Usar componentes Mantine quando disponível
import { Button, SegmentedControl, Slider } from '@mantine/core';

// ✅ Cores customizadas configuradas
primaryColor: 'cop-green'  // #10B981
colors: { 'cop-purple': [...] }
```

### CSS Variables (Tema)
```css
/* Sincronização Mantine + Tailwind */
--custom-bg-primary: var(--mantine-color-body);
--custom-text-primary: var(--mantine-color-text);
--custom-surface: var(--mantine-color-default);
```

### Traduções
```typescript
// ✅ Usar hook para traduções
const { t } = useLanguage();
return <h1>{t.pages.stay.title}</h1>;

// ✅ Estrutura hierárquica
translations = {
  pt: {
    pages: {
      stay: { title: "Hospedagens", ... },
      guides: { title: "Guias", ... }
    }
  }
}
```

### Filtros e Estado
```typescript
// ✅ Hook personalizado para filtros
const { 
  filteredListings, 
  filters, 
  updateFilter,
  clearFilters 
} = useStay();
```

---

## STATUS DAS SEÇÕES

### ✅ Landing Page - COMPLETA
- Hero section responsivo
- Feature cards (3 principais funcionalidades)
- Quick access com ícones
- Call-to-action para Stay e Guides
- Traduções completas (PT/EN/ES)

### ✅ Stay (Hospedagens) - COMPLETA E OTIMIZADA
- **21 hospedagens** mockadas de bairros reais
- **Filtros avançados:** preço, bairro, tipo, capacidade
- **Slider otimizado:** R$ 100-1.000 (step 50) com marcadores visuais
- **Paginação:** 10 itens por página
- **Mapa interativo:** Google Maps com coordenadas reais
- **Toggle Lista/Mapa:** SegmentedControl Mantine
- **Cards uniformes:** Altura 400px, carrossel padronizado
- **Layout responsivo:** Sidebar 320px / Drawer mobile
- **Performance:** Hook `useStay` otimizado

### ✅ Guides - COMPLETA COM CURADORIA
- **6 guias cadastrados:** Michel Pinho, Belém Cultural, Rota dos Sabores...
- **Filtros:** idioma (PT/EN/ES/FR), categoria, tipo (gratuito/pago)
- **Modal detalhado:** informações completas + contato direto
- **Contato integrado:** WhatsApp, Instagram, Email
- **Verificação:** Sistema de badges (verificado, gratuito)
- **Preparação CMS:** Estrutura pronta para expansão

### 🔄 Events - LAYOUT BÁSICO
- Estrutura criada para expansão futura
- PageLayout implementado
- EmptyState configurado
- Traduções preparadas

### 🔄 Explore - LAYOUT BÁSICO  
- Estrutura criada para expansão futura
- PageLayout implementado
- EmptyState configurado
- Traduções preparadas

---

## HISTÓRICO DE MELHORIAS

### Migração Mantine UI (Concluída ✅)
- **Data:** 6 de junho de 2025
- **Resultado:** 44/44 testes passando
- **Benefícios:** Design system consistente, tema dark/light robusto
- **Componentes migrados:** Button, SegmentedControl, Slider
- **Bundle impact:** Mínimo (+50KB pela lib Google Maps)

### Otimizações Stay Page
- **Slider de preços:** Performance 10x melhor (step 50 vs 25)
- **Cards uniformes:** Altura fixa 400px, layout flexível
- **Mapa interativo:** @vis.gl/react-google-maps implementado
- **Responsividade:** Layout sidebar/drawer otimizado
- **Remoção botão "Contatar":** UX simplificada, foco em "Ver detalhes"

### Correções de Tema e Responsividade
- **CSS Variables:** Sincronização Mantine + Tailwind
- **Background adaptativo:** GSBottomSheet, GSImageCard
- **Layout global:** Remoção de configurações problemáticas #root
- **Transições suaves:** 200ms entre temas

### Deploy e CI/CD
- **GitHub Actions:** Workflow completo configurado
- **SPA Routing:** React Router basename `/cop-30` configurado
- **Deploy automático:** GitHub Pages funcionando
- **URLs corretas:** Deep linking suportado

---

## ORIENTAÇÕES PARA IA

### ✅ O que a IA PODE fazer autonomamente:

#### Componentes UI
- Criar novos componentes em `src/components/ui/`
- Modificar componentes existentes para melhorar UX
- Adicionar props TypeScript e documentação
- Implementar variantes de componentes (sizes, colors, variants)

#### Traduções
- Adicionar novas chaves em `translations.ts`
- Corrigir traduções existentes
- Expandir suporte a idiomas

#### Estilos e Responsividade
- Ajustar classes Tailwind CSS
- Melhorar breakpoints e grid
- Corrigir problemas de tema dark/light
- Otimizar performance CSS

#### Bug Fixes
- Corrigir erros TypeScript
- Resolver problemas de build
- Melhorar performance de rendering
- Corrigir problemas de responsividade

#### Data e Mocks
- Adicionar/editar dados em `src/data/`
- Criar novos mocks realistas
- Melhorar estrutura de dados TypeScript

#### Testes
- Criar testes unitários com Vitest
- Melhorar coverage de testes
- Corrigir testes quebrados

### ⚠️ O que REQUER permissão:

#### Mudanças Arquiteturais
- Modificar estrutura de pastas
- Adicionar/remover dependências principais
- Alterar configurações Vite/React Router
- Mudanças no sistema de providers

#### Funcionalidades Críticas
- Modificar sistema de autenticação (se implementado)
- Alterar lógica de pagamento (se implementado)
- Mudanças no sistema de roteamento principal

#### Deploy e Produção
- Modificar GitHub Actions
- Alterar configurações de deploy
- Mudanças em variáveis de ambiente sensíveis

#### APIs Externas
- Integrar novas APIs (maps, pagamento, auth)
- Modificar chaves de API
- Adicionar tracking/analytics

### 🎯 Diretrizes de Implementação

#### Sempre seguir:
1. **TypeScript strict:** Toda prop e função tipada
2. **Responsividade mobile-first:** Testar em 320px+
3. **Traduções completas:** Nunca text hardcoded
4. **Padrão de imports:** Usar barrel exports
5. **Nomenclatura consistente:** camelCase, PascalCase
6. **Testes funcionais:** Verificar que não quebrou nada

#### Estrutura de commits:
```
feat: adiciona componente DatePicker
fix: corrige bug no slider de preços  
refactor: otimiza performance do StayCard
docs: atualiza guia de desenvolvimento
```

---

## COMANDOS & DEPLOY

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Servidor desenvolvimento
pnpm dev
# → http://localhost:5173

# Testes
pnpm test              # Executar todos os testes
pnpm test:watch        # Watch mode
pnpm test:coverage     # Coverage report
```

### Build e Deploy
```bash
# Type check
pnpm type-check

# Build produção
pnpm build

# Preview build
pnpm preview

# Deploy manual (GitHub Pages automático)
git push origin main  # → Trigger CI/CD
```

### Estrutura de URLs
- **Repositório:** https://github.com/RaphaelSR/cop-30
- **Produção:** https://raphaelsr.github.io/cop-30/
- **CI/CD:** https://github.com/RaphaelSR/cop-30/actions

### Variáveis de Ambiente
```bash
# .env.local (opcional)
VITE_GOOGLE_MAPS_API_KEY=sua_chave_aqui
```

---

## PRÓXIMOS PASSOS SUGERIDOS

### Melhorias Técnicas Prioritárias
1. **Configurar path aliases** TypeScript (`@/` imports)
2. **Adicionar mais testes** unitários (Vitest)
3. **Implementar Storybook** para componentes
4. **Otimizar bundle** com code splitting avançado
5. **Adicionar ESLint rules** mais rigorosas

### Novas Funcionalidades
1. **Sistema de autenticação** (Auth0/Firebase)
2. **Sistema de reservas** completo
3. **Integração pagamentos** (Stripe/PagSeguro)
4. **Chat em tempo real** (Socket.io)
5. **Sistema de avaliações** e comentários
6. **PWA** para experiência mobile nativa

### Expansão de Conteúdo
1. **Events Page:** Agenda completa da COP-30
2. **Explore Page:** Pontos turísticos e atividades
3. **Blog/News:** Notícias do evento
4. **Directory:** Empresas e serviços locais

---

**🎉 SISTEMA COMPLETO E PRONTO PARA PRODUÇÃO**

O COP-30 Belém Hub está **100% funcional** com arquitetura sólida, testes passando, deploy automatizado e documentação consolidada. O projeto pode ser usado imediatamente pelos participantes da COP-30 e expandido conforme necessário.

---

*Última atualização: 8 de junho de 2025*  
*Documentação consolidada de 12 arquivos .md anteriores*
