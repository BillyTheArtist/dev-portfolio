import Image from 'next/image'

export function HeroImage () {
  return (
    <div className=''>
      <Image src='/images/trueBlur.png' alt='hero' height={1024} width={1024} />
    </div>
  )
}
