import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Layout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    <button classname="scroltop">
  <span classname="fa fa-angle-up  relative" id="btn-vibrate" />
</button>
    </>
  )
}
