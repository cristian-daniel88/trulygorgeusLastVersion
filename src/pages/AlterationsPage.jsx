import React from 'react'
import Alterations from '../components/Alterations/Alterations'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function AlterationsPage() {
  useEffect(() => { 
    
    ReactGA.pageview('/alterations');        
  }, []);


  return (
    <>
    <Alterations/>
    </>
  )
}

export default AlterationsPage