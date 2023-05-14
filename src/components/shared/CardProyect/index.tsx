import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../Button'

interface Props {
  title: string
  date: string
  description: string
  link: string
  img: string
}

const CardProyect: FC<Props> = ({ title, date, description, link, img }) => {
  return (
    <div className="h-full">
      <div
        className={`card ${img} after:bg-cover after:bg-center after:bg-no-repeat aspect-[2/1] `}
      ></div>

      {/* Description Text */}
      <div className="mt-4 flex flex-col gap-4 ">
        <div className="flex justify-between">
          <p className="font-bold text-xl text-primary">{title}</p>
          <p className="font-bold text-sm text-primary">{date}</p>
        </div>
        <p className="text-sm sm:text-base">{description}</p>
        <Link href={link} passHref target="_blank">
          <Button variant="solid" className="mx-auto">
            Ver
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CardProyect
