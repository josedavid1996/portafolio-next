import React, { useState, useEffect } from 'react'

import { supabase } from 'src/supabase'

import LayoutPage from '@components/layout/LayoutPage'
import CardProyect from '@components/shared/CardProyect'
import { IProyects } from '@interface/index'
import { Show } from '@components/shared/Show'

// const dataFalsa = [
//   {
//     title: 'Plazaticket',
//     date: '25/05/2013',
//     description:
//       'Con la ayuda de otros desarrolladores pudimos realizar esta web que facilita la organización y compra de boletos para eventos y ferias. Con un mapa interactivo en SVG, los usuarios pueden reservar asientos de manera sencilla y rápida.',
//     link: 'https://web.plazaticket.com/',
//     img: "after:bg-[url('/img-proyect/plazaticket.png')]"
//   },
//   {
//     title: 'EDUCAMP',
//     date: '25/05/2013',
//     description:
//       'Esta pagina la realice con la vision para crear una experiencia interactiva y fácil de usar para compartir información sobre el evento EDUCAMP.Tambien puedes conocer las diferentes conferencias, talleres y exhibiciones, y permite que los asistentes se sumerjan en un entorno educativo inspirador.',
//     link: 'https://educamp.vercel.app/',
//     img: "after:bg-[url('/img-proyect/educam.png')]"
//   },
//   {
//     title: 'Inbio Abogado',
//     date: '25/05/2013',
//     description:
//       'Esta página web la realice con otro desarrolador y fue para un abogado incluye secciones esenciales como Inicio, Quien Soy, Mis Servicios, Equipo, Resumen, Blog y Contacto. Descubre más sobre mi experiencia, servicios legales y mantente informado a través de mi blog',
//     link: 'https://inbio-abogado.vercel.app/',
//     img: "after:bg-[url('/img-proyect/inbio-abogado.png')]"
//   },
//   {
//     title: 'Inbio Cheff',
//     date: '25/05/2013',
//     description:
//       'Esta página web la realice con otro desarrolador y fue para un cheff incluye secciones esenciales como Inicio, Quien Soy, Mis Servicios, Equipo, Resumen, Blog y Contacto. Descubre más sobre mi experiencia, servicios legales y mantente informado a través de mi blog',
//     link: 'https://inbio-cheff.vercel.app/',
//     img: "after:bg-[url('/img-proyect/inbio-cheff.png')]"
//   },
//   {
//     title: 'titulo',
//     date: '25/05/2013',
//     description:
//       'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
//     link: '/proyect',
//     img: "after:bg-[url('/avatar.png')]"
//   },
//   {
//     title: 'titulo',
//     date: '25/05/2013',
//     description:
//       'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
//     link: '/proyect',
//     img: "after:bg-[url('/avatar.png')]"
//   }
// ]

interface Props {
  titleName: string
}

const ProjectPage = ({ titleName }: Props) => {
  const [isView, setIsView] = useState(false)
  const [isData, setIsData] = useState<IProyects[]>([])
  const dataProyect = async () => {
    const res = await supabase.from('proyectos').select()
    if (!res.error) {
      const proyects = res.data as IProyects[]
      setIsData(proyects)
      setIsView(true)
    }
  }

  useEffect(() => {
    dataProyect()
  }, [])

  return (
    <>
      <LayoutPage title={titleName}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 sm:mb-5 pr-3 sm:pr-0">
          <Show condition={isView}>
            {isData.map((item, index) => (
              <CardProyect
                key={index}
                title={item.nombre}
                date={item.fecha}
                description={item.descripcion}
                link={item.slug}
                img={item.img}
              />
            ))}
          </Show>
        </div>
      </LayoutPage>
    </>
  )
}

export default ProjectPage

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      titleName: response.default.project.titleName
    }
  }
}
