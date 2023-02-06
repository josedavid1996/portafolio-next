import Button from '@components/shared/Button'

interface Props {
  titleName: string
  titleNameSpan: string
  titleParagram: string
}

const Home = ({ titleName, titleNameSpan, titleParagram }: Props) => {
  return (
    <>
      <div className="bg-img bg-cover text-white  md:bg-center bg-no-repeat bg-[url('/hero.jpg')] pl-[45px] md:pl-0 w-full flex sm:items-center justify-center sm:justify-start">
        <div className=" w-full flex flex-col items-center  gap-4  pt-30 sm:pt-0 max-w-[415px] ">
          <h1 className="text-3xl font-light sm:text-6xl text-center  flex flex-col uppercase ml-5">
            {titleName}
            <span className="text-primary font-black">{titleNameSpan}</span>
            <p className="uppercase text-xs md:text-sm font-light">
              {titleParagram}
            </p>
          </h1>
          <div className="flex gap-2 ">
            <Button variant="outline">Contactame</Button>
            <Button variant="outline">Contactame</Button>
          </div>
        </div>
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
