import React, { ReactNode } from 'react'
import { useTheme } from '@/context/themeContext'

interface Props {
  children: ReactNode
}

export function HeptaBox ({ children }: Props) {
  const { theme } = useTheme()

  let boxImage
  if (theme === 'light') {
    boxImage = 'url(/images/betterShape.svg)'
  } else {
    boxImage = 'url(/images/sevenSided.svg)'
  }

  return (
    <div className={`w-80 h-80 bg-cover bg-center flex flex-col items-center justify-center`} style={{backgroundImage: boxImage,}}>
      {children}
    </div>
  )
}
