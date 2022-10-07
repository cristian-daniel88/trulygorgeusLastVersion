import React from 'react'
import OurCreations from '../components/Alterations/OurCreations'
import PopUpPhotoDesignerOurCreations from '../components/Alterations/PopUpPhotoDesignerOurCreations'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function OurCreationsPage() {

  useEffect(() => { 
    
    ReactGA.pageview('/ourcreations');        
  }, []);

  return (
    <>
    <PopUpPhotoDesignerOurCreations/>
    <OurCreations/>
    </>
  )
}

export default OurCreationsPage