import React, { useEffect } from 'react'
import Biography from '../components/AboutUs/Biography'
import PopUpPhotoDesignerOurCreations from '../components/Alterations/PopUpPhotoDesignerOurCreations'

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function AboutUs() {
  useEffect(() => {
    ReactGA.pageview( '/aboutus');
    console.log('/aboutus')
    
}, []);

  return (
    <div >
        <PopUpPhotoDesignerOurCreations/>
        <Biography/>
        
    </div>
  )
}

export default AboutUs