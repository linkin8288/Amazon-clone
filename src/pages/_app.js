import { Provider } from 'react-redux'
import { store } from "../app/store"
import '../styles/globals.css'
// import {Provider as AuthProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
