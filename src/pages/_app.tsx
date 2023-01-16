import '../styles/index.css'

import { AppProps } from 'next/app'

import useLoadTheme from '../hooks/useLoadTheme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo'
import Sidebar from '@components/layout/Sidebar'
import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  return (
    <main>
      <ApolloProvider client={client}>
        <AnimatePresence>
          <div className="flex">
            <Sidebar />
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </ApolloProvider>
    </main>
  )
}

export default MyApp
