interface Props {
  title: string
}

const Home = ({ title }: Props) => {
  return (
    <>
      <div className="text-[60px] font-bold relative">{title}</div>
    </>
  )
}

export default Home

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`../lang/${locale}.json`)
  console.log(response)
  return {
    props: {
      title: response.default.home.title
    }
  }
}
