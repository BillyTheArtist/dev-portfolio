'use client'
import React, { useState } from 'react'
import { Modal } from '@/components/Modal'
import { Roboto_Slab, Montserrat } from 'next/font/google'
import Image from 'next/image'

{
  /* Fonts */
}
const roboto = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin']
})
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

export default function Home () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className={montserrat.className}>
      {/* Page Parent Box */}
      <div className='flex flex-col min-h-screen bg-gradient-to-b from-baseBG to-liteBG'>
        {/* Landing Box container-Text and Image */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center'>
          {/* Text half */}
          <div className='w-full h-full bg-gradient-to-b from-nonBlack to-almostBlack md:bg-gradient-to-r from-nonBlack to-almostBlack lg:bg-gradient-to-r from-nonBlack to-almostBlack xl:bg-gradient-to-r from-nonBlack to-almostBlack text-brightGrey flex justify-center '>
            <div className='relative'>
              <div className='absolute top-0 -left-20 w-72 h-72 bg-negativeOrange rounded-full opacity-50 blur-2xl animate-blob animation-delay-2000' />
              <div className='absolute top-0 -left-60 w-72 h-72 bg-niceOrange rounded-full opacity-50 blur-2xl animate-blob' />
              <div className='absolute top-20 right-40 w-72 h-72 bg-boxLite rounded-full opacity-50 blur-2xl animate-blob animation-delay-4000' />
              <h1
                className={`text-standardGrey mt-40 md:mt-40 lg:mt-40 xl:mt-60 text-4xl mix-blend-screen ${montserratSemiBold.className}`}
              >
                Billy Townsend
              </h1>
              <p
                className={`text-standardGrey text-2xl mix-blend-screen ${montserratSemiBold.className}`}
              >
                Software Engineer
              </p>
              <p
                className={`text-niceOrange mt-5 text-1xl leading-relaxed mix-blend-screen  ${montserrat.className}`}
              >
                Industry contemporary software
              </p>
              <p
                className={`text-niceOrange text-1xl mix-blend-screen ${montserrat.className}`}
              >
                Cadmium
              </p>

              <p
                className={`mt-10 text-standardGrey text-sm text-left leading-relaxed ${montserratLight.className}`}
              >
                Blockchain web apps, as well as dynamic
                <br />
                marketing sites. With an eye for
                <br />
                innovation and a passion for staying
                <br />
                on the cutting edge of web development,
                <br />
                I&apos;m committed to transforming complex
                <br />
                concepts into user-friendly solutions.
                <br />
                Let&apos;s collaborate on your next project
                <br />
                and bring your vision to life.
              </p>
              <button
                onClick={openModal}
                className='mt-10 bg-buttonOrange text-brightGrey font-semibold py-2 px-4 rounded-3xl transition duration-300 ease-in-out'
              >
                Open the thing
              </button>
            </div>
          </div>
          {/* Image half */}
          <div className='w-full h-full bg-almostBlack flex items-end max-w-screen'>
            <div className=''>
              <Image
                src='/images/trueBlur.png'
                alt='hero'
                height={1024}
                width={1024}
              />
            </div>
          </div>
        </div>

        <div className='flex mx-auto space-x-8'>
          <div className='w-80 h-80 bg-cover bg-center bg-[url("/images/sevenSided.svg")] flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-device-desktop-analytics svg-custom-fill mt-16'
              width='72'
              height='72'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z'></path>
              <path d='M7 20h10'></path>
              <path d='M9 16v4'></path>
              <path d='M15 16v4'></path>
              <path d='M9 12v-4'></path>
              <path d='M12 12v-1'></path>
              <path d='M15 12v-2'></path>
              <path d='M12 12v-1'></path>
            </svg>
          </div>
          <div className='w-80 h-80 bg-cover bg-center bg-[url("/images/sevenSided.svg")]'></div>
          <div className='w-80 h-80 bg-cover bg-center bg-[url("/images/sevenSided.svg")]'></div>
          <div className='w-80 h-80 bg-cover bg-center bg-[url("/images/sevenSided.svg")]'></div>
        </div>

        {/* Content */}
        <section className='container mx-auto p-4 flex-grow'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-baseBox rounded-lg shadow-xl p-4 flex items-center justify-center'></div>

            {/* Portfolio Item 2 */}
            <div className='bg-baseBox rounded-lg shadow-lg p-6'>
              <h1
                className={`text-xl text-left ml-1 text-niceOrange mb-3 ${montserratExtraBold.className}`}
              >
                Front-End Developer with a Crypto Edge
              </h1>
              <div
                className={`border-2 border-solid text-brightGrey border-baseOrange shadow-sm p-4 rounded-lg text-sm text-center leading-relaxed ${montserratSemiBold.className}`}
              >
                As a dedicated front-end developer, I specialize in creating
                seamless UIs and captivating experiences for crypto and
                blockchain web apps, as well as dynamic marketing sites. With an
                eye for innovation and a passion for staying on the cutting edge
                of web development, I&apos;m committed to transforming complex
                concepts into user-friendly solutions. Let&apos;s collaborate on
                your next project and bring your vision to life.
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className='bg-baseBox rounded-lg shadow-lg p-4'>
              {/* portfolio content */}
            </div>
          </div>
        </section>

        {/* Modal */}
        <Modal isOpen={isModalOpen} handleClose={closeModal}>
          <div className='text-center'>
            <h2 className='text-xl font-semibold mb-4'>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
        </Modal>

        {/* Footer */}
        <footer className='py-4 bg-footerBG'>
          <div className='container mx-auto px-4 text-center'>
            <p
              className={` text-brightGrey text-sm ${montserratSemiBold.className}`}
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
