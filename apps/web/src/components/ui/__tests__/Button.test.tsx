import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import { Button } from '../Button'

describe('Button Component', () => {
  describe('Renderização básica', () => {
    it('deve renderizar o botão com texto', () => {
      render(<Button>Clique aqui</Button>)
      
      expect(screen.getByRole('button', { name: /clique aqui/i })).toBeInTheDocument()
    })

    it('deve aplicar a classe CSS correta por padrão', () => {
      render(<Button>Botão</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3', 'rounded-lg')
    })
  })

  describe('Variantes de estilo', () => {
    it('deve aplicar estilo primary por padrão', () => {
      render(<Button>Primary</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-cop-green-600', 'text-white')
    })

    it('deve aplicar estilo secondary quando especificado', () => {
      render(<Button variant="secondary">Secondary</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-gray-600', 'text-white')
    })

    it('deve aplicar estilo outline quando especificado', () => {
      render(<Button variant="outline">Outline</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2', 'border-cop-green-600')
    })
  })

  describe('Tamanhos', () => {
    it('deve aplicar tamanho medium por padrão', () => {
      render(<Button>Medium</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3')
    })

    it('deve aplicar tamanho small quando especificado', () => {
      render(<Button size="sm">Small</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2', 'text-sm')
    })

    it('deve aplicar tamanho large quando especificado', () => {
      render(<Button size="lg">Large</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-8', 'py-4', 'text-lg')
    })
  })

  describe('Estados', () => {
    it('deve estar habilitado por padrão', () => {
      render(<Button>Habilitado</Button>)
      
      const button = screen.getByRole('button')
      expect(button).not.toBeDisabled()
      expect(button).not.toHaveClass('opacity-50', 'cursor-not-allowed')
    })

    it('deve estar desabilitado quando especificado', () => {
      render(<Button disabled>Desabilitado</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
    })
  })

  describe('Interações', () => {
    it('deve chamar onClick quando clicado', async () => {
      const handleClick = vi.fn()
      const { user } = render(
        <Button onClick={handleClick}>Clicável</Button>
      )
      
      const button = screen.getByRole('button')
      await user.click(button)
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('não deve chamar onClick quando desabilitado', async () => {
      const handleClick = vi.fn()
      const { user } = render(
        <Button onClick={handleClick} disabled>Desabilitado</Button>
      )
      
      const button = screen.getByRole('button')
      await user.click(button)
      
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Acessibilidade', () => {
    it('deve ter o role button correto', () => {
      render(<Button>Acessível</Button>)
      
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('deve suportar aria-label customizado', () => {
      render(<Button aria-label="Botão customizado">Icon</Button>)
      
      const button = screen.getByRole('button', { name: /botão customizado/i })
      expect(button).toBeInTheDocument()
    })

    it('deve ter foco visível', () => {
      render(<Button>Focável</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-cop-green-500')
    })
  })

  describe('Customização', () => {
    it('deve aceitar className customizado', () => {
      render(<Button className="custom-class">Customizado</Button>)
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('deve passar props adicionais para o elemento button', () => {
      render(<Button data-testid="custom-button">Com data-testid</Button>)
      
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
    })
  })
})
