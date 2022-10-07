import React from 'react'
import RonaldJoyce from '../components/Designers/RonaldJoyce'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function RonaldJoycePages() {
  useEffect(() => { 
    
    ReactGA.pageview('/ronaldjoyce');        
  }, []);
  return (
    <>
     <PopUpPhotoDesigner/>
     <RonaldJoyce/>
     
    </>
  )
}

export default RonaldJoycePages