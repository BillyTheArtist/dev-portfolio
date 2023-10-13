import React, { ReactNode } from 'react'
import { Skill } from '@/types/skill'
import { useTheme } from '@/context/themeContext'

interface Props {
  skillProp: Skill
}

export function CodeCard ({ skillProp }: Props) {
  const { theme } = useTheme()

  const { icon, skill, description } = skillProp
  return (
    <div className={`m-3 p-4`}>
      <div
        className={`${theme} flex items-center mb-9 p-[6px] bg-skillBackground`}
        style={{
          borderRadius: '6px'
        }}
      >
        {icon}
        <h1 className={`${theme}  ml-[6px] text-xl`}>{skill}</h1>
      </div>
      {description}
    </div>
  )
}
