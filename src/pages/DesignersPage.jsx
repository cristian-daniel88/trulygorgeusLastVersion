import React from 'react'
import DesignersMain from '../components/Designers/DesignersMain'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



function DesignersPage() {
  useEffect(() => { 
    
    ReactGA.pageview('/designers');        
  }, []);


  return (

    <DesignersMain/>
  )
}

export default DesignersPage