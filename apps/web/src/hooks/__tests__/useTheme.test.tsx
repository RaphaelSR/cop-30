import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '../../test/test-utils'
import { useTheme, ThemeProvider } from '../useTheme'
import { createLocalStorageMock, mockMatchMedia } from '../../test/test-utils'

describe('useTheme Hook', () => {
  let localStorageMock: ReturnType<typeof createLocalStorageMock>

  beforeEach(() => {
    localStorageMock = createLocalStorageMock()
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    })
    
    // Reset matchMedia mock
    Object.defineProperty(window, 'matchMedia', {
      value: mockMatchMedia(false),
      writable: true
    })
  })

  describe('Inicialização', () => {
    it('deve inicializar com tema light por padrão', () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      expect(result.current.theme).toBe('light')
      expect(result.current.isDarkMode).toBe(false)
    })

    it('deve carregar tema salvo no localStorage', () => {
      localStorageMock.getItem.mockReturnValue('dark')
      
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      expect(result.current.theme).toBe('dark')
      expect(result.current.isDarkMode).toBe(true)
    })

    it('deve detectar preferência do sistema quando não há tema salvo', () => {
      Object.defineProperty(window, 'matchMedia', {
        value: mockMatchMedia(true), // Sistema prefere dark
        writable: true
      })
      
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      expect(result.current.theme).toBe('dark')
    })

    it('deve usar tema light se sistema não preferir dark', () => {
      Object.defineProperty(window, 'matchMedia', {
        value: mockMatchMedia(false), // Sistema não prefere dark
        writable: true
      })
      
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      expect(result.current.theme).toBe('light')
    })
  })

  describe('Mudança de tema', () => {
    it('deve alterar tema para dark', () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      act(() => {
        result.current.setTheme('dark')
      })

      expect(result.current.theme).toBe('dark')
      expect(result.current.isDarkMode).toBe(true)
    })

    it('deve alterar tema para light', () => {
      localStorageMock.getItem.mockReturnValue('dark')
      
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      act(() => {
        result.current.setTheme('light')
      })

      expect(result.current.theme).toBe('light')
      expect(result.current.isDarkMode).toBe(false)
    })

    it('deve alternar entre temas', () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      // Inicialmente light
      expect(result.current.theme).toBe('light')

      act(() => {
        result.current.toggleTheme()
      })

      // Deve mudar para dark
      expect(result.current.theme).toBe('dark')

      act(() => {
        result.current.toggleTheme()
      })

      // Deve voltar para light
      expect(result.current.theme).toBe('light')
    })
  })

  describe('Persistência', () => {
    it('deve salvar tema no localStorage ao alterar', () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      act(() => {
        result.current.setTheme('dark')
      })

      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
    })

    it('deve salvar tema no localStorage ao alternar', () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      act(() => {
        result.current.toggleTheme()
      })

      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
    })
  })

  describe('Estados computados', () => {
    it('deve calcular isDarkMode corretamente', () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      })

      expect(result.current.isDarkMode).toBe(false)

      act(() => {
        result.current.setTheme('dark')
      })

      expect(result.current.isDarkMode).toBe(true)
    })
  })

  describe('Tratamento de erros', () => {
    it('deve lançar erro quando usado fora do provider', () => {
      expect(() => {
        renderHook(() => useTheme())
      }).toThrow('useTheme must be used within a ThemeProvider')
    })
  })
})
