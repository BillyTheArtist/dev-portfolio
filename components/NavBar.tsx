'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export function NavBar () {
  return (
    <header className='h-[56px] fixed z-50 py-1'>
      <div className=' w-[100vw] flex justify-center z-50 items-center'>
        <NavigationMenu className='text-[17px] '>
          <NavigationMenuList className=' bg-footerBG p-2 rounded-full'>
            <Link href='/'>
              <NavigationMenuItem
                className='min-w-[80px] bg-footerBG font-semibold p-[4px] rounded-l-2xl rounded-r-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink className={`text-brightGrey`}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Separator decorative />
            <Link href='/myprojects'>
              <NavigationMenuItem
                className='min-w-[80px] bg-footerBG font-semibold  p-[4px] rounded-l-2xl rounded-r-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink className={`text-brightGrey`}>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Separator decorative />
            <Link href='/skills'>
              <NavigationMenuItem
                className='min-w-[80px] bg-footerBG font-semibold p-[4px] rounded-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink className={`text-brightGrey`}>
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Separator decorative />
            <Link href='/contact'>
              <NavigationMenuItem
                className='min-w-[80px] bg-footerBG font-semibold p-[4px] rounded-r-2xl rounded-l-[2px] text-center transition-shadow hover:shadow-boxGlow'
                style={{ transitionDuration: '0.4s' }}
              >
                <NavigationMenuLink className={`text-brightGrey`}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
