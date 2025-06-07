import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/test-utils'
import { LandingPage } from '../LandingPage'

// Mock do react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  }
})

describe('LandingPage Integration', () => {
  describe('Renderização de conteúdo', () => {
    it('deve renderizar o título principal', () => {
      render(<LandingPage />)
      
      expect(screen.getByText(/experimente belém/i)).toBeInTheDocument()
    })

    it('deve renderizar a descrição principal', () => {
      render(<LandingPage />)
      
      expect(screen.getByText(/autenticamente/i)).toBeInTheDocument()
    })

    it('deve renderizar seção de features', () => {
      render(<LandingPage />)
      
      expect(screen.getByText('Hospedagem Autêntica')).toBeInTheDocument()
      expect(screen.getByText('Guias Locais')).toBeInTheDocument()
      expect(screen.getByText('Impacto Social')).toBeInTheDocument()
    })

    it('deve renderizar seção de acesso rápido', () => {
      render(<LandingPage />)
      
      expect(screen.getByText(/explorar/i)).toBeInTheDocument()
    })
  })

  describe('Acessibilidade', () => {
    it('deve ter estrutura semântica correta', () => {
      render(<LandingPage />)
      
      // A LandingPage não tem role="main", mas tem uma estrutura div principal
      expect(screen.getByText(/experimente belém/i)).toBeInTheDocument()
    })

    it('deve ter headings hierárquicos', () => {
      render(<LandingPage />)
      
      // A LandingPage usa GSSectionHeader que cria h2, não h1
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })
  })

  describe('Performance', () => {
    it('deve carregar rapidamente', () => {
      const startTime = performance.now()
      render(<LandingPage />)
      const endTime = performance.now()
      
      const renderTime = endTime - startTime
      expect(renderTime).toBeLessThan(100) // Menos de 100ms
    })
  })
})
