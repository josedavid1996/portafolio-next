import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const LenguajeSelector = () => {
  const router = useRouter()
  const changeLenguaje = (lenguage: string) => {
    router.push(router.pathname, router.pathname, {
      locale: lenguage
    })
  }
  return (
    <>
      <div className="flex gap-3 absolute right-4 top-2 z-20">
        <Image
          className="cursor-pointer"
          src="/espana.png"
          width={35}
          height={30}
          onClick={() => changeLenguaje('es')}
          alt="es"
        />
        <Image
          className="cursor-pointer"
          src="/estados-unidos.jpg"
          width={35}
          height={30}
          objectFit="contain"
          onClick={() => changeLenguaje('en')}
          alt="en"
        />
        <Image
          className="cursor-pointer"
          src="/francia.png"
          width={35}
          height={30}
          onClick={() => changeLenguaje('fr')}
          alt="fr"
        />
      </div>
      {/* <select onChange={changeLenguaje}>
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="fr">Frances</option>
      </select> */}
    </>
  )
}

export default LenguajeSelector
