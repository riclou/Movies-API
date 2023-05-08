import Footer from 'components/Footer'
import Header from 'components/Header'
import FavoritProvider from 'components/context/Favorit'
import React from 'react'
import { Outlet } from 'react-router-dom'

function StartBase() {
  return (
    <main>
        <Header/>
        <FavoritProvider>
            <Outlet/>
        </FavoritProvider>
        <Footer/>
    </main>
  )
}

export default StartBase