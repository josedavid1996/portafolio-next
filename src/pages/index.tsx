interface Props {
  titleName: string
  titleNameSpan: string
  titleParagram: string
}

const Home = ({ titleName, titleNameSpan, titleParagram }: Props) => {
  return (
    <>
      <div className="pl-[45px] md:pl-0 text-white font-bold relative mt-15 w-full ">
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          {titleName}
          <span className="text-primary">{titleNameSpan}</span>
        </h1>
        <p className="text-center">{titleParagram}</p>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`../lang/${locale}.json`)
  console.log(response)
  return {
    props: {
      titleName: response.default.home.titleName,
      titleNameSpan: response.default.home.titleNameSpan,
      titleParagram: response.default.home.titleParagram
    }
  }
}
