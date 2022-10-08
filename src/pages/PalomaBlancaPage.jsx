import React from 'react'
import PopUpPhotoDesignerOurCreations from '../components/Alterations/PopUpPhotoDesignerOurCreations'
import PalomaBlanca from '../components/Designers/PalomaBlanca'
import { useMediaQuery } from 'react-responsive'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
import PalomaBlancaDesktop from '../components/Designers/PalomaBlancaDesktop';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function PalomaBlancaPage() {

  const isPhone = useMediaQuery({ query: '(max-width: 500px)' }) 

  useEffect(() => { 
    
    ReactGA.pageview('/palomablanca');        
  }, []);
  return (
<>
      {
        isPhone ? 
        <>
        <PopUpPhotoDesignerOurCreations/>
        <PalomaBlanca/>
        </>

      :
      <>
      <PopUpPhotoDesignerOurCreations/>
      <PalomaBlancaDesktop/>

      </>
}

</>
    

  )
}

export default PalomaBlancaPage