import { useTheme } from '@/context/themeContext'

export function ComputerIcon () {
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
      <path d='M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z'></path>
      <path d='M7 20h10'></path>
      <path d='M9 16v4'></path>
      <path d='M15 16v4'></path>
      <path d='M9 12v-4'></path>
      <path d='M12 12v-1'></path>
      <path d='M15 12v-2'></path>
      <path d='M12 12v-1'></path>
    </svg>
  )
}
