import React from 'react'
import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner'
import Fairytale from '../components/weddingDresses/Fairytale'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



function FairyTalePage() {
  
  useEffect(() => { 
    
    ReactGA.pageview('/fairytale');        
  }, []);


  return (
    <>
     <PopUpPhotoDesigner/>
     <Fairytale/>
   
     
    </>
  )
}

export default FairyTalePage