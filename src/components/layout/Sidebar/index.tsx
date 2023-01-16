import Icon from '@components/shared/Icon'
import { useState } from 'react'
import { motion } from 'framer-motion'
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
  return (
    <div>
      <motion.nav className="relative">
        <motion.ul
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#06052F]  z-30 p-2 pt-10 flex flex-col gap-4"
        >
          <li className="flex gap-3 items-center bg-[#ffffff37] px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#ffffff7d] cursor-pointer transition-all duration-500">
            <div className="min-w-40px">
              <Icon name="home" className="text-white text-[18px]" />
            </div>
            <a className=" text-white font-semibold">Home</a>
          </li>
          <li className="flex gap-3 items-center bg-[#ffffff37] px-[8px] py-[5px] rounded-[8px] overflow-hidden hover:bg-[#ffffff7d] cursor-pointer transition-all duration-500">
            <div className="min-w-40px">
              <Icon name="home" className="text-white text-[18px]" />
            </div>
            <a className="text-white font-semibold">About</a>
          </li>
        </motion.ul>
        <span
          className="absolute bottom-3 right-[5.6px] w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="w-5 min-h-[2px] bg-primary-400 rounded-full"
            animate={isOpen ? 'open' : 'closed'}
            variants={variantsIcontop}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="w-5 min-h-[2px] bg-primary-400 rounded-full"
            animate={isOpen ? 'open' : 'closed'}
            variants={variantsIconCenter}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="w-5 min-h-[2px] bg-primary-400 rounded-full"
            animate={isOpen ? 'open' : 'closed'}
            variants={variantsIconBottom}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </span>
      </motion.nav>
    </div>
  )
}

export default Sidebar
