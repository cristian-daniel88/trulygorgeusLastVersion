import React, { useState } from 'react'
import {designers} from '../../database/designers'
import { FaYoutube } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';


function PalomaBlancaDesktop() {
 const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };

  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [third, setthird] = useState(0);
  const [fourth, setfourth] = useState(0);
  const [fift, setfift] = useState(0);

  const changePhoto0 = () => {
    if(first == 0) {
      setfirst(1)
    }  
    
    if(first == 1) {
      setfirst(0)
    }  

    return
  }

  const changePhoto1 = () => {
    
    if(second == 0) {
      setsecond(1)
    }  
    
    if(second == 1) {
      setsecond(0)
    }  

    return
  }

  const changePhoto2 = () => {
    if(third == 0) {
      setthird(1)
    }  
    
    if(third == 1) {
      setthird(0)
    }  

    return
  }

  const changePhoto3 = () => {
    if(fourth == 0) {
      setfourth(1)
    }  
    
    if(fourth == 1) {
      setfourth(0)
    }  

    return
  }

  const changePhoto4 = () => {
    if(fift == 0) {
      setfift(1)
    }  
    
    if(fift == 1) {
      setfift(0)
    }  

    return
  }


  return (
    <div
    style={{
        
        
        'padding':'5% 2%'

    }}

    >

    {/* 4894 */}
    
    <div
    style={{
        'background':'white'
    }}
    >
    <h3>
        4894
    </h3>
    <div
    style={{
     'background':'white',
     'display': 'flex',
     'width':'100%'
    }}
    >
    
    <div 
    style={{
        'width': '30%'
        
    }}
    onMouseEnter={() => setfirst(1)}
    onMouseLeave={() => setfirst(0)}
    >
      <img src={designers[4].models[0].imgs[first]} width='100%'/>
    </div>
    

    <div
    style={{
        'width': '70%'
    }}
    >

    <div 
    style={{
        'display':'flex',
        'justifyContent':'space-evenly',
        'width':'100%'
    }}
    >
        

        <img src={designers[4].models[0].imgs[0]} width='20%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[0].imgs[0], true)}/>
        <img src={designers[4].models[0].imgs[1]} width='20%' style={{'cursor':'pointer'}}/>
        <img src={designers[4].models[0].imgs[2]} width='20%' style={{'cursor':'pointer'}}/>

    
    </div>
    <br/>
    <div
        style={{
            'display':'flex',
            'justifyContent':'space-evenly',
            'width':'100%'
        }}
        >

        <img src={designers[4].models[0].imgs[3]} width='20%' style={{'cursor':'pointer'}}/>
        <img src={designers[4].models[0].imgs[4]} width='20%' style={{'cursor':'pointer'}}/>
        <div
        style={{
            'width':'20%',
            'position':'relative',
            'cursor':'pointer'
        }}
        >
        <img src={designers[4].models[0].imgs[0]} width='100%'
        style={{
            'filter':'contrast(30%)'
        }}
        onClick={() => click(designers[4].models[0].video[0], true)}
        />
        <FaYoutube
        style={{
            'position':'absolute',
            'left':'0',
            'right':'0',
            'top':'0',
            'bottom':'0',
            'margin':'auto',
            'fontSize':'4vw',
            'color': 'white',
            'cursor':'pointer'
        }}
        onClick={() => click(designers[4].models[0].video[0], true)}
        
        />
        
        </div>
   
    </div>

     <p
        style={{
            'textAlign':'justify'
     }}>
        Short descripion
    </p>
    
    </div>
       

    </div>
    
    </div>
    {/*  */}



    </div>
  )
}

export default PalomaBlancaDesktop