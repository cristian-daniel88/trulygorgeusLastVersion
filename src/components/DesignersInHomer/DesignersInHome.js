import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { CartGridOurCreations, img, DescriptionOurCreations, OurCreationsBox3, OurCreationsBox4 } from '../Alterations/OurCreationsStyles'
import { useMediaQuery } from 'react-responsive'



function DesignersInHome() {
const isPhone = useMediaQuery({ query: '(max-width: 800px)' }) 
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

              <img src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4894/4894C.jpg' width='90%'
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

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4894/4894C.jpg' 
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4977/4977C.jpg' 
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4978/4978C.jpg' 
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4984/4984D.jpg' 
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'19%' 
                    }}
                    alt='paloma blanca, wedding dresses, chichester'
                    >
                 </img>

                 <img
                    src='https://trulygorgeous.co.uk/imgs/designers/palomaBlancaLow/4987/4987F.jpg' 
                    palomaBlancaResize="true"
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

          <button
          style={{
            background:'transparent',
            border: 'none',
            backgroundColor: 'grey',
            padding: '10px',
            borderRadius: '10px',
            fontSize: '2vw',
            color: 'white',
            width: '60%'
          }}
          >
                View All
          </button>
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

              <img src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251805/designers/ronaldJoyce/69714/69714-1342_ngn7xr.jpg' width='90%' 
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
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251807/designers/ronaldJoyce/69717/69717-3111_ymjuhg.jpg' 
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251820/designers/ronaldJoyce/69555/69555_5144_xgpzo8.jpg' 
                    palomaBlancaResize="true"
                    style={{
                       
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251823/designers/ronaldJoyce/69559/69559_0319_xf9qqk.jpg' 
                    palomaBlancaResize="true"
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
                    palomaBlancaResize="true"  
                    style={{
                       
                        borderRadius: '5px',
                        width:'24%' 
                    }}

                    alt="ronald joyce, wedding dresses, chichester" 
                  >
                  
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251793/designers/ronaldJoyce/69153/69153-0049_cmztfu.jpg' 
                    palomaBlancaResize="true"
                    
                    style={{
                       
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251804/designers/ronaldJoyce/69712/69712-2461_ryermb.jpg' 
                    palomaBlancaResize="true"   
                    style={{
                       
                        borderRadius: '5px',
                        width:'24%' 
                    }}
                    alt="ronald joyce, wedding dresses, chichester"
                    >
                 </img>

                 <img
                    src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251793/designers/ronaldJoyce/69153/69153-0049_cmztfu.jpg' 
                    palomaBlancaResize="true"  
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

          <button
          style={{
            background:'transparent',
            border: 'none',
            backgroundColor: 'grey',
            padding: '10px',
            borderRadius: '10px',
            fontSize: '2vw',
            color: 'white',
            width: '60%'
          }}
          >
                View All
          </button>
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

              <img src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251818/designers/victoriaJane/18610/18610_18621-4250_jognll.jpg' width='90%' 
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251821/designers/victoriaJane/18563s/18563S_031_puyikh.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251817/designers/victoriaJane/18501/18501-02_23745_goz5cz.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251816/designers/victoriaJane/18353/18353_071_jtioy8.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251813/designers/victoriaJane/18312/18312_034_oaimek.jpg' 
            palomaBlancaResize="true"
            
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251830/designers/victoriaJane/18218/18218_058R_dcdzja.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251810/designers/victoriaJane/18158/18158_2246_aunh7w.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251807/designers/victoriaJane/18053/18053-0035_tlknxv.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'19%' 
            }}
            alt="victoria jane, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251809/designers/victoriaJane/18057/18057-0043_ehp6b3.jpg' 
            palomaBlancaResize="true"
            
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

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%'
  }}
  >
        View All
  </button>
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

              <img src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/eliza/Eliza_qx6ewj.jpg' width='90%' 
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/estelle/Estelle_gayzom.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264527/designers/alanHannah/lamar/Lamarr-wedding-dress_xpbqsr.jpg' 
            palomaBlancaResize="true"
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/millie/millie-wedding-dress_hnloji.jpg' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="alan hannah, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264528/designers/alanHannah/willow/willow-wedding-dress_oxh78h.jpg' 
            palomaBlancaResize="true"
            
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

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%'
  }}
  >
        View All
  </button>
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

              <img src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264523/designers/sofiaBianca/ellaria/ellaria5_ccb7fl.png' width='90%' 
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264524/designers/sofiaBianca/elin/elin_vrobrl.png' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264520/designers/sofiaBianca/ella/ella2_d8klei.png' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'24%' 
            }}
            alt="sofia bianca, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264524/designers/sofiaBianca/emmanuela/emmanuela1_ahibdb.png' 
            palomaBlancaResize="true"
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

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%'
  }}
  >
        View All
  </button>
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

              <img src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264517/designers/lusanMandongus/CARRIE-A_srmcp4.jpg' width='90%' 
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/Lucia_dhg98t.png' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264499/designers/lusanMandongus/IMG_3036_2_y1g3u8.png' 
            palomaBlancaResize="true"
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
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264498/designers/lusanMandongus/IMG_3032_2_lzdrta.png' 
            palomaBlancaResize="true"
            style={{
               
                borderRadius: '5px',
                width:'32%' 
            }}
            alt="lusan mandongus, wedding dresses, chichester"
            >
         </img>

         <img
            src='https://res.cloudinary.com/truly-gorgeous/image/upload/v1647264497/designers/lusanMandongus/lanza_wnhggi.png' 
            palomaBlancaResize="true"
            
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

  <button
  style={{
    background:'transparent',
    border: 'none',
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '2vw',
    color: 'white',
    width: '60%'
  }}
  >
        View All
  </button>
  </div>
</div>
{/*  */}

{/*  */}




        
    </div>
   </>
  )
}

export default DesignersInHome