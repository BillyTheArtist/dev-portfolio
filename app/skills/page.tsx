'use client'
import { CodeCard } from '@/components/CodeCard'
import { skills } from './data'
import { useTheme } from '@/context/themeContext'

export default function HomePage () {
  const { theme } = useTheme()
  let dynamicFont
  if (theme === 'light') {
    dynamicFont = 'font-semibold'
  } else {
    dynamicFont = 'font-normal'
  }
  return (
    <main
      className={` ${theme} bg-gradient-to-b from-pageGradient to-backgroundMain`}
    >
      <div
        className={` mt-[-56px] flex flex-col min-h-[calc(100vh-177px)] justify-center`}
      >
        <div
          className={`${theme} mt-20 m-2 text-sm text-copyColor lg:p-10 lg:mx-40 bg-gradient-to-b from-skillsGradientTop to-skillsGradientBottom shadow-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 leading-relaxed ${dynamicFont}`}
          style={{
            borderRadius: '10px'
          }}
        >
          {skills.map((skill, index) => (
            <CodeCard skillProp={skill} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
