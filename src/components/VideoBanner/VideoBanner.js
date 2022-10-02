import React from 'react'

function VideoBanner() {
  return (
    <>
    <video autoPlay loop muted  width="320" height="240">
     <source src="http://trulygorgeous.co.uk/imgs/bannerVideo.mp4" type="video/mp4"/>
     Your browser does not support HTML5 video.
   </video>
    </>
  )
}

export default VideoBanner