import React from 'react'
import { useTheme } from '@/context/themeContext'

export function MusicIcon () {
  const { theme } = useTheme()

  let fillColor
  if (theme === 'light') {
    fillColor = 'svg-light-fill'
  } else {
    fillColor = 'svg-dark-fill'
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-brush ${fillColor}`}
      width='72'
      height='72'
      viewBox='0 0 24 24'
      stroke-width='2'
      stroke='currentColor'
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
      <path d='M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
      <path d='M9 17v-13h10v13'></path>
      <path d='M9 8h10'></path>
    </svg>
  )
}
