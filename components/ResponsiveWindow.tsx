import Image from 'next/image'

//Types
interface Props {
  title: string
  image: string
  description: string
  link: string
  gradient: string
}

export const ResponsiveWindow = ({
  image,
  title,
  description,
  link,
  gradient
}: Props) => {
  return (
    <div
      //   w='full'
      //   align='center'
      //   padding='6'
      //   backgroundColor='box-bg-primary'
      //   boxShadow='box-shadow-primary'
      //   rounded='lg'
      //   direction='column'
      className=' bg-nonBlackGrey w-full p-6 rounded-lg flex flex-col items-center shadow-around'
    >
      <div className=' rounded-lg cursor-pointer w-full z-1 relative'>
        <div className='flex flex-col items-center h-[500px] relative'>
          <div className=' max-h-[500px] after:transition-all duration-300 ease-in-out after:w-full after:h-full after:absolute after:rounded-lg after:left-0 after:top-0 after:blur-lg after:z-negative-1'>
            <Image
              src={image}
              alt='hero'
              border-radius='lg'
              draggable={false}
              objectFit='contain'
              fill
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className=' text-2xl'>{title}</h1>
        <p>{description}</p>
        <a href='www.google.com'>
          <p color='brand-orange'>{link}</p>
        </a>
      </div>
    </div>
  )
}
