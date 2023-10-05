'use client'
import { CodeCard } from '@/components/CodeCard'
import { skills } from './data'

export default function HomePage () {
  return (
    <main>
      <div className='flex flex-col min-h-[calc(100vh-177px)] justify-center'>
        <div
          className={`m-2 text-sm text-brightGrey lg:p-10 lg:mx-40 bg-gradient-to-b from-hiBG to-blueGrey shadow-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 leading-relaxed $font-semibold`}
        >
          {skills.map((skill, index) => (
            <CodeCard skillProp={skill} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
