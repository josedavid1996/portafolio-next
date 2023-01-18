import React from 'react'

interface Props {
  title: string
}
const Contacto = ({ title }: Props) => {
  return (
    <div className="text-[60px] font-bold relative text-black">{title}</div>
  )
}

export default Contacto

export async function getStaticProps({ locale }: { locale: string }) {
  console.log(locale)
  const response = await import(`../../lang/${locale}.json`)
  console.log(response.default.contact)
  return {
    props: {
      title: response.default.contact.title
    }
  }
}
