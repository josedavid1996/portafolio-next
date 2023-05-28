import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../Button'
import moment from 'moment'
import Image from 'next/image'

interface Props {
  title: string
  date: Date
  description: string
  link: string
  img: string
}

const CardProyect: FC<Props> = ({ title, date, description, link, img }) => {
  return (
    <div className="h-full flex flex-col ">
      <div className="relative rounded-lg ">
        <Image
          src={img}
          alt={title}
          layout="responsive"
          width={400}
          height={230}
          className="w-full h-full rounded-lg"
          objectFit="cover"
        />
      </div>

      {/* Description Text */}
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="mt-5  flex flex-col gap-4 ">
          <div className="flex justify-between items-end">
            <p className="font-bold text-xl text-primary">{title}</p>
            <p className="font-bold text-sm text-primary">
              {moment(date).format('YYYY-MM-DD')}
            </p>
          </div>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
        <Link href={link} passHref>
          <a target="_blank">
            <Button variant="solid" className="mx-auto">
              {link.length === 0 ? 'No disponible' : 'Ver'}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CardProyect
