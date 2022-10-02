import React from 'react'
import HomeBody from '../components/HomeBody/HomeBody'
import HomeBodyVideo from '../components/HomeBodyVideo/HomeBodyVideo'
import { useMediaQuery } from 'react-responsive'



function Home() {

  const isPhone = useMediaQuery({ query: '(max-width: 500px)' }) 
  
  
  
  return (
    <>
    {
      isPhone ? 
      <HomeBody/> 
      :
      <HomeBodyVideo/>
    }
  
    </>
  )
}

export default Home