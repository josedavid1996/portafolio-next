import React, { useState, useEffect } from 'react'

import { supabase } from 'src/supabase'

import LayoutPage from '@components/layout/LayoutPage'
import CardProyect from '@components/shared/CardProyect'
import { IProyects } from '@interface/index'
import { Show } from '@components/shared/Show'
import Spinner from '@components/shared/Spinner'

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
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 mb-10 sm:mb-5 pr-3 sm:pr-0 gap-y-8 ${
            isView ? 'w-full' : 'w-[100vw]'
          } `}
        >
          <Show
            condition={isView}
            isDefault={<Spinner className="col-span-3" />}
          >
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
