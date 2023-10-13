import { useTheme } from '@/context/themeContext'
import { ShineSelf } from './ShineSelf'
import { HeroImage } from '@/components/HeroImage'

export function PageHero () {
  const { theme } = useTheme()
  let pageHero
  if (theme === 'light') {
    pageHero = <ShineSelf />
  } else {
    pageHero = <HeroImage />
  }
  return pageHero 
}
