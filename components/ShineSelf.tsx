'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export function ShineSelf () {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Image className='relative lg:right-[65px] lg:top-[105px]' src='/images/blobSelf.png' alt='hero' height={512} width={512} />
    </div>
  )
}
