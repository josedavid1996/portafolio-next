import React from 'react'
import { motion } from 'framer-motion'
import Icon, { IconName } from '@components/shared/Icon'
import Heading from '@components/shared/Heading'
import LayoutPage from '@components/layout/LayoutPage'

const logos = [
  {
    nombre: 'html',
    color: 'text-[#E34F26]',
    border: 'border-[#E34F26]'
  },
  {
    nombre: 'css',
    color: 'text-[#264DE4]',
    border: 'border-[#264DE4]'
  },
  {
    nombre: 'react',
    color: 'text-[#61dafb]',
    border: 'border-[#61dafb]'
  },
  {
    nombre: 'typescript',
    color: 'text-[#2F74C0]',
    border: 'border-[#2F74C0]'
  },
  {
    nombre: 'next',
    color: 'text-white',
    border: 'border-white'
  },
  {
    nombre: 'graphql',
    color: 'text-[#ff4081]',
    border: 'border-[#ff4081]'
  },
  {
    nombre: 'wordpress',
    color: 'text-[#61ABEA]',
    border: 'border-[#61ABEA]'
  },
  {
    nombre: 'bootstrap',
    color: 'text-[#7E0BF6]',
    border: 'border-[#7E0BF6]'
  },
  {
    nombre: 'tailwind',
    color: 'text-[#00acc1]',
    border: 'border-[#00acc1]'
  }
]

interface Props {
  titleName: string
}

const Specialties = ({ titleName }: Props) => {
  return (
    <>
      <LayoutPage title={titleName} className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-15 w-full ">
          {logos.map((item) => (
            <div key={item.nombre}>
              <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] relative mx-auto">
                <motion.div
                  className={`box w-full h-full border-2 ${item.border} `}
                  animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['10%', '10%', '50%', '50%', '10%']
                  }}
                  transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                ></motion.div>
                <Icon
                  name={item.nombre as IconName}
                  className={`w-[60%] h-[60%] ${item.color} absolute top-[20%] left-[20%]`}
                />
              </div>
              <Heading
                size="sm"
                color="white"
                className="capitalize text-center mt-4"
              >
                {item.nombre}
              </Heading>
            </div>
          ))}
        </div>
      </LayoutPage>
    </>
  )
}

export default Specialties

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      titleName: response.default.specialties.titleName
    }
  }
}
