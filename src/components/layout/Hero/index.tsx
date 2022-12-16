import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="home section" id="inicio">
        <article className="bg-center bg-no-repeat bg-[url('/hero.jpg')] bg-cover">
          <aside className=" w-full min-h-screen flex justify-center items-center bg-primary-500">
            <div className="flex justify-center items-center flex-col">
              <h2 className="hero__img__title">
                BIENVENID@S A<br />
                MI SITIO
              </h2>{' '}
              <Image
                loading="lazy"
                src="/foto.png"
                alt="photo"
                width={'200px'}
                height={'200px'}
                className="hero__img__photo"
              />
            </div>
          </aside>
        </article>
      </section>
    </>
  )
}

export default Hero
