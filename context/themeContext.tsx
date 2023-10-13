'use client'
import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ThemeProviderProps, ThemeContextProps } from '@/types/theme'

const ThemeContext = createContext({} as ThemeContextProps)

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('theme')

  // Check if a theme preference exists in local storage and use it if available
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || savedTheme === 'light') {
    setTheme(savedTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
