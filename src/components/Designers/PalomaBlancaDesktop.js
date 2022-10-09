import React, { useState } from 'react'
import {designers} from '../../database/designers'
import { FaYoutube } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';
import styled from 'styled-components';

const Img = styled.img`
border-radius:5px ;
//border:solid 2px ghostwhite;
&:hover{
    box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.54);
    transform: scale(1.1);
}

`

const Video = styled.div`

border-radius:5px ;
//border:solid 2px ghostwhite;
&:hover{
    box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.54);
    transform: scale(1.1);
}
`

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
        'padding':'2% 2%'
    }}

    >


    {/* 4894 */}
    
    <div
    style={{
        'background':'white',
        'padding': '10px'
    }}
    >
    <h3>
        4894
    </h3>
    <div
    style={{
     'background':'white',
     'display': 'flex',
     'width':'100%',
    }}
    >
    
    <div 
    style={{
        'width': '20%'
        
    }}
    onMouseEnter={() => setfirst(1)}
    onMouseLeave={() => setfirst(0)}
    >
      <img src={designers[4].models[0].imgs[first]} width='100%'/>
    </div>
    

    <div
    style={{
        'width': '80%'
    }}
    >

    <div 
    style={{
        'display':'flex',
        'justifyContent':'space-evenly',
        'width':'100%'
    }}
    >
        

        <Img src={designers[4].models[0].imgs[0]} width='15%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[0].imgs[0], true)}/>
        <Img src={designers[4].models[0].imgs[1]} width='15%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[0].imgs[1], true)}/>
        <Img src={designers[4].models[0].imgs[2]} width='15%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[0].imgs[2], true)}/>
        
        <Img src={designers[4].models[0].imgs[3]} width='15%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[0].imgs[3], true)}/>
        <Img src={designers[4].models[0].imgs[4]} width='15%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[0].imgs[4], true)}/>
        <div
        style={{
            'width':'15%',
            'position':'relative',
            'cursor':'pointer'
        }}
        >
        <Img src={designers[4].models[0].imgs[0]} width='100%'
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
    <br/>
   

    
    <div
    style={{
        'border': 'solid 1px black',
        'padding': '20px'
    }}    
    >


     <p
        style={{
            'textAlign':'justify'
        }}>
        Short descripion
    </p>
    </div>
    
    </div>
       

    </div>
    
    </div>
    {/*  */}

    <br/>
    <br/>
    <br/>

    
    {/* 4977 */}
    
    <div
    style={{
        'background':'white',
        'padding': '10px'
    }}
    >
    <h3>
        4977
    </h3>
    <div
    style={{
     'background':'white',
     'display': 'flex',
     'width':'100%',
    }}
    >
    
    <div 
    style={{
        'width': '20%'
        
    }}
    onMouseEnter={() => setsecond(1)}
    onMouseLeave={() => setsecond(0)}
    >
      <img src={designers[4].models[1].imgs[second]} width='100%'/>
    </div>
    

    <div
    style={{
        'width': '80%'
    }}
    >

    <div 
    style={{
        'display':'flex',
        'justifyContent':'space-evenly',
        'width':'100%'
    }}
    >
        

        <Img src={designers[4].models[1].imgs[0]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[1].imgs[0], true)}/>
        <Img src={designers[4].models[1].imgs[1]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[1].imgs[1], true)}/>
        <Img src={designers[4].models[1].imgs[2]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[1].imgs[2], true)}/>
      
        <div
        style={{
            'width':'19%',
            'position':'relative',
            'cursor':'pointer'
        }}
        >
        <Img src={designers[4].models[1].imgs[0]} width='100%'
        style={{
            'filter':'contrast(30%)'
        }}
        onClick={() => click(designers[4].models[1].video[0], true)}
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
    <br/>
   

    
    <div
    style={{
        'border': 'solid 1px black',
        'padding': '20px'
    }}    
    >


     <p
        style={{
            'textAlign':'justify'
        }}>
        Short descripion
    </p>
    </div>
    
    </div>
       

    </div>
    
    </div>
    {/*  */}

    <br/>
    <br/>
    <br/>        
    {/* 4978 */}
    
    <div
    style={{
        'background':'white',
        'padding': '10px'
    }}
    >
    <h3>
        4978
    </h3>
    <div
    style={{
     'background':'white',
     'display': 'flex',
     'width':'100%',
    }}
    >
    
    <div 
    style={{
        'width': '20%'
        
    }}
    onMouseEnter={() => setthird(1)}
    onMouseLeave={() => setthird(0)}
    >
      <img src={designers[4].models[2].imgs[third]} width='100%'/>
    </div>
    

    <div
    style={{
        'width': '80%'
    }}
    >

    <div 
    style={{
        'display':'flex',
        'justifyContent':'space-evenly',
        'width':'100%'
    }}
    >
        

        <Img src={designers[4].models[2].imgs[0]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[2].imgs[0], true)}/>
        <Img src={designers[4].models[2].imgs[1]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[2].imgs[1], true)}/>
        <Img src={designers[4].models[2].imgs[2]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[2].imgs[2], true)}/>
      
        <div
        style={{
            'width':'19%',
            'position':'relative',
            'cursor':'pointer'
        }}
        >
        <Img src={designers[4].models[2].imgs[0]} width='100%'
        style={{
            'filter':'contrast(30%)'
        }}
        onClick={() => click(designers[4].models[2].video[0], true)}
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
    <br/>
   

    
    <div
    style={{
        'border': 'solid 1px black',
        'padding': '20px'
    }}    
    >


     <p
        style={{
            'textAlign':'justify'
        }}>
        Short descripion
    </p>
    </div>
    
    </div>
       

    </div>
    
    </div>
    {/*  */}

     <br/>
    <br/>
    <br/>        
    {/* 4984 */}
    
    <div
    style={{
        'background':'white',
        'padding': '10px'
    }}
    >
    <h3>
        4984
    </h3>
    <div
    style={{
     'background':'white',
     'display': 'flex',
     'width':'100%',
    }}
    >
    
    <div 
    style={{
        'width': '20%'
        
    }}
    onMouseEnter={() => setfourth(1)}
    onMouseLeave={() => setfourth(0)}
    >
      <img src={designers[4].models[3].imgs[fourth]} width='100%'/>
    </div>
    

    <div
    style={{
        'width': '80%'
    }}
    >

    <div 
    style={{
        'display':'flex',
        'justifyContent':'space-evenly',
        'width':'100%'
    }}
    >
        

        <Img src={designers[4].models[3].imgs[0]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[3].imgs[0], true)}/>
        <Img src={designers[4].models[3].imgs[1]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[3].imgs[1], true)}/>
        <Img src={designers[4].models[3].imgs[2]} width='19%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[3].imgs[2], true)}/>
      
        <div
        style={{
            'width':'19%',
            'position':'relative',
            'cursor':'pointer'
        }}
        >
        <Img src={designers[4].models[3].imgs[0]} width='100%'
        style={{
            'filter':'contrast(30%)'
        }}
        onClick={() => click(designers[4].models[3].video[0], true)}
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
    <br/>
   

    
    <div
    style={{
        'border': 'solid 1px black',
        'padding': '20px'
    }}    
    >


     <p
        style={{
            'textAlign':'justify'
        }}>
        Short descripion
    </p>
    </div>
    
    </div>
       

    </div>
    
    </div>
    {/*  */}

    <br/>
    <br/>
    <br/>        
    {/* 4987 */}
    
    <div
    style={{
        'background':'white',
        'padding': '10px'
    }}
    >
    <h3>
        4987
    </h3>
    <div
    style={{
     'background':'white',
     'display': 'flex',
     'width':'100%',
    }}
    >
    
    <div 
    style={{
        'width': '30%'
        
    }}
    onMouseEnter={() => setfift(1)}
    onMouseLeave={() => setfift(0)}
    >
      <img src={designers[4].models[4].imgs[fift]} width='100%'/>
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
        

        <Img src={designers[4].models[4].imgs[0]} width='18%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[4].imgs[0], true)}/>
        <Img src={designers[4].models[4].imgs[1]} width='18%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[4].imgs[1], true)}/>
        <Img src={designers[4].models[4].imgs[2]} width='18%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[4].imgs[2], true)}/>
        <Img src={designers[4].models[4].imgs[3]} width='18%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[4].imgs[3], true)}/>
        <Img src={designers[4].models[4].imgs[4]} width='18%' style={{'cursor':'pointer'}} onClick={() => click(designers[4].models[4].imgs[4], true)}/>
    
    </div>
    <br/>
    <br/>
    <div
    style={{
      'display':'flex',
      'justifyContent':'space-around'
    }}
    >
    <Video
        style={{
            'width':'40%',
            'position':'relative',
            'height': '200px',
            'background':"transparent",
            'opacity':'.6',
            'cursor':'pointer',
            'backgroundImage': `url(${designers[4].models[3].imgs[0]})`,
            'backgroundSize':'cover',
            'backgroundRepeat':'no-repeat',
            //'filter':'contrast(30%)',
          
            
            'backgroundPosition':"0 -50px",
            'backgroundBlendMode':'luminosity',
            
        }}
        >
          
 
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
            'cursor':'pointer',
            
            
        }}
        onClick={() => click(designers[4].models[4].video[0], true)}
        
        />
    </Video>

        <Video
        style={{
            'width':'40%',
            'position':'relative',
            'height': '200px',
            'background':"transparent",
            'opacity':'.6',
            'cursor':'pointer',
            'backgroundImage': `url(${designers[4].models[4].imgs[1]})`,
            'backgroundSize':'cover',
            'backgroundRepeat':'no-repeat',
            'backgroundBlendMode':'darken',
            //'filter':'contrast(30%)',
            'backgroundBlendMode':'luminosity',
          
            
            'backgroundPosition':"0 -50px"
            
        }}
        >
          
 
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
            'cursor':'pointer',
            
            
        }}
        onClick={() => click(designers[4].models[4].video[1], true)}
        
        />


        </Video>


    </div>

  
         
    
    <br/>
   

    
    <div
    style={{
        'border': 'solid 1px black',
        'padding': '20px'
    }}    
    >


     <p
        style={{
            'textAlign':'justify'
        }}>
        Short descripion
    </p>
    </div>
    
    </div>
       

    </div>
    
    </div>
    {/*  */}
   


    </div>
  )
}

export default PalomaBlancaDesktop