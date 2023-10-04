'use client'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { JSIcon } from '@/components/icons/JSIcon'
import { TSIcon } from '@/components/icons/TSIcon'
import { NextIcon } from '@/components/icons/NextIcon'
import { CodeCard } from '@/components/CodeCard'
import { skills } from './data'
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

const montserratLight = Montserrat({
  weight: '300',
  subsets: ['latin']
})
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
const montserratExtraBold = Montserrat({
  weight: '800',
  subsets: ['latin']
})

export default function HomePage () {
  return (
    <main className={montserrat.className}>
      <div className='flex flex-col min-h-screen bg-altBG'>
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
            <Link href='/myprojects'>
              <NavigationMenuItem
                className='min-w-[100px] bg-footerBG  p-[4px] rounded-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink
                  className={`text-brightGrey ${montserratSemiBold.className}`}
                >
                  Projects
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
        <div
          className={` text-sm text-brightGrey lg:p-10 lg:m-40 bg-gradient-to-b from-hiBG to-blueGrey shadow-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 leading-relaxed ${montserratSemiBold.className}`}
        >
          {skills.map((skill, index) => (
            <CodeCard skillProp={skill} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
