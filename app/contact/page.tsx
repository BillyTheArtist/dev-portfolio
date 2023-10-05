'use client'
import { ContactForm } from '@/components/ContactForm'

export default function HomePage () {
  return (
    <div className='flex justify-center min-h-[calc(100vh-177px)] items-center font-bold'>
      <div className='flex flex-col align-middle items-center'>
        <ContactForm />
      </div>
    </div>
  )
}
