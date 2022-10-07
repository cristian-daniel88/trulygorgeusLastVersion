import React from 'react'
import AlanHannah from '../components/Designers/AlanHannah'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



function AlanHannahPages() {

  useEffect(() => { 
    
    ReactGA.pageview('/alanhannah');        
  }, []);


  return (
    <>
    <PopUpPhotoDesigner/>
    <AlanHannah/>
    </>
  )
}

export default AlanHannahPages