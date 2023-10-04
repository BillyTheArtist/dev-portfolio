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
      </div>
    </main>
  )
}
