import React from 'react'
import NavBar from './Components/NavBar'
import GetStarted from './Components/GetStarted'
import Link from './Components/Link'
import AdvancedStatistics from './Components/AdvancedStatistics'
import Promo from './Components/Promo'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='flex items-center flex-col '>
      <NavBar/>
      <GetStarted/>
      <Link/>
      {/* <AdvancedStatistics/> */}
      <Promo/>
      <Footer/>



    </div>
  )
}

export default App