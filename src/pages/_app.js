import React, { useEffect } from 'react'
import '@/styles/globals.css'
import Nav1 from '@/components/Nav1'
import Footer from '@/components/Footer'
import Bottomnav from '@/components/Bottomnav'
import { Provider } from 'react-redux'
import { store } from '../components/redux/store'
// import { wrapper } from '../components/redux/Store'
import Controls from '@/components/controls'
import PlayerState from '@/components/context/PlayerState'
'use client;'
import { ThemeProvider } from "next-themes"


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Provider store={store} >
        {/* <PlayerState> */}
        {/* <Nav1 /> */}

        <Component {...pageProps} />

        {/* <Footer /> */}
        <Bottomnav />
        {/* <Controls /> */}
        {/* </PlayerState> */}
      </Provider>
    </ThemeProvider>




  )

}
// export default wrapper.withRedux(App);
