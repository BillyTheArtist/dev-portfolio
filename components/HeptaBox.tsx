import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function HeptaBox({ children }: Props) {
  return (
    <div className='w-80 h-80 bg-cover bg-center bg-[url("/images/sevenSided.svg")] flex flex-col items-center'>
      {children}
    </div>
  );
}
