'use client'
import { SunIcon } from '@/components/icons/SunIcon'
import { MoonIcon } from '@/components/icons/MoonIcon'
import { useTheme } from '@/context/themeContext'
export function ToggleTheme () {

const {theme, toggleTheme} = useTheme()


  return (
    <header className='fixed z-50 bottom-0 right-0 mr-1 lg:top-0 lg:p-2'>
      <button
        className={` ${theme === 'dark' ? 'light' : 'dark'}`}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  )
}
