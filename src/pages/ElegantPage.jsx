import React from 'react'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'
import Elegant from '../components/weddingDresses/Elegant'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function ElegantPage() {

  useEffect(() => { 
    
    ReactGA.pageview('/elegant');        
  }, []);

  return (
    <>
     <PopUpPhotoDesigner/>
     <Elegant/>
    </>
  )
}

export default ElegantPage