import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project'

//Types
interface Props {
  projectProp: Project
}

export const ResponsiveWindow = ({ projectProp }: Props) => {
  const {
    gradient,
    descriptionGradient,
    link,
    glow,
    title,
    titleColor,
    image,
    description
  } = projectProp
  const backgroundStyles = {
    backgroundImage: `url(${gradient})`
  }
  const descriptionBackgroundStyles = {
    backgroundImage: `url(${descriptionGradient})`
  }
  return (
    <Link href={link} passHref target='_blank' rel='noopener noreferrer'>
      <div
        className={`mb-2 md:mb-10 shadow-around transition-shadow ${glow} transition-transform transform hover:scale-103 rounded-xl`}
        style={{ transitionDuration: '0.7s' }}
      >
        <div
          className={`bg-cover bg-center w-full rounded-t-xl flex flex-col items-center  `}
          style={{
            ...backgroundStyles
          }}
        >
          <h1 className={`text-2xl lg:text-3xl mt-6 ${titleColor}`}>
            {title}
          </h1>
          <div className=' rounded-xl cursor-pointer w-full z-1 relative'>
            <div className='flex flex-col items-center h-[200px] md:h-[300px] lg:h-[500px] relative'>
              <div className=' max-h-[500px] after:transition-all duration-300 ease-in-out after:w-full after:h-full after:absolute after:rounded-lg after:left-0 after:top-0 after:blur-lg after:z-negative-1 '>
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
        </div>
        <div
          className={`w-full bg-cover bg-center h-[120px] rounded-b-xl flex justify-center items-center text-brightGrey text-md p-4`}
          style={{
            ...descriptionBackgroundStyles
          }}
        >
          {description}
        </div>
      </div>
    </Link>
  )
}
