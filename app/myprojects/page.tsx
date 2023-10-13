'use client'
import { ResponsiveWindow } from '@/components/ResponsiveWindow'
import { projects } from './data'
import { useTheme } from '@/context/themeContext'

export default function HomePage () {
  const { theme } = useTheme()
  return (
    <main
      className={` ${theme} mt-[-56px] font-bold bg-gradient-to-b from-pageGradient to-backgroundMain`}
    >
      <div className='flex flex-col min-h-screen items-center'>
        <div className='mt-20 m-2 md:mx-40 lg:mx-60'>
          {projects.map((project, index) => (
            <ResponsiveWindow projectProp={project} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
