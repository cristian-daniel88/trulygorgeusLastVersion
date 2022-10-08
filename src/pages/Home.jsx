import React from 'react'
import HomeBody from '../components/HomeBody/HomeBody'
import HomeBodyVideo from '../components/HomeBodyVideo/HomeBodyVideo'
import { useMediaQuery } from 'react-responsive'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
import DesignersInHome from '../components/DesignersInHomer/DesignersInHome';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function Home() {

  useEffect(() => { 
    console.log('/')  
    ReactGA.pageview('/');        
}, []);


  const isPhone = useMediaQuery({ query: '(max-width: 500px)' }) 
  
  
  
  return (
    <>
    {
      isPhone ? 
      <HomeBody/> 
      :
      <HomeBodyVideo/>
    }

    <DesignersInHome/>
  
    </>
  )
}

export default Home