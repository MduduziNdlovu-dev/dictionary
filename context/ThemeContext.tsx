'use client'

import React, { createContext, useState, useMemo, useContext } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  font: string
  setFont: (font: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useCustomTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useCustomTheme must be used within ThemeContextProvider')
  }
  return context
}

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false)
  const [font, setFont] = useState('Geist') // default to Geist

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily:
            font === 'Serif'
              ? 'Georgia'
              : font === 'Mono'
              ? 'Courier New'
              : 'Geist, sans-serif',
        },
      }),
    [darkMode, font]
  )

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, font, setFont }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
