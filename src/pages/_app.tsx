import '../styles/index.css'

import { AppProps } from 'next/app'

import useLoadTheme from '../hooks/useLoadTheme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo'
import Sidebar from '@components/layout/Sidebar'
import { AnimatePresence } from 'framer-motion'
import LenguajeSelector from '@components/shared/LenguajeSelector'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  return (
    <main>
      <ApolloProvider client={client}>
        <AnimatePresence>
          <div className="flex min-h-screen">
            <Sidebar />
            <div>
              <LenguajeSelector />
            </div>
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </ApolloProvider>
    </main>
  )
}

export default MyApp
