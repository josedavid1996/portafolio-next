import Hero from '@components/layout/Hero'
import Navbar from '@components/layout/Navbar'
import Presentacion from '@components/layout/Presentacion'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-y-[2rem] md:gap-y-[4rem]">
        <Hero />
        <Presentacion />
      </div>
    </>
  )
}

export default Home
