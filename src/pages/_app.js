import '@/styles/globals.css'
import Nav1 from '@/components/Nav1'
import Footer from '@/components/Footer'
import Bottomnav from '@/components/Bottomnav'
import { Provider } from 'react-redux'
import { store } from '../components/redux/store'
// import { wrapper } from '../components/redux/Store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <Nav1 /> */}

      <Component {...pageProps} />


      <Footer />
      {/* <Bottomnav /> */}

    </Provider>




  )

}
// export default wrapper.withRedux(App);
