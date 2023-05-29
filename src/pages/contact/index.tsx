import React, { useState } from 'react'

import Image from 'next/image'

import axios from 'axios'

import Button from '@components/shared/Button'
import LayoutPage from '@components/layout/LayoutPage'
import Input from '@components/shared/Input'
import Text from '@components/shared/Text'
import TextTarea from '@components/shared/TextTarea'
import SendEmail from '@components/shared/Modales/SendEmail'

import useForm from '@hooks/useForm'
import useToggle from '@hooks/useToggle'
import { Toast } from '@utils/Toast'

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
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onClose, onToggle } = useToggle()

  const { values, setField, ...form } = useForm({
    initialValues: {
      nombre: '',
      correo: '',
      mensaje: ''
    }
  })
  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('https://formspree.io/mayabqbl', {
        name: values.nombre,
        email: values.correo,
        message: values.mensaje
      })
      if (response.status) {
        setIsLoading(false)
        onToggle()
        form.clear()
      }
    } catch (error) {
      Toast({ type: 'error', message: 'Error desconocido' })
      setIsLoading(false)
    }
  }
  return (
    <LayoutPage title={titleName} className="relative w-full ">
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
          <Input label={labelFirst} {...form.inputProps('nombre')} />
          <Input label={labelSecond} {...form.inputProps('correo')} />

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
      {isOpen && <SendEmail isOpen={isOpen} onClose={onClose} />}
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
