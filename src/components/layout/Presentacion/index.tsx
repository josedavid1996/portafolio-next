import Button from '@components/shared/Button'
import Icon from '@components/shared/Icon'

const Presentacion = () => {
  return (
    <>
      <section
        className="flex justify-center p-4 max-w-[576px] min-w-[340px] mx-auto"
        id="presentation"
      >
        <article>
          <h1 className="text-center font-bold text-3xl md:text-[40px]">
            Soy <span className="text-primary">Jose David Redondo</span> <br />
            Frontend Developer
          </h1>
          <p className="text-center my-4">
            Te presento mi portafolio y CV hecho con los estandares web HTML,
            CSS y JS.Aqui pedes ver de forma inmediata dos mis proyectos <br />
            !Espero te guste¡{' '}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Button>Ver Proyectos</Button>
            <Button variant="outline">
              {' '}
              <Icon name="arrow-down" />
              Descarga mi CV
            </Button>

            {/* Poner el link de descarga */}
            {/* <a
              href="img/JOSE DAVID REDONDO PERDOMO_compressed.pdf"
              target="_blank"
              className="btn-trans"
            >
              <Icon name="arrow-down" />
              Descarga mi CV
            </a>{' '} */}
          </div>
        </article>
      </section>
    </>
  )
}

export default Presentacion
