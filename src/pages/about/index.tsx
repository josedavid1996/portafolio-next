import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="pl-[62px] mt-[50px]  md:mt-[100px] pr-3 md:p-5 text-white ">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <div className="flex flex-col gap-2 pb-4 sm:pb-0">
              <h1 className="text-3xl text-primary  sm:text-6xl mb-4  uppercase  font-black  text-left">
                about
              </h1>
              <div className=" md:hidden ">
                <Image
                  alt="avatar"
                  src="/avatar.png"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
              <p>
                Hola mi nombre es Jose David, soy un desarrollador frontend
                talentoso con más de dos años de experiencia en el campo. Me
                destaco en habilidades para trabajar con tecnologías como HTML,
                CSS , JavaScript y diferentes framework,tambien tengo la
                capacidad para resolver problemas y pensar de manera creativa.
                Ademas trabajo en estrecha colaboración con sus compañeros de
                equipo y clientes para garantizar que las soluciones cumplen con
                sus necesidades y expectativas. En mis tiempos libres, me gusta
                estar al aire libre, caminar y viajar para conocer nuevos
                lugares y culturas, lo que me permite aprender cosas nuevas y
                ampliar mis horizontes.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:min-w-[50%]">
            <Image
              alt="avatar"
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
