import React, { useState } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import Button from '@components/shared/Button'
import LayoutPage from '@components/layout/LayoutPage'
import Input from '@components/shared/Input'
import Text from '@components/shared/Text'
import TextTarea from '@components/shared/TextTarea'
import useForm from '@hooks/useForm'
import { useRouter } from 'next/router'

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delay: 1
    }
  }
}

interface Props {
  titleName: string
  sendParagram: string
  labelFirst: string
  labelSecond: string
  labelThird: string
  textButton: string
}

const Contact = ({
  titleName,
  sendParagram,
  labelFirst,
  labelSecond,
  labelThird,
  textButton
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { push } = useRouter()

  const { values, setField, ...form } = useForm({
    initialValues: {
      nombre: '',
      correo: '',
      mensaje: ''
    }
  })
  const handleSubmit = async () => {
    setIsLoading(true)
    const res = await fetch('/api/send-form', {
      method: 'POST',
      body: JSON.stringify(values)
    })

    const data = await res.json()
    if (data.res) {
      setIsLoading(false)
      setIsOpen(true)
      setTimeout(() => {
        push('/')
      }, 5000)
    } else {
      setIsLoading(false)
    }
    console.log(data)
  }
  return (
    <LayoutPage title={titleName} className="relative w-full ">
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        initial={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          borderRadius: '50%'
        }}
        transition={{ duration: 1 }}
        variants={{
          open: {
            opacity: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.80)',
            top: '0',
            left: '0',
            borderRadius: '0'
          },
          closed: {
            opacity: 0
          }
        }}
        className="z-30 flex justify-center items-center"
      >
        <div className="">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle"
            viewBox="0 0 16 16"
            variants={svgVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
          >
            <motion.path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              variants={pathVariants}
            />
            <motion.path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
              variants={pathVariants}
            />
          </motion.svg>
        </div>
      </motion.div>

      <div className="w-[90%]  max-w-[500px] mx-auto  items-center pb-20 sm:pb-4">
        <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mx-auto mb-5">
          <Image
            className="w-full h-full"
            src="/avatar.png"
            layout="fill"
            alt="logo"
          />
        </div>

        <Text color="white" className="mb-5 text-center">
          {sendParagram}
        </Text>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-6"
        >
          <Input
            autoComplete="off"
            label={labelFirst}
            {...form.inputProps('nombre')}
          />
          <Input
            autoComplete="off"
            label={labelSecond}
            {...form.inputProps('correo')}
          />

          <TextTarea
            rows={5}
            className="h-full"
            label={labelThird}
            name="mensaje"
            value={values.mensaje}
            onChange={(e) => setField('mensaje', e.target.value)}
          ></TextTarea>

          <Button isLoading={isLoading} type="submit">
            {textButton}
          </Button>
        </form>
      </div>
    </LayoutPage>
  )
}

export default Contact

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      titleName: response.default.contact.titleName,
      sendParagram: response.default.contact.sendParagram,
      labelFirst: response.default.contact.labelFirst,
      labelSecond: response.default.contact.labelSecond,
      labelThird: response.default.contact.labelThird,
      textButton: response.default.contact.textButton
    }
  }
}
