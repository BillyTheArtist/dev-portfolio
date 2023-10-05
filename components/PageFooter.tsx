'use client'
import { FooterPeaks } from '@/components/FooterPeaks'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { SeparatorFooter } from '@/components/ui/SeparatorFooter'

export function PageFooter () {
  return (
    <footer className='h-[177px]'>
      <span className='flex w-full bg-gradient-to-b from-transparent from 30% via-liteBG via-10% to-niceOrange to-90%  mt-[-15px] md:mt-[-80px] lg:mt-[-10px] pt-[100px] mb-[-50px]' />
      <FooterPeaks />
      <div className='grid grid-cols-1 place-items-center bg-boxLite md:space-x-7'>
        <SeparatorFooter />
        <div className='p-2 flex items-center justify-center bg-boxLite md:space-x-7'>
          <LinkedinIcon />
          <GithubIcon />
          <p className={`mb-3 text-[12px] lg:text-[16px] text-baseBG text-mg font-bold`}>
            &copy; {new Date().getFullYear()} Billy Townsend. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
