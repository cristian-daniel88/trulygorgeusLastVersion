import React from 'react'
import LusanMandongus from '../components/Designers/LusanMandongus'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function LusanMandongusPage() {

  useEffect(() => { 
    
    ReactGA.pageview('/lusanmandongus');        
  }, []);

  return (
    <>
    <PopUpPhotoDesigner/>
    <LusanMandongus/>
    </>
  )
}

export default LusanMandongusPage