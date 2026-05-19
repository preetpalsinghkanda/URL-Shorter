import React from 'react'
import NavBar from './Components/NavBar'
import GetStarted from './Components/GetStarted'
import Link from './Components/Link'

const App = () => {
  return (
    <div className='flex items-center flex-col '>
      <NavBar/>
      <GetStarted/>
      <Link/>

    </div>
  )
}

export default App