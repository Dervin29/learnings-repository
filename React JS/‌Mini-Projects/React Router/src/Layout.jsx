import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// outlet is used to render child routes in the parent route
const Layout = () => {
  return (
    <>
    <Header/>

    <Outlet/>

    <Footer/>

    </>
  )
}

export default Layout