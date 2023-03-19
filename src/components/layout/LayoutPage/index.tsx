import React, { FC, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const LayoutPage: FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className="pl-[62px] mt-[50px]  md:mt-[80px] pr-3 md:p-5 text-white w-full">
        <h1 className="text-2xl text-primary  sm:text-5xl mb-7  uppercase  font-black  text-left ">
          {title}
        </h1>
        {children}
      </div>
    </>
  )
}

export default LayoutPage
