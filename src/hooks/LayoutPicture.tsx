import React, { useState } from 'react'
import { useEffect } from 'react'

const LayoutPicture = ({ children }: { children: JSX.Element }) => {
  const [heightCuadro, setHeightCuadro] = useState(0)
  const [widthCuadro, setWidthCuadro] = useState(0)
  const iteration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('entre')
      // Client-side-only code
      setHeightCuadro(window.innerHeight)
      setWidthCuadro(window.innerWidth)
    }
  }, [heightCuadro, widthCuadro])

  const cuadros = []
  const ancho = widthCuadro / 70
  const alto = heightCuadro / 70
  const rta = ancho * alto

  for (let i = 0; i < rta; i++) {
    cuadros.push(i)
  }
  console.log(rta, cuadros)

  return (
    <>
      <div
        style={{
          height: `${heightCuadro}px`
          // gridTemplateColumns: 'repeat(5, minmax(0, 1fr)'
        }}
        className="w-full grid grid-cols-5 relative z-10 overflow-hidden"
      >
        {cuadros.map((item) => {
          return (
            <div
              key={item}
              // style={{ width: '70px', height: '70px' }}
              className="trans"
            ></div>
          )
        })}
        {children}
      </div>
    </>
  )
}

export default LayoutPicture
