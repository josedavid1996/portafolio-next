import Button from '@components/shared/Button'
import Icon from '@components/shared/Icon'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <header className="w-full ">
        <div className="flex justify-between max-w-5xl mx-auto p-4 relative items-center">
          <a className="logo relative w-[31px] h-[34px]">
            <Image
              src="/logo.png"
              alt="Logo"
              className="w-full h-full"
              layout="fill"
            />
          </a>

          <div
            className={`${
              isActive ? 'left-0' : 'left-[-100%]'
            } absolute flex flex-col top-[66px] bg-primary-100 w-full md:w-auto  transition-all duration-1000 md:static md:flex-row bg-primary-50`}
          >
            <a
              href="#inicio"
              className="text-white hover:text-primary transition-all duration-500 py-2 px-4"
            >
              Inicio
            </a>
            <a
              href="#acerca"
              className="text-white hover:text-primary transition-all duration-500 py-2 px-4"
            >
              Acerca de mi
            </a>
            <a
              href="#portafolio"
              className="text-white hover:text-primary transition-all duration-500 py-2 px-4"
            >
              Proyectos
            </a>
          </div>

          <Icon
            name="menu"
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setIsActive(!isActive)}
          />

          <div className="hidden md:block">
            <Button>Contactame</Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
