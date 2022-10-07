import React from 'react'
import WeddingDressesMain from '../components/weddingDresses/WeddingDressesMain'


import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function WeddingDressesPage() {
  useEffect(() => { 
    
    ReactGA.pageview('/weddingdresses');        
  }, []);

  return (
   <WeddingDressesMain/> 
  )
}

export default WeddingDressesPage