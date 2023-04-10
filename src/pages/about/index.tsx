import Image from 'next/image'
import React from 'react'

interface Props {
  titleName: string
  paragram: string
}

const About = ({ titleName, paragram }: Props) => {
  return (
    <>
      <div className="pl-[62px] mt-[50px]  md:mt-[100px] pr-3 md:p-5 text-white ">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <div className="flex flex-col gap-2 pb-4 sm:pb-0">
              <h1 className="text-3xl text-primary  sm:text-6xl mb-4  uppercase  font-black  text-left">
                {titleName}
              </h1>
              <div className=" md:hidden ">
                <Image
                  alt="avatar"
                  src="/avatar.png"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
              <p>{paragram}</p>
            </div>
          </div>
          <div className="hidden md:block md:min-w-[50%]">
            <Image
              alt="avatar"
              src="/avatar.png"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      titleName: response.default.about.titleName,
      paragram: response.default.about.paragram
    }
  }
}
