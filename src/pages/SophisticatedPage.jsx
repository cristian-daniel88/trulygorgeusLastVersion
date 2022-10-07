import React from 'react'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'
import Sophisticated from '../components/weddingDresses/Sophisticated'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function SophisticatedPage() {

  useEffect(() => { 
    
    ReactGA.pageview('/sophisticated');        
  }, []);

  return (
    <>
    <PopUpPhotoDesigner/>
    <Sophisticated/>
    </>
  )
}

export default SophisticatedPage