import React from 'react'
import Header from './Header'
import Header2 from './Header2'
import Header3 from './Header3'

const MainHeading = () => {
  return (
    <div className='sticky top-0 z-10 '>
   <Header/>
  <Header2/>
  <Header3/>
    </div>
  )
}

export default MainHeading