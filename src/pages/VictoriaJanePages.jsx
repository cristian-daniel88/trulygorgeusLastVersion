import React from 'react'
import VictoriaJane from '../components/Designers/VictoriaJane'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function VictoriaJanePages() {
  useEffect(() => { 
    
    ReactGA.pageview('/victoriajane');        
  }, []);


  return (
    <>
    <PopUpPhotoDesigner/>
    <VictoriaJane/>
    </>
  )
}

export default VictoriaJanePages