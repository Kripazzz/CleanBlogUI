import React from 'react'
import {Outlet} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
// import Posts from './Posts'
// import Postitem from './Postitem'
// import PostAuthor from './PostAuthor'


const Layout = () => {
  return (
    <>
   <Header/>
      <Outlet/>
     
      {/* <Postitem /> */}
      {/* <PostAuthor /> */}
   <Footer/>

    </>
  )
}

export default Layout