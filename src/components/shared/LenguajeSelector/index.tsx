import { useRouter } from 'next/router'
import React from 'react'

const LenguajeSelector = () => {
  const router = useRouter()
  const changeLenguaje = (e: any) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value
    })
  }
  return (
    <>
      <select onChange={changeLenguaje}>
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="fr">Frances</option>
      </select>
    </>
  )
}

export default LenguajeSelector
