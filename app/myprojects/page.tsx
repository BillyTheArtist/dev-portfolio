'use client'
import { ResponsiveWindow } from '@/components/ResponsiveWindow'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { projects } from './data'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { SeparatorFooter } from '@/components/ui/SeparatorFooter'
import { FooterPeaks } from '@/components/FooterPeaks'

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
      <div className='flex flex-col min-h-screen bg-altBG items-center'>
        <NavigationMenu className='mt-4 md:mr-14 lg:mx-auto'>
          <NavigationMenuList className='bg-footerBG p-2 rounded-full'>
            <Link href='/'>
              <NavigationMenuItem
                className='min-w-[100px] bg-footerBG  p-[4px] rounded-l-2xl rounded-r-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink
                  className={`text-brightGrey ${montserratSemiBold.className}`}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Separator decorative />
            <Link href='/skills'>
              <NavigationMenuItem
                className='min-w-[100px] bg-footerBG  p-[4px] rounded-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink
                  className={`text-brightGrey ${montserratSemiBold.className}`}
                >
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Separator decorative />
            <Link href='/contact'>
              <NavigationMenuItem
                className='min-w-[100px] bg-footerBG  p-[4px] rounded-r-2xl rounded-l-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink
                  className={`text-brightGrey ${montserratSemiBold.className}`}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='mt-20 m-2 md:mx-40 lg:mx-60'>
          {projects.map((project, index) => (
            <ResponsiveWindow projectProp={project} key={index} />
          ))}
        </div>
        <section className='flex w-full  bg-gradient-to-b from-transparent from 30% via-liteBG via-10% to-niceOrange to-90%  mt-[-15px] md:mt-[-80px] lg:mt-[-10px] pt-[100px] mb-[-50px]' />
        {/* Footer */}
        <FooterPeaks />
        <footer className='grid grid-cols-1 w-full place-items-center bg-boxLite md:space-x-7'>
          <SeparatorFooter />
          <div className='flex items-center justify-center bg-boxLite md:space-x-7'>
            <LinkedinIcon />
            <GithubIcon />
            <p
              className={`mb-3 text-baseBG text-mg ${montserratBold.className}`}
            >
              &copy; {new Date().getFullYear()} Billy Townsend. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
