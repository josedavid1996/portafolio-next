import '../styles/index.css'

import { AppProps } from 'next/app'

import useLoadTheme from '../hooks/useLoadTheme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo'
import Sidebar from '@components/layout/Sidebar'
import { AnimatePresence } from 'framer-motion'

import LenguajeSelector from '@components/shared/LenguajeSelector'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  return (
    <main>
      <ApolloProvider client={client}>
        <AnimatePresence>
          <div className="flex min-h-screen">
            <Head>
              <title>Jose David</title>
            </Head>
            <Sidebar />
            <div>
              <LenguajeSelector />
            </div>
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ApolloProvider>
    </main>
  )
}

export default MyApp

export async function getStaticProps({ locale }: { locale: string }) {
  // const response = await import(`../../lang/${locale}.json`)
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      titleName: response.default.contact.titleName,
      sendParagram: response.default.contact.sendParagram,
      labelFirst: response.default.contact.labelFirst,
      labelSecond: response.default.contact.labelSecond,
      labelThird: response.default.contact.labelThird,
      textButton: response.default.contact.textButton
    }
  }
}
