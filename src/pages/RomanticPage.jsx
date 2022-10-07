import React from 'react'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'
import Romantic from '../components/weddingDresses/Romantic'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function RomanticPage() {

  
  useEffect(() => { 
    
    ReactGA.pageview('/romantic');        
  }, []);

  return (
    <>
     <PopUpPhotoDesigner />
     <Romantic/>
    </>
  )
}

export default RomanticPage