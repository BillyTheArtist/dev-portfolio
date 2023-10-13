'use client'
import { ContactForm } from '@/components/ContactForm'
import { useTheme } from '@/context/themeContext'

export default function HomePage () {
  const { theme } = useTheme()
  return (
    <div
      className={` ${theme} mt-[-56px] bg-gradient-to-b from-pageGradient to-backgroundMain flex justify-center min-h-[calc(100vh-177px)] items-center font-bold`}
    >
      <div className='flex flex-col align-middle items-center'>
        <ContactForm />
      </div>
    </div>
  )
}
