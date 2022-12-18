import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import Posts from '../Components/Posts/Posts'
function HomePage() {

  
  return (
    <div>
        <Header/>
        <HomeBanner/>
        <Posts/>
        <Footer/>
    </div>
  )
}

export default HomePage
