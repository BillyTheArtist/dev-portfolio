'use client'
import { useState } from 'react'
import { Modal } from '@/components/Modal'
import { HeptaBox } from '@/components/HeptaBox'
import { FooterPeaks } from '@/components/FooterPeaks'
import { ComputerIcon } from '@/components/icons/ComputerIcon'
import { MusicIcon } from '@/components/icons/MusicIcon'
import { CardIcon } from '@/components/icons/CardIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { SeparatorFooter } from '@/components/ui/SeparatorFooter'
import Image from 'next/image'
import { BrushIcon } from '@/components/icons/BrushIcon'

{
  /* Fonts */
}

export default function Home () {
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
    <div className='mt-[-56px]'>
      {/* Page Parent Box */}
      <div className='flex flex-col min-h-screen relative'>
        {/* Landing Box section-Text and Image */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center'>
          {/* Text half */}
          <div className='w-full h-full bg-gradient-to-b from-nonBlack to-almostBlack md:bg-gradient-to-r from-nonBlack to-almostBlack lg:bg-gradient-to-r from-nonBlack to-almostBlack xl:bg-gradient-to-r from-nonBlack to-almostBlack text-brightGrey flex justify-center '>
            <div className='relative'>
              <div className='absolute top-0 -left-20 w-72 h-72 bg-negativeOrange rounded-full opacity-50 blur-2xl animate-blob animation-delay-2000' />
              <div className='absolute top-0 -left-60 w-72 h-72 bg-niceOrange rounded-full opacity-50 blur-2xl animate-blob' />
              <div className='absolute top-20 right-40 w-72 h-72 bg-boxLite rounded-full opacity-50 blur-2xl animate-blob animation-delay-4000' />
              <h1
                className={`text-standardGrey mt-40 md:mt-40 lg:mt-40 xl:mt-60 text-4xl mix-blend-screen font-semibold`}
              >
                Billy Townsend
              </h1>
              <p
                className={`text-standardGrey text-2xl mix-blend-screen font-semibold`}
              >
                Software Engineer
              </p>
              <p
                className={`text-niceOrange mt-5 text-1xl leading-relaxed mix-blend-screen`}
              >
                Experienced web developer
              </p>
              <p className={`text-niceOrange text-1xl mix-blend-screen`}>
                Human Being
              </p>

              <p
                className={`mt-10 text-standardGrey text-sm text-left leading-relaxed font-light`}
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
                className='mt-10 bg-buttonOrange text-brightGrey font-semibold py-2 px-4 rounded-3xl transition duration-300 ease-in-out'
              >
                Contact Info
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
        </section>
        <section
          className={` flex w-full  bg-gradient-to-b from-transparent from 30% via-baseBG via-10% to-liteBG to-90%  mt-[-150px] md:mt-[-80px] lg:mt-[-100px] pt-[100px]`}
        >
          <span
            className={`flex w-full h-full justify-center items-center`}
            style={{
              backgroundImage: 'url(/images/circleSkatter.svg)',
              backgroundPosition: 'top',
              backgroundRepeat: 'repeat'
            }}
          >
            <div
              className={`max-w-[1470px] mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center justify-center`}
            >
              <HeptaBox>
                <ComputerIcon />
                <h1 className={`mb-3 text-brightGrey text-xl `}>Coding</h1>
                <p
                  className={` text-brightGrey text-sm text-center leading-relaxed font-light`}
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
                <h1 className={`mb-3 text-brightGrey text-xl`}>Music</h1>
                <p
                  className={` text-brightGrey text-sm text-center leading-relaxed font-light`}
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
                <h1 className={`mb-3 text-brightGrey text-xl `}>Card Games</h1>
                <p
                  className={` text-brightGrey text-sm text-center leading-relaxed font-light`}
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
                <h1 className={`mb-3 text-brightGrey text-xl`}>Artwork</h1>
                <p
                  className={` text-brightGrey text-sm text-center leading-relaxed font-light`}
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
        <div className='grid grid-cols-1 gap-2 text-center'>
          <h2 className='text-xl text-brightGrey font-semibold mb-4'>
            Billy Townsend
          </h2>
          <p className='text-brightGrey'>
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
          <p className='text-brightGrey'>
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
