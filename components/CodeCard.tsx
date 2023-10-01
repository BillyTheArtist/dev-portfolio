import React, { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  description: string;
}

export function CodeCard({ title, icon, description }: Props) {
  return (
    <div className={` m-3 p-4`}>
      <div className="flex items-center mb-9">
        {icon}
        <h1 className="text-xl">{title}</h1>
      </div>
      {description}
    </div>
  );
}
