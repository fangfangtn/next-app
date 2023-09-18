import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Layout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    <button className="scroltop">
  <span className="fa fa-angle-up  relative" id="btn-vibrate" />
</button>
    </>
  )
}
