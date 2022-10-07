import React from 'react'
import PriceList from '../components/PriceList/PriceList'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function PriceListPage() {

  useEffect(() => { 
    
    ReactGA.pageview('/pricelist');        
  }, []);
  return (
   <>
   <PriceList/>
   </>
  )
}

export default PriceListPage