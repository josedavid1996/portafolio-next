import React from 'react'
import { motion } from 'framer-motion'
import Icon, { IconName } from '@components/shared/Icon'
import Heading from '@components/shared/Heading'

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

const Specialties = () => {
  return (
    <>
      <div className="pl-[62px] mt-[50px]  md:mt-[80px] pr-3 md:p-5 text-white w-full">
        <h1 className="text-2xl text-primary  sm:text-5xl mb-7  uppercase  font-black  text-left ">
          Especialidades
        </h1>
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

        {/* <div className="w-[130px] h-[130px] relative">
          <motion.div
            className="box w-full h-full border-2 border-primary "
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
            name="html"
            className="w-[60%] h-[60%] text-primary absolute top-[20%] left-[20%]"
          />
          <Heading>React</Heading>
        </div> */}
      </div>
    </>
  )
}

export default Specialties
