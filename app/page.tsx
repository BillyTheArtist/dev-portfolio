'use client'
import React, { useState } from 'react'
import { Modal } from '@/components/Modal'

export default function Home () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='flex flex-col min-h-screen bg-baseGrey'>
      {/* Header */}
      <header className='py-6 bg-gradient-to-b from-zinc-200 to-transparent dark:from-inherit dark:via-zinc-800/30 dark:border-neutral-800/30'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-leagueSpartan text-center text-standardGrey'>
            Billy Townsend
          </h1>
          <p className='text-sm text-center text-standardGrey'>Web Developer</p>
        </div>
      </header>

      {/* Content */}
      <section className='container mx-auto p-4 flex-grow'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-gradient-to-r from-baseOrange to-niceOrange rounded-lg shadow-xl p-4 flex items-center justify-center'>
            <button
              onClick={openModal}
              className='bg-standardGrey hover:from-green-600 hover:to-green-800 text-nonBlack font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out'
            >
              Open the thing
            </button>
          </div>

          {/* Portfolio Item 2 */}
          <div className='bg-niceOrange text-nonBlack rounded-lg shadow-lg p-4'>
            From humble beginnings in the service industry, I&apos;ve expanded
            my horizons and began to achieve goals in the tech space. I&apos;m a
            self starter who has become passionate about programming and
            security technologies. I spend most of my time studying and refining
            my skills and knowledge around coding and software, but outside of
            that I&apos;m an artist and a lover of music. I also enjoy games
            both table-top and digital! The most important thing I can tell you
            about myself is that I value growth and self sufficiency highly.
          </div>

          {/* Portfolio Item 3 */}
          <div className='bg-white dark:bg-gradient-to-r from-niceOrange to-baseOrange rounded-lg shadow-lg p-4'>
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
      <footer className='py-4 bg-gradient-to-t from-white via-white dark:from-blueGrey dark:via-baseGrey'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-standardGrey'>
            &copy; {new Date().getFullYear()} Billy Townsend. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
