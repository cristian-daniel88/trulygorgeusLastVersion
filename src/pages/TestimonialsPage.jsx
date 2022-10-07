import React from 'react'
import Testimonials from '../components/AboutUs/Testimonials'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function TestimonialsPage() {
  
  useEffect(() => { 
    
    ReactGA.pageview('/testimonials');        
  }, []);

  return (
    <>
    <Testimonials/>
    </>
  )
}

export default TestimonialsPage