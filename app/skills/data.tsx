import { Skill } from '@/types/skill'
import { TSIcon } from '@/components/icons/TSIcon'
import { NextIcon } from '@/components/icons/NextIcon'
import { ReactIcon } from '@/components/icons/ReactIcon'
import { NodejsIcon } from '@/components/icons/NodejsIcon'
import { GithubSkillIcon } from '@/components/icons/GithubSkillIcon'
import { TailwindIcon } from '@/components/icons/TailwindIcon'

export const skills: Skill[] = [
  {
    icon: <TSIcon className='lg:mr-3' />,
    skill: 'TypeScript',
    description:
      'Proficient in Typescript, I bring type safety and enhanced code quality to my web development projects. With Typescript, I can catch errors early, leading to more reliable and maintainable code.'
  },
  {
    icon: <NextIcon className='lg:mr-3' />,
    skill: 'Nextjs',
    description:
      'I specialize in Next.js, a powerful React framework that allows me to build fast and SEO-friendly web applications. I leverage Next.js server-side rendering and routing capabilities to create seamless user experiences.'
  },
  {
    icon: <ReactIcon className='lg:mr-3' />,
    skill: 'React',
    description:
      'As a skilled React developer, I excel in building interactive and responsive user interfaces. My expertise in React enables me to create dynamic web applications that engage users and deliver exceptional performance.'
  },
  {
    icon: <NodejsIcon className='lg:mr-3' />,
    skill: 'Nodejs',
    description:
      'With Node.js, I am adept at building scalable and server-side applications. My knowledge of Node.js and its extensive ecosystem allows me to develop robust backends that seamlessly integrate with frontend technologies.'
  },
  {
    icon: <GithubSkillIcon className='lg:mr-3' />,
    skill: 'Github',
    description:
      'Experienced in GitHub, I use this collaborative platform for version control and project management. I am experienced in creating repositories, managing branches, and collaborating with other developers to ensure efficient code development.'
  },
  {
    icon: <TailwindIcon className='lg:mr-3' />,
    skill: 'Tailwind',
    description:
      'I have a deep understanding of Tailwind CSS, a utility-first CSS framework. Tailwind allows me to rapidly style web applications with a clean and maintainable codebase, resulting in beautiful and functional designs.'
  }
]
