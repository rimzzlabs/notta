import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const useDarkMode = () => {
  const setInitialTheme = (): Theme => {
    const localStorageTheme = localStorage.getItem('theme') as Theme | null
    if (!localStorageTheme) {
      return 'light'
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches && localStorageTheme === 'dark') {
      return 'dark'
    }

    return 'light'
  }

  const [theme, setTheme] = useState<Theme>(setInitialTheme())

  const toggleTheme = () => setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))

  const saveToLocalStorage = () => localStorage.setItem('theme', theme)

  useEffect(() => {
    saveToLocalStorage()
    const html = document.documentElement

    if (theme === 'light') {
      html.classList.add(theme)
      html.classList.remove('dark')
      html.style.colorScheme = theme
    } else {
      html.classList.add(theme)
      html.classList.remove('light')
      html.style.colorScheme = theme
    }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export default useDarkMode
