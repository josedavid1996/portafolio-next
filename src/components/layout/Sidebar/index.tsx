import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

import Icon from '@components/shared/Icon'
import { isMobile } from '@utils/isMobile'

const variants = {
  open: { width: '300px' },
  closed: { width: '50px' }
}
const variantsIconCenter = {
  open: { opacity: 0 },

  closed: { opacity: 1 }
}
const variantsIcontop = {
  open: { rotate: '40deg', y: 6 },

  closed: { rotate: '0deg' }
}
const variantsIconBottom = {
  open: { rotate: '-40deg', y: -6 },
  closed: { rotate: '0deg' }
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { locale, pathname } = useRouter()
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [pathname])

  // const refSadibar = useRef(null)

  return (
    <div className="fixed md:static  min-h-full top-0 bottom-0 z-30">
      <motion.nav
        className="relative min-h-full flex cursor-pointer"
        onMouseEnter={(e) => setIsOpen(true)}
        onMouseLeave={(e) => setIsOpen(false)}
      >
        <motion.ul
          initial={{ width: '50px' }}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className=" bg-[#000]  z-30 p-2 pt-22 flex flex-col gap-4 min-h-full"
        >
          <span
            className="absolute top-5 right-[5.6px] w-10 h-10 bg-primary rounded-full flex justify-center items-center cursor-pointer flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="w-5 min-h-[2px] bg-white rounded-full"
              animate={isOpen ? 'open' : 'closed'}
              variants={variantsIcontop}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-5 min-h-[2px] bg-white rounded-full"
              animate={isOpen ? 'open' : 'closed'}
              variants={variantsIconCenter}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-5 min-h-[2px] bg-white rounded-full"
              animate={isOpen ? 'open' : 'closed'}
              variants={variantsIconBottom}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </span>
          <Link href="/" passHref>
            <li className="flex gap-3 items-center bg-primary px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#2195f3c6] cursor-pointer transition-all duration-500">
              <div className="min-w-40px">
                <Icon name="home" className=" text-[18px] text-[#fff]" />
              </div>
              <a className=" text-[#fff] font-semibold">
                {locale === 'es'
                  ? 'Inicio'
                  : locale === 'en'
                  ? 'Home'
                  : 'Début'}
              </a>
            </li>
          </Link>
          <Link href="/about" passHref>
            <li className="flex gap-3 items-center bg-primary px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#2195f3c6] cursor-pointer transition-all duration-500 max-h-[34px]">
              <div className="min-w-40px">
                <Icon name="user" className=" text-[18px] text-[#fff]" />
              </div>
              <a className=" text-[#fff] font-semibold ">
                {locale === 'es'
                  ? 'Acerca de mi'
                  : locale === 'en'
                  ? 'About'
                  : 'Sur moi'}
              </a>
            </li>
          </Link>
          <Link href="/specialties" passHref>
            <li className="flex gap-3 items-center bg-primary px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#2195f3c6] cursor-pointer transition-all duration-500">
              <div className="min-w-40px">
                <Icon name="gear" className=" text-[18px] text-[#fff]" />
              </div>
              <a className=" text-[#fff] font-semibold">
                {locale === 'es'
                  ? 'Especialidades'
                  : locale === 'en'
                  ? 'Specialties'
                  : 'Spécialités'}
              </a>
            </li>
          </Link>
          <Link href="/project" passHref>
            <li className="flex gap-3 items-center bg-primary px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#2195f3c6] cursor-pointer transition-all duration-500">
              <div className="min-w-40px">
                <Icon name="project" className=" text-[18px] text-[#fff]" />
              </div>
              <a className=" text-[#fff] font-semibold">
                {locale === 'es'
                  ? 'Proyectos'
                  : locale === 'en'
                  ? 'Projects'
                  : 'Projets'}
              </a>
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li className="flex gap-3 items-center bg-primary px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#2195f3c6] cursor-pointer transition-all duration-500">
              <div className="min-w-40px">
                <Icon name="contact" className=" text-[18px] text-[#fff]" />
              </div>
              <a className=" text-[#fff] font-semibold">
                {locale === 'es'
                  ? 'Contacto'
                  : locale === 'en'
                  ? 'Contact'
                  : 'Contact'}
              </a>
            </li>
          </Link>
        </motion.ul>
      </motion.nav>
    </div>
  )
}

export default Sidebar
