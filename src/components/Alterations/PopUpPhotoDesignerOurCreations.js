import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';
import { useMediaQuery } from 'react-responsive'
import { CloseContainerOurCreations, CloseIconOurCreations, MarcoPhotoOurCreations, PhotoPopUpOurCreations, PopUpPhotoOurCreations } from './PopUpPhotoOurCreationsStyles';

function PopUpPhotoDesignerOurCreations() {
  const popUpPhoto =  useSelector(state => state.popUpDesigner);
  const isPhone = useMediaQuery({ query: '(max-width: 500px)' }) 
  
  const dispatch = useDispatch()
  const click = (value , boolean) => {
    dispatch(clickPopUpPhoto(value))
  }
  return (

    <>
      <PopUpPhotoOurCreations video={popUpPhoto.imgUrl.includes('mp4')? 'true' : 'false'} toggle={popUpPhoto.hidden ? 'true' : 'false'} onClick={()=> {click('', false)}}>


      {popUpPhoto.imgUrl.includes('mp4') ?
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: '100px',
        //background:'black',
        //height:'200vh',
        zIndex: -5
      }}>
        <video controls width={isPhone ? '100%' : '60%'} autoPlay loop>
        <source src={popUpPhoto.imgUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
        </video>
      </div>
      :

      <MarcoPhotoOurCreations  resizePadding={popUpPhoto.imgUrl} >
      <CloseContainerOurCreations onClick={()=>click('', false)}>
        <CloseIconOurCreations/>
      </CloseContainerOurCreations>
      
      
   

    <PhotoPopUpOurCreations src={popUpPhoto.imgUrl}/>
    

      </MarcoPhotoOurCreations>
      }
      </PopUpPhotoOurCreations>


    </>
  )
}

export default PopUpPhotoDesignerOurCreations