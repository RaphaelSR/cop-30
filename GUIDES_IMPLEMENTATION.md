# 🗺️ **GUIAS TURÍSTICOS - COP-30 HUB**

## 📋 **Visão Geral**

A seção **"Guias"** do portal COP-30 Hub conecta turistas com guias locais especializados em Belém do Pará. Oferece uma plataforma curada para encontrar tours culturais, históricos, gastronômicos e de natureza durante o evento da COP-30.

## 🎯 **Objetivos**

- Conectar turistas com guias locais confiáveis
- Promover o turismo consciente e educativo
- Valorizar profissionais locais do turismo
- Facilitar o agendamento e contato direto
- Oferecer opções gratuitas e pagas

## 🛠️ **Estrutura Técnica**

### **Arquivos Criados:**

```
src/
├── types/guides.ts              # Tipos TypeScript
├── data/guides.ts               # Dados mockados
├── hooks/useGuides.ts           # Hook personalizado
├── components/features/
│   ├── GuideCard.tsx           # Card do guia
│   ├── GuideFilters.tsx        # Filtros e busca
│   └── GuideDetailModal.tsx    # Modal de detalhes
└── pages/GuidesPage.tsx        # Página principal
```

### **Tipos de Dados:**

```typescript
type TourGuide = {
  id: string;
  name: string;
  description: string;
  languages: string[];
  contact: string;
  photo: string;
  schedule: {
    days: string[];
    time: string;
    location: string;
  };
  free: boolean;
  link?: string;
  category: 'cultural' | 'gastronomic' | 'historical' | 'nature' | 'general';
  rating?: number;
  verified: boolean;
};
```

## 📊 **Dados dos Guias**

### **Guias Incluídos:**

1. **Prof. Michel Pinho**
   - Ex-secretário de cultura
   - Tours históricos gratuitos
   - Especialidade: História da cidade antiga
   - Contato: Instagram

2. **Belém Cultural Tours**
   - Grupo de historiadores profissionais
   - Tours multilíngues (PT/EN/ES)
   - Especialidade: Cidade Velha e Mercado Ver-o-Peso

3. **Rota dos Sabores**
   - Tours gastronômicos especializados
   - Foco em feiras e restaurantes típicos
   - Localização: Ver-o-Peso e Praça do Carmo

4. **Guia Juliana Tavares**
   - Especialista em história afro-amazônica
   - Turismo consciente e educativo
   - Roteiros por áreas simbólicas

5. **Amazônia Aventura**
   - Ecoturismo e natureza urbana
   - Trilhas em parques da cidade
   - Idiomas: PT/EN/FR

6. **Caminhada Cultural Gratuita**
   - Iniciativa comunitária
   - Voluntários locais
   - Gratuito aos fins de semana

## 🎨 **Features Implementadas**

### **Filtros Avançados:**
- ✅ Por idiomas (PT, EN, ES, FR)
- ✅ Por categoria (Cultural, Histórico, Gastronômico, Natureza)
- ✅ Por tipo (Gratuito/Pago)
- ✅ Busca por texto (nome, descrição, localização)

### **Interface:**
- ✅ Cards responsivos com hover effects
- ✅ Badges de verificação e gratuito
- ✅ Modal de detalhes completo
- ✅ Integração com Google Maps
- ✅ Contato direto (WhatsApp/Instagram/Email)
- ✅ Dark mode completo
- ✅ Lazy loading de imagens

### **Estatísticas:**
- ✅ Contador de guias gratuitos
- ✅ Contador de guias verificados
- ✅ Contador de idiomas disponíveis
- ✅ Contador de categorias

## 🔮 **Preparação para CMS**

### **Integração Futura:**

A estrutura está preparada para integração com CMS:

```typescript
// Exemplo de integração API
const { guides, loading, error } = useGuides();

// Mudança necessária em useGuides.ts:
// const tourGuides = await fetch('/api/guides').then(r => r.json());
```

### **CMS Recomendados:**
- **Strapi** - Open source, flexível
- **Sanity** - Tempo real, escalável  
- **Payload CMS** - TypeScript nativo

### **Fluxo de Curadoria:**
1. Guia submete dados via formulário
2. Admin revisa e aprova
3. Dados são publicados automaticamente
4. Notificação para o guia

## 📱 **Responsividade**

- **Mobile**: 1 coluna
- **Tablet**: 2 colunas  
- **Desktop**: 3 colunas
- **Layout adaptativo** com Grid do Mantine

## 🎯 **UX/UI Highlights**

- **Cores consistentes** com o tema COP-30
- **Animações suaves** em hover e transições
- **Tipografia clara** e hierarquia visual
- **Acessibilidade** com ARIA labels
- **Performance** com lazy loading

## 🚀 **Como Testar**

1. Acesse `http://localhost:5178`
2. Navegue para a aba "Guias"
3. Teste filtros e busca
4. Clique em "Ver Detalhes" em qualquer guia
5. Teste os botões de contato

## 🔧 **Manutenção**

### **Adicionar Novo Guia:**
Edite `src/data/guides.ts` e adicione o objeto com os dados completos.

### **Modificar Filtros:**
Edite `src/components/features/GuideFilters.tsx` para adicionar novos tipos de filtro.

### **Customizar Categorias:**
Modifique o enum em `src/types/guides.ts` e os ícones em `getCategoryIcon()`.

---

## 📈 **Métricas de Sucesso**

- **Engajamento**: Clicks em "Ver Detalhes"
- **Conversão**: Clicks em "Contato"  
- **Retenção**: Tempo na página
- **Satisfação**: Feedback dos guias e turistas

---

**Implementado em:** Junho 2025  
**Status:** ✅ Completo e funcional  
**Próximo:** Integração com CMS para curadoria dinâmica
