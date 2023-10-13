import { ReactNode } from "react";

export interface ThemeProviderProps {
children: ReactNode
}

export interface ThemeContextProps {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}