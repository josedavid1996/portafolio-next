import LayoutPage from '@components/layout/LayoutPage'
import CardProyect from '@components/shared/CardProyect'
import React from 'react'

const dataFalsa = [
  {
    title: 'titulo',
    date: '25/05/2013',
    description:
      'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
    link: '/proyect',
    img: "after:bg-[url('/avatar.png')]"
  },
  {
    title: 'titulo',
    date: '25/05/2013',
    description:
      'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
    link: '/proyect',
    img: "after:bg-[url('/avatar.png')]"
  },
  {
    title: 'titulo',
    date: '25/05/2013',
    description:
      'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
    link: '/proyect',
    img: "after:bg-[url('/avatar.png')]"
  },
  {
    title: 'titulo',
    date: '25/05/2013',
    description:
      'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
    link: '/proyect',
    img: "after:bg-[url('/avatar.png')]"
  },
  {
    title: 'titulo',
    date: '25/05/2013',
    description:
      'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
    link: '/proyect',
    img: "after:bg-[url('/avatar.png')]"
  },
  {
    title: 'titulo',
    date: '25/05/2013',
    description:
      'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,',
    link: '/proyect',
    img: "after:bg-[url('/avatar.png')]"
  }
]

interface Props {
  titleName: string
}

const ProjectPage = ({ titleName }: Props) => {
  return (
    <>
      <LayoutPage title={titleName}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 sm:mb-5 pr-3 sm:pr-0">
          {dataFalsa.map((item, index) => (
            <CardProyect
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
              link={item.link}
              img={item.img}
            />
          ))}
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
