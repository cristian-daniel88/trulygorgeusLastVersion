import React from 'react'
import { ContainerVideo, LogoVideo, StopIcon, Video } from './VideoBannerStyles'

function VideoBanner() {
  return (
    <>
    <ContainerVideo>

    <Video autoPlay loop muted>
    <source src="http://trulygorgeous.co.uk/imgs/bannerVideo.mp4" type="video/mp4"/>
     Your browser does not support HTML5 video.
   </Video>
    <LogoVideo>
        Truly Gorgeous
    </LogoVideo>
    </ContainerVideo>
    </>
  )
}

export default VideoBanner