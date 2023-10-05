'use client'
import { ResponsiveWindow } from '@/components/ResponsiveWindow'
import { projects } from './data'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { SeparatorFooter } from '@/components/ui/SeparatorFooter'
import { FooterPeaks } from '@/components/FooterPeaks'

export default function HomePage () {
  return (
    <main className='font-bold'>
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
