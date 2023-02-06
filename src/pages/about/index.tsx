import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="pl-[62px]  mt-[100px] pr-3 md:p-5 text-white">
        <h1 className="text-3xl text-primary  sm:text-6xl mb-4  uppercase  font-black  text-left">
          about
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div>
            <div className="flex flex-col gap-2">
              <p>
                Hola mi nombre es Jose David,soy un joven y talentoso
                desarrollador frontend con más de dos años de experiencia en el
                campo. Durante mi carrera, he demostrado una habilidad innata
                para trabajar con tecnologías como HTML, CSS y JavaScript para
                crear páginas web atractivas y de alta calidad.
              </p>
              <p>
                Mi habilidad para resolver problemas y pensar fuera de la caja
                me ha llevado realizar varios proyectos exitosos. Trabajo en
                estrecha colaboración con mis compañeros de equipo y clientes
                para asegurarme de que sus soluciones cumplan con sus
                necesidades y expectativas.
              </p>
              <p>
                En mis tiempos libres, soy un apasionado de la vida al aire
                libre y la exploración. Le encanta caminar y recorrer nuevos
                senderos, admirando la belleza natural de su entorno.Además de
                caminar, también soy un viajero incansable. Me encanta conocer
                nuevos lugares, probar nuevas comidas y experimentar diferentes
                culturas. Viajar me brinda la oportunidad de aprender cosas
                nuevas y ampliar mis horizontes.
              </p>
            </div>
          </div>
          <div className="md:min-w-[50%]">
            <Image
              src="/avatar.png"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
