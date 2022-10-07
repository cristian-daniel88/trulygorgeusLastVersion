import React from 'react'
import ContactContainerPHP from '../components/ContactContainer/ContacContainerPHP'
import ContactContainer from '../components/ContactContainer/ContactContainer'

import ReactGA from 'react-ga';
import { useEffect} from 'react';
const TRACKING_ID = "UA-199611647-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function ContactPage() {
  useEffect(() => { 
    
    ReactGA.pageview('/contact');        
  }, []);
  return (
    <>
    {/* <ContactContainer/> */}
    <ContactContainerPHP/>
    </>
  )
}

export default ContactPage