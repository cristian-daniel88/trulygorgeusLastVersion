import React from 'react'
import PopUpPhotoDesignerOurCreations from '../components/Alterations/PopUpPhotoDesignerOurCreations'
import PalomaBlanca from '../components/Designers/PalomaBlanca'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function PalomaBlancaPage() {

  useEffect(() => { 
    
    ReactGA.pageview('/palomablanca');        
  }, []);
  return (
      <>
      <PopUpPhotoDesignerOurCreations/>
      <PalomaBlanca/>
      </>
  )
}

export default PalomaBlancaPage