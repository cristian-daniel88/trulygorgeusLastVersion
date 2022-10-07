import React from 'react'
import SofiaBianca from '../components/Designers/SofiaBianca'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



function SofiaBiancaPages() {

  useEffect(() => { 
    
    ReactGA.pageview('/sofiabianca');        
  }, []);
  return (
    <>
    <PopUpPhotoDesigner/>
    <SofiaBianca/>

    </>
  )
}

export default SofiaBiancaPages