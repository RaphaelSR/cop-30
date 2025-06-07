import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '../../test/test-utils'
import { useLanguage, LanguageProvider } from '../useLanguage'
import { createLocalStorageMock } from '../../test/test-utils'

describe('useLanguage Hook', () => {
  let localStorageMock: ReturnType<typeof createLocalStorageMock>

  beforeEach(() => {
    localStorageMock = createLocalStorageMock()
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    })
  })

  describe('Inicialização', () => {
    it('deve inicializar com português como idioma padrão', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      expect(result.current.currentLanguage).toBe('pt')
    })

    it('deve fornecer lista de idiomas disponíveis', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      expect(result.current.languages).toEqual([
        { code: 'pt', name: 'Português', flag: '🇧🇷', nativeName: 'Português' },
        { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' }
      ])
    })
  })

  describe('Mudança de idioma', () => {
    it('deve alterar idioma para inglês', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      act(() => {
        result.current.changeLanguage('en')
      })

      expect(result.current.currentLanguage).toBe('en')
    })

    it('deve alterar idioma para português', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      // Muda para inglês primeiro
      act(() => {
        result.current.changeLanguage('en')
      })

      // Depois volta para português
      act(() => {
        result.current.changeLanguage('pt')
      })

      expect(result.current.currentLanguage).toBe('pt')
    })
  })

  describe('Função de tradução', () => {
    it('deve retornar tradução em português', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      const translation = result.current.t('nav.home')
      expect(translation).toBe('Home')
    })

    it('deve retornar tradução em inglês', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      act(() => {
        result.current.changeLanguage('en')
      })

      const translation = result.current.t('nav.home')
      expect(translation).toBe('Home')
    })

    it('deve retornar chave se tradução não existir', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      const translation = result.current.t('inexistent.key')
      expect(translation).toBe('inexistent.key')
    })

    it('deve suportar traduções aninhadas', () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      })

      const translation = result.current.t('nav.guides')
      expect(translation).toBe('Guias')
    })
  })

  describe('Tratamento de erros', () => {
    it('deve lançar erro quando usado fora do provider', () => {
      expect(() => {
        renderHook(() => useLanguage())
      }).toThrow('useLanguage must be used within a LanguageProvider')
    })
  })
})
