import React from 'react'
import FivesSec from './component/fivesSec'
import FourthSec from './component/fourthSec'
import Fristsec from './component/fristsec'
import Header from './component/header'
import SecondSec from './component/secondSec'
import SixthSec from './component/sixthSec'
import ThirdSec from './component/thirdSec'
import Footer from './uitilites/Footer'
import NavBar from './uitilites/navBar'

const HomePage = () => {
  return (
    <div>

    <NavBar/>

      <Header/>
      <Fristsec/>
      <SecondSec/>
      <ThirdSec/>
      <FourthSec/>
      <FivesSec/>
      <SixthSec/>
      <Footer/>


      </div>
  )
}

export default HomePage
