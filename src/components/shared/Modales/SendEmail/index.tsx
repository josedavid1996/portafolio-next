/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Button from '@components/shared/Button'
import Heading from '@components/shared/Heading'
import Modal from '@components/shared/Modal'
import { useRouter } from 'next/router'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SendEmail = ({ isOpen, onClose }: Props) => {
  const { push } = useRouter()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose()
      push('/')
    }, 6000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="bg-[#111111] border-2 border-primary max-w-[80%] md:max-w-[60%] p-8 rounded-lg">
          <Heading size="sm" color="primary" className="text-center">
            Gracias por tu interes te contactare lo antes posible
          </Heading>
          <Button
            className="mx-auto mt-4"
            onClick={() => {
              onClose()
              push('/')
            }}
          >
            Cerrar
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default SendEmail
