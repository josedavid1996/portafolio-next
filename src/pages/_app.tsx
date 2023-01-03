import '../styles/index.css'

import { AppProps } from 'next/app'

import useLoadTheme from '../hooks/useLoadTheme'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo'
import Sidebar from '@components/layout/Sidebar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  return (
    <main>
      <ApolloProvider client={client}>
        <div className="flex">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </main>
  )
}

export default MyApp
