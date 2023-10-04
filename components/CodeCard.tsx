import React, { ReactNode } from "react";
import { Skill } from '@/types/skill'


interface Props {
  skillProp: Skill
}

export function CodeCard({ skillProp }: Props) {
  const {
    icon, skill, description
  } = skillProp
  return (
    <div className={` m-3 p-4`}>
      <div className="flex items-center mb-9">
        {icon}
        <h1 className="text-xl">{skill}</h1>
      </div>
      {description}
    </div>
  );
}
