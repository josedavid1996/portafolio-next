import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: ReactNode
}

const LayoutPage: FC<Props> = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <div className="pl-[62px] mt-[50px]  md:mt-[80px] pr-3 md:p-5 text-white w-full">
        <h1 className="text-2xl text-primary  sm:text-5xl mb-7  uppercase  font-black  text-left ">
          {title}
        </h1>
        {children}
      </div>
    </div>
  )
}

export default LayoutPage
