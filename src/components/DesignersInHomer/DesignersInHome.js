import React, { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { CartGridOurCreations, img, DescriptionOurCreations, OurCreationsBox3, OurCreationsBox4 } from '../Alterations/OurCreationsStyles'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';

import "aos/dist/aos.css";

import Aos from 'aos';



function DesignersInHome() {
useEffect(() => {
  Aos.init({duration: 2000});
}, []);
  
const isPhone = useMediaQuery({ query: '(max-width: 800px)' });
const [first, setfirst] = useState('https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4894/4894C.jpg');
const [second, setsecond] = useState('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251805/designers/ronaldJoyce/69714/69714-1342_ngn7xr.jpg');
const [third, setthird] = useState('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251818/designers/victoriaJane/18610/18610_18621-4250_jognll.jpg');
const [fourth, setfourth] = useState('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/eliza/Eliza_qx6ewj.jpg');
const [fift, setfift] = useState('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264523/designers/sofiaBianca/ellaria/ellaria5_ccb7fl.png');
const [sixth, setsixth] = useState('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264517/designers/lusanMandongus/CARRIE-A_srmcp4.jpg');

const change1 = (v) => {
  if (isPhone) {
    setfirst(v)
    return
  }
}

const change2 = (v) => {
  if (isPhone) {
    setsecond(v)
    return
  }
}

const change3 = (v) => {
  if (isPhone) {
    setthird(v)
    return
  }
} 

const change4 = (v) => {
  if (isPhone) {
    setfourth(v)
    return
  }
} 

const change5 = (v) => {
  if (isPhone) {
    setfift(v)
    return
  }
} 

const change6 = (v) => {
  if (isPhone) {
    setsixth(v)
    return
  }
} 



  return (
    <>
    <br/>
    <br/>
    <h3
    style={{
        textAlign: 'center',
        color: 'rgb(115, 112, 137)',
        fontFamily: '"FuturaStd",sans-serif',
        fontWeight: '300',
        letterSpacing: '5px',


    }}
    > 
    DESIGNERS:
    </h3>

    
    <div 
    style={{
        padding: '2% 5%',
        
       
    }}
    
    >

        {/*  */}


        <br/>

        <div
        style={{
          border: 'double 5px #ede6e6',
          background:'#ffffff',
          borderRadius: '5px',
          padding: '1%',
        }}

        data-aos="fade-up"
        >

        <br/>
        <h4
        style={{
        fontFamily: '"FuturaStd",sans-serif',
        fontWeight: '300',
        letterSpacing: '2px',
        color: 'rgb(115, 112, 137)',
        fontSize:'30px',
        textAlign:'center'
        }}
        >
            Paloma Blanca
        </h4>

        <br/>
          
          {
            isPhone ? 
            <div
            style={{
              'width':'100%',
              'display':'flex',
              'justifyContent':'center',
              
            }}
            >

              <img src={first} width='90%'
              style={{'borderRadius': '10px'}}
              alt='paloma blanca, wedding dresses, chichester'
              />
              

            </div> :
            ''
          }

        <br/>
            
        <div>
              <div palomaBlancaResize="true"
              style={{
                width: '100%'
              }}
              
              >
     

              
                
                 <div style=
                 {{
                  //background:'black', 
                  width:'100%',
                  display: 'flex',
                  justifyContent:'space-around'

                  }}>
                <div
                style={{
                  'width':'19%',
                  'position':'relative'
                }}
                >
                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4894/4894C.jpg' 
                    onClick={() => change1('https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4894/4894C.jpg')}
                    style={{ 
                      borderRadius: '5px',
                      width:'100%',
                      
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>
                 <div style=
                 {{
                  'position':'absolute', 
                  'bottom':'10px', 
                  'right':'5px', 
                  'color':'white', 
                  'background':'#776161',
                  'padding':'5px',
                  'borderRadius':'5px',
                  'fontSize':'1.5vw'
                  }}>
                    <p>£ 2000</p>
                    </div>

                </div>
                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4977/4977C.jpg' 
                    onClick={() => change1('https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4977/4977C.jpg' )}
                    style={{
                        
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4978/4978C.jpg' 
                    onClick={() => change1('https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4978/4978C.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4984/4984D.jpg' 
                    onClick={() => change1('https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4984/4984D.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4987/4987F.jpg' 
                    onClick={() => change1('https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4987/4987F.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>
                     
                  </div>

            
           
              </div>

              </div>

          <br/>
          <OurCreationsBox3>
                
            <DescriptionOurCreations style={{'marginRight':"5%"}} >
              Short Description
            </DescriptionOurCreations>

          </OurCreationsBox3>

          <br/>
          <div
          style={{
            textAlign: 'center',
          }}
          >
          
          <Link to='/paloma-blanca'>

          <button
          style={{
            background:'transparent',
            border: 'none',
            backgroundColor: 'grey',
            padding: '10px',
            borderRadius: '10px',
            fontSize: '2vw',
            color: 'white',
            width: '60%',
            cursor:'pointer' 
          }}
          >
          
                View All
          </button>
          </Link>
          </div>
        </div>
        {/*  */}

        
        {/*  */}


  
   
        <br/>
        <br/>
        <br/>


        <div
        style={{
            border: 'double 5px #ede6e6',
            background:'#ffffff',
            borderRadius: '5px',
            padding: '1%',
        }}
        data-aos="fade-up"
        >
          <br/>
        <h4
        style={{
        fontFamily: '"FuturaStd",sans-serif',
        fontWeight: '300',
        letterSpacing: '2px',
        color: 'rgb(115, 112, 137)',
        fontSize:'30px',
        textAlign:'center'
        }}
        >
            Ronald Joyce
        </h4>

        <br/>

        {
            isPhone ? 
            <div
            style={{
              'width':'100%',
              'display':'flex',
              'justifyContent':'center'
            }}
            >

              <img src={second} width='90%' 
              style={{'borderRadius': '10px'}}
              alt="ronald joyce, wedding dresses, chichester"
              />
              

            </div> :
            ''
          }

            <br/>
            
        <div>
              <div palomaBlancaResize="true"
              style={{
                width: '100%'
              }}
              
              >
     

              
                
                 <div style=
                 {{
                  //background:'black', 
                  width:'100%',
                  display: 'flex',
                  justifyContent:'space-around'

                  }}>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251805/designers/ronaldJoyce/69714/69714-1342_ngn7xr.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251805/designers/ronaldJoyce/69714/69714-1342_ngn7xr.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251807/designers/ronaldJoyce/69717/69717-3111_ymjuhg.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251807/designers/ronaldJoyce/69717/69717-3111_ymjuhg.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251820/designers/ronaldJoyce/69555/69555_5144_xgpzo8.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251820/designers/ronaldJoyce/69555/69555_5144_xgpzo8.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251823/designers/ronaldJoyce/69559/69559_0319_xf9qqk.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251823/designers/ronaldJoyce/69559/69559_0319_xf9qqk.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                     
                  </div>
                 <br/>
                 

                  <div style=
                 {{
                  //background:'black', 
                  width:'100%',
                  display: 'flex',
                  justifyContent:'space-around'

                  }}>

                <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251797/designers/ronaldJoyce/69404/69404_109_fzpixn.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251797/designers/ronaldJoyce/69404/69404_109_fzpixn.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}

                    alt="ronald joyce, wedding dresses, chichester" 
                  >
                  
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251793/designers/ronaldJoyce/69153/69153-0049_cmztfu.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251793/designers/ronaldJoyce/69153/69153-0049_cmztfu.jpg')}
                    
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251804/designers/ronaldJoyce/69712/69712-2461_ryermb.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251804/designers/ronaldJoyce/69712/69712-2461_ryermb.jpg')} 
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251793/designers/ronaldJoyce/69153/69153-0049_cmztfu.jpg' 
                    onClick={() => change2('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251793/designers/ronaldJoyce/69153/69153-0049_cmztfu.jpg')}
                    style={{
                        
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                  </div>

            
           
              </div>

              </div>

          <br/>
          <OurCreationsBox3>
                
            <DescriptionOurCreations style={{'marginRight':"5%"}} >
              Short Description
            </DescriptionOurCreations>

          </OurCreationsBox3>

          <br/>
          <div
          style={{
            textAlign: 'center',
          }}
          >
            <Link to={'/ronald-joyce'}>
              
          <button
          style={{
            background:'transparent',
            border: 'none',
            backgroundColor: 'grey',
            padding: '10px',
            borderRadius: '10px',
            fontSize: '2vw',
            color: 'white',
            width: '60%',
            cursor: 'pointer',
          }}
          >
                View All
          </button>
            </Link>
          </div>
        </div>
        {/*  */}

        {/*  */}

                <br/>
                <br/>
                <br/>
     

<div
style={{
    border: 'double 5px #ede6e6',
    background:'#ffffff',
    borderRadius: '5px',
    padding: '1%',
}}
data-aos="fade-up"
>
<br/>

<h4
style={{
fontFamily: '"FuturaStd",sans-serif',
fontWeight: '300',
letterSpacing: '2px',
color: 'rgb(115, 112, 137)',
fontSize:'30px',
textAlign:'center'
}}
>
    Victoria Jane
</h4>

<br/>

{
            isPhone ? 
            <div
            style={{
              'width':'100%',
              'display':'flex',
              'justifyContent':'center'
            }}
            >

              <img src={third} width='90%' 
              style={{'borderRadius': '10px'}}
              alt="victoria jane, wedding dresses, chichester"
              />
              

            </div> :
            ''
          }

          <br/>
    
<div>
      <div palomaBlancaResize="true"
      style={{
        width: '100%'
      }}
      
      >


      
        
         <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251818/designers/victoriaJane/18610/18610_18621-4250_jognll.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251818/designers/victoriaJane/18610/18610_18621-4250_jognll.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251821/designers/victoriaJane/18563s/18563S_031_puyikh.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251821/designers/victoriaJane/18563s/18563S_031_puyikh.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251817/designers/victoriaJane/18501/18501-02_23745_goz5cz.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251817/designers/victoriaJane/18501/18501-02_23745_goz5cz.jpg')}
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251816/designers/victoriaJane/18353/18353_071_jtioy8.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251816/designers/victoriaJane/18353/18353_071_jtioy8.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251813/designers/victoriaJane/18312/18312_034_oaimek.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251813/designers/victoriaJane/18312/18312_034_oaimek.jpg')}
            
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>
             
          </div>
            <br/>
          {/*  */}
          <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251811/designers/victoriaJane/18253/18253_015_onomh8.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251811/designers/victoriaJane/18253/18253_015_onomh8.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251830/designers/victoriaJane/18218/18218_058R_dcdzja.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251830/designers/victoriaJane/18218/18218_058R_dcdzja.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251810/designers/victoriaJane/18158/18158_2246_aunh7w.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251810/designers/victoriaJane/18158/18158_2246_aunh7w.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251807/designers/victoriaJane/18053/18053-0035_tlknxv.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251807/designers/victoriaJane/18053/18053-0035_tlknxv.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251809/designers/victoriaJane/18057/18057-0043_ehp6b3.jpg' 
            onClick={() => change3('https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251809/designers/victoriaJane/18057/18057-0043_ehp6b3.jpg')}
            
            style={{
              
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>
             
          </div>

    
   
      </div>

      </div>

  <br/>
  <OurCreationsBox3>
        
    <DescriptionOurCreations style={{'marginRight':"5%"}} >
      Short Description
    </DescriptionOurCreations>

  </OurCreationsBox3>

  <br/>
  <div
  style={{
    textAlign: 'center',
  }}
  >
  <Link to={'/victoria-jane'}>

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%',
    cursor: 'pointer',
  }}
  >
        View All
  </button>
  </Link>
  </div>
</div>
{/*  */}


{/*  */}


        {/*  */}


     
                <br/>
                <br/>
                <br/>

<div
style={{
    border: 'double 5px #ede6e6',
    background:'#ffffff',
    borderRadius: '5px',
    padding: '1%',
}}
data-aos="fade-up"
>
<br/>
<h4
style={{
fontFamily: '"FuturaStd",sans-serif',
fontWeight: '300',
letterSpacing: '2px',
color: 'rgb(115, 112, 137)',
fontSize:'30px',
textAlign:'center'
}}
>
    Alan Hannah
</h4>

<br/>

{
            isPhone ? 
            <div
            style={{
              'width':'100%',
              'display':'flex',
              'justifyContent':'center'
            }}
            >

              <img src={fourth} width='90%' 
              style={{'borderRadius': '10px'}}
              alt="alan hannah, wedding dresses, chichester"
              />
              

            </div> :
            ''
          }

          <br/>
    
<div>
      <div palomaBlancaResize="true"
      style={{
        width: '100%'
      }}
      
      >


      
        
         <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/eliza/Eliza_qx6ewj.jpg' 
            onClick={() =>  change4('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/eliza/Eliza_qx6ewj.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/estelle/Estelle_gayzom.jpg' 
            onClick={() => {change4('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/estelle/Estelle_gayzom.jpg')}}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/lamar/Lamarr-wedding-dress_xpbqsr.jpg' 
            onClick={() => change4('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/lamar/Lamarr-wedding-dress_xpbqsr.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         

    
             
          </div>
            <br/>
          {/*  */}
          <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>




         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/lavinia/lavinia-wedding-dress_bjnkim.jpg' 
            onClick={() => change4('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/lavinia/lavinia-wedding-dress_bjnkim.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/millie/millie-wedding-dress_hnloji.jpg' 
            onClick={() => change4('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/millie/millie-wedding-dress_hnloji.jpg')}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/willow/willow-wedding-dress_oxh78h.jpg' 
            onClick={() => change4('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/willow/willow-wedding-dress_oxh78h.jpg')}
            
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>
             
          </div>

    
   
      </div>

      </div>

  <br/>
  <OurCreationsBox3>
        
    <DescriptionOurCreations style={{'marginRight':"5%"}} >
      Short Description
    </DescriptionOurCreations>

  </OurCreationsBox3>

  <br/>
  <div
  style={{
    textAlign: 'center',
  }}
  >
  <Link to={'/alan-hannah'}>

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%',
    cursor: 'pointer'
  }}
  >
        View All
  </button>
  </Link>
  </div>
</div>
{/*  */}

{/*  */}

                <br/>
                <br/>
                <br/>
                

<div
style={{
    border: 'double 5px #ede6e6',
    background:'#ffffff',
    borderRadius: '5px',
    padding: '1%',
}}
data-aos="fade-up"
>
<br/>
<h4
style={{
fontFamily: '"FuturaStd",sans-serif',
fontWeight: '300',
letterSpacing: '2px',
color: 'rgb(115, 112, 137)',
fontSize:'30px',
textAlign:'center'
}}
>
    Sofia Bianca
</h4>

<br/>

{
            isPhone ? 
            <div
            style={{
              'width':'100%',
              'display':'flex',
              'justifyContent':'center'
            }}
            >

              <img src={fift} width='90%' 
              style={{'borderRadius': '10px'}}
              alt="sofia bianca, wedding dresses, chichester"
              />
              

            </div> :
            ''
          }

          <br/>
    
<div>
      <div palomaBlancaResize="true"
      style={{
        width: '100%'
      }}
      
      >


      
        
         <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>


   

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264523/designers/sofiaBianca/ellaria/ellaria5_ccb7fl.png' 
            onClick={() =>  change5('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264523/designers/sofiaBianca/ellaria/ellaria5_ccb7fl.png')}
            style={{
              
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264524/designers/sofiaBianca/elin/elin_vrobrl.png' 
            onClick={() => change5('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264524/designers/sofiaBianca/elin/elin_vrobrl.png')}
            style={{
              
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264520/designers/sofiaBianca/ella/ella2_d8klei.png' 
            onClick={() => change5('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264520/designers/sofiaBianca/ella/ella2_d8klei.png')}
            style={{
              
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264524/designers/sofiaBianca/emmanuela/emmanuela1_ahibdb.png' 
            onClick={() => change5('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264524/designers/sofiaBianca/emmanuela/emmanuela1_ahibdb.png')}
            style={{
              
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>
             
          </div>

    
   
      </div>

      </div>

  <br/>
  <OurCreationsBox3>
        
    <DescriptionOurCreations style={{'marginRight':"5%"}} >
      Short Description
    </DescriptionOurCreations>

  </OurCreationsBox3>

  <br/>
  <div
  style={{
    textAlign: 'center',
  }}
  >
  <Link to={'/sofia-bianca'}>

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%',
    cursor:'pointer',
  }}
  >
        View All
  </button>
  </Link>
  </div>
</div>
{/*  */}


        {/*  */}

                <br/>
                <br/>
                <br/>

<div
style={{
    border: 'double 5px #ede6e6',
    background:'#ffffff',
    borderRadius: '5px',
    padding: '1%',
}}
data-aos="fade-up"
>
<br/>
<h4
style={{
fontFamily: '"FuturaStd",sans-serif',
fontWeight: '300',
letterSpacing: '2px',
color: 'rgb(115, 112, 137)',
fontSize:'30px',
textAlign:'center'
}}
>
    Lusan Mandongus
</h4>
<br/>

{
            isPhone ? 
            <div
            style={{
              'width':'100%',
              'display':'flex',
              'justifyContent':'center'
            }}
            >

              <img src={sixth} width='90%' 
              style={{'borderRadius': '10px'}}
              alt="lusan mandongus, wedding dresses, chichester"
              />
              

            </div> :
            ''
          }


<br/>
    
<div>
      <div palomaBlancaResize="true"
      style={{
        width: '100%'
      }}
      
      >


      
        
         <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264517/designers/lusanMandongus/CARRIE-A_srmcp4.jpg' 
            onClick={() => change6('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264517/designers/lusanMandongus/CARRIE-A_srmcp4.jpg')}
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/Lucia_dhg98t.png' 
            onClick={() => change6('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/Lucia_dhg98t.png')}
            style={{
              
                
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/IMG_3036_2_y1g3u8.png' 
            onClick={() => change6('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/IMG_3036_2_y1g3u8.png')}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         

    
             
          </div>
            <br/>
          {/*  */}
          <div style=
         {{
          //background:'black', 
          width:'100%',
          display: 'flex',
          justifyContent:'space-around'

          }}>




         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/IMG_3031_2_o2moqb.png' 
            onClick={()=> change6('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/IMG_3031_2_o2moqb.png')}
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264498/designers/lusanMandongus/IMG_3032_2_lzdrta.png' 
            onClick={()=> change6('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264498/designers/lusanMandongus/IMG_3032_2_lzdrta.png')}
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264497/designers/lusanMandongus/lanza_wnhggi.png' 
            onClick={() => change6('https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264497/designers/lusanMandongus/lanza_wnhggi.png')}
            
            style={{
              
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>
             
          </div>

    
   
      </div>

      </div>

  <br/>
  <OurCreationsBox3>
        
    <DescriptionOurCreations style={{'marginRight':"5%"}} >
      Short Description
    </DescriptionOurCreations>

  </OurCreationsBox3>

  <br/>
  <div
  style={{
    textAlign: 'center',
  }}
  >
  <Link to={'/lusan-mandongus'}>

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%',
    cursor:'pointer',
  }}
  >
        View All
  </button>
  </Link>
  </div>
</div>
{/*  */}

{/*  */}




        
    </div>
   </>
  )
}

export default DesignersInHome