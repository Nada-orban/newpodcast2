import '@/styles/globals.css'
import Nav1 from '@/components/Nav1'
import Footer from '@/components/Footer'
import Bottomnav from '@/components/Bottomnav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav1 />
      <Component {...pageProps} />


      <Footer />
      {/* <Bottomnav /> */}

    </>

  )

}
