'use client'
import { useState } from 'react'
import { Modal } from '@/components/Modal'
import { HeptaBox } from '@/components/HeptaBox'
import { ComputerIcon } from '@/components/icons/ComputerIcon'
import { MusicIcon } from '@/components/icons/MusicIcon'
import { CardIcon } from '@/components/icons/CardIcon'
import { BrushIcon } from '@/components/icons/BrushIcon'
import { useTheme } from '@/context/themeContext'
import { PageHero } from '@/components/PageHero'

export default function Home () {
  const { theme } = useTheme()

  let dynamicFont
  if (theme === 'light') {
    dynamicFont = 'font-semibold'
  } else {
    dynamicFont = 'font-normal'
  }

  let dynamicCircles
  if (theme === 'light') {
    dynamicCircles = 'url(/images/undulateBlue.svg)'
  } else {
    dynamicCircles = 'url(/images/undulateOrange.svg)'
  }

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const copyToClipboard = (text: any) => {
    const textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <div className={` ${theme} mt-[-56px] bg-backgroundMain `}>
      {/* Page Parent Box */}
      <div className='flex flex-col min-h-screen relative'>
        {/* Landing Box section-Text and Image */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center lg:mb-[50px]'>
          {/* Text half */}
          <div
            className={` ${theme} w-full h-full bg-gradient-to-b from-gradientStart to-gradientEnd md:bg-gradient-to-r from-gradientStart to-gradientEnd lg:bg-gradient-to-r from-gradientStart to-gradientEnd xl:bg-gradient-to-r from-gradientStart to-gradientEnd text-brightGrey flex justify-center `}
          >
            <div className='relative'>
              <div
                className={` ${theme} absolute top-0 -left-60 w-72 h-72 bg-blobLeft rounded-full opacity-50 blur-2xl animate-blob`}
              />
              <div
                className={` ${theme} absolute top-0 -left-20 w-72 h-72 bg-blobRight rounded-full opacity-50 blur-2xl animate-blob animation-delay-2000`}
              />
              <div
                className={` ${theme} absolute top-20 right-40 w-72 h-72 bg-blobBottom rounded-full opacity-50 blur-2xl animate-blob animation-delay-4000`}
              />
              <h1
                className={` ${theme} relative text-copyColor mt-40 md:mt-40 lg:mt-40 xl:mt-60 text-4xl  font-semibold`}
              >
                Billy Townsend
              </h1>

              <p
                className={` ${theme} relative text-copyColor text-2xl font-semibold `}
              >
                Software Engineer
              </p>
              <p
                className={` ${theme} relative text-copyAltColor mt-5 text-1xl leading-relaxed ${dynamicFont} `}
              >
                Experienced web developer
              </p>
              <p className={`${theme} relative text-copyAltColor text-1xl `}>
                Human Being
              </p>

              <p
                className={`mt-10 text-copyColor text-sm text-left leading-relaxed ${dynamicFont}`}
              >
                As a passionate web developer, I thrive on
                <br />
                the endless possibilities of programming.
                <br />
                My journey in this ever-evolving field has
                <br />
                been driven by a deep-seated enthusiasm
                <br />
                for crafting valuable digital experiences.
                <br />
                I&apos;m committed to transforming complex
                <br />
                concepts into user-friendly solutions.
                <br />
                Together, let&apos;s build success.
                <br />
              </p>
              <button
                onClick={openModal}
                className={`mt-10 ${theme} bg-buttonColor text-buttonText font-semibold py-2 px-4 rounded-3xl transition duration-300 ease-in-out`}
              >
                Contact Info
              </button>
            </div>
          </div>
          {/* Image half */}
          <div
            className={` ${theme} w-full h-full bg-gradientEnd flex items-end max-w-screen`}
          >
            <PageHero />
          </div>
        </section>
        <section
          className={`${theme} flex w-full  bg-gradient-to-b from-transparent from 30% via-bottomGradientStart via-10% to-bottomGradientEnd to-90% md:mb-[70px] mt-[-150px] md:mt-[-80px] lg:mt-[-100px] pt-[100px]`}
        >
          <span
            className={`flex w-full h-full justify-center items-center`}
            style={{
              backgroundImage: dynamicCircles,
              backgroundPosition: 'top',
              // backgroundSize: '800px',
              backgroundRepeat: 'repeat'
            }}
          >
            <div
              className={`max-w-[1470px] mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center justify-center`}
            >
              <HeptaBox>
                <ComputerIcon />
                <h1 className={`${theme} mb-1 text-copyColor text-xl `}>
                  Coding
                </h1>
                <p
                  className={`${theme} text-copyColor text-sm text-center tracking-tighter font-light ${dynamicFont}`}
                >
                  Programming is an avenue of expression
                  <br />
                  I find incredibly rewarding and fulfilling.
                  <br />
                  Each project is a learning experience.
                </p>
              </HeptaBox>
              <HeptaBox>
                <MusicIcon />
                <h1 className={`${theme} mb-1 text-copyColor text-xl `}>
                  Music
                </h1>
                <p
                  className={`${theme} text-copyColor text-sm text-center tracking-tighter font-light ${dynamicFont}`}
                >
                  I have always loved music and exploring all
                  <br />
                  the amazing places it can take us when we
                  <br />
                  play a favorite track or album.
                </p>
              </HeptaBox>
              <HeptaBox>
                <CardIcon />
                <h1 className={`${theme} mb-1 text-copyColor text-xl `}>
                  Card Games
                </h1>
                <p
                  className={`${theme} text-copyColor text-sm text-center tracking-tighter font-light ${dynamicFont}`}
                >
                  I am an avid enthusiast of tabletop games
                  <br />
                  with a preference for strategy and card
                  <br />
                  based games, i.e. Magic the Gathering.
                </p>
              </HeptaBox>
              <HeptaBox>
                <BrushIcon />
                <h1 className={`${theme} mb-1 text-copyColor text-xl `}>
                  Artwork
                </h1>
                <p
                  className={`${theme} text-copyColor text-sm text-center tracking-tighter font-light ${dynamicFont}`}
                >
                  Creating art starting at a young age, I have
                  <br />
                  cultivated skills in various physical media.
                  <br />
                  This allowed my creativity to grow.
                </p>
              </HeptaBox>
            </div>
          </span>
        </section>
      </div>
      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <div className=' grid grid-cols-1 gap-2 text-center'>
          <h2 className='text-xl font-semibold mb-4'>Billy Townsend</h2>
          <p className=''>
            (385) 265-2703{' '}
            <button onClick={() => copyToClipboard('(385) 265-2703')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-copy'
                width='18'
                height='18'
                viewBox='0 -3 24 24'
                stroke-width='2'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z'></path>
                <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
              </svg>
            </button>
          </p>
          <p className=''>
            billy.iv.art@gmail.com{' '}
            <button onClick={() => copyToClipboard('billy.iv.art@gmail.com')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-copy'
                width='18'
                height='18'
                viewBox='0 -3 24 24'
                stroke-width='2'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z'></path>
                <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
              </svg>
            </button>
          </p>
        </div>
      </Modal>
    </div>
  )
}
