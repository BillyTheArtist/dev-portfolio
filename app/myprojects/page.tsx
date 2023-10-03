import { ResponsiveWindow } from '@/components/ResponsiveWindow'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { projects } from './data'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin']
})
const montserratSemiBold = Montserrat({
  weight: '500',
  subsets: ['latin']
})
const montserratBold = Montserrat({
  weight: '600',
  subsets: ['latin']
})

export default function HomePage () {
  return (
    <main className={montserratBold.className}>
      <div className='flex flex-col min-h-screen bg-altBG'>
        <div className='mt-20 m-2 md:mx-60 lg:mx-60'>
          {projects.map((project, index) => (
            <ResponsiveWindow projectProp={project} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
