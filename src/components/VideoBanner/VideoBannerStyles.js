import styled from "styled-components";
import { FaPlayCircle, FaStop, FaStopCircle} from "react-icons/fa";




export const Video = styled.video`
width:100% ;

`

export const ContainerVideo = styled.div`
position: relative;
width: 100%;
height: auto;
`


export const LogoVideo = styled.div`
position:absolute ;

height: 150;
width:100% ;
bottom: 0;
background-color: #a7a7a7;
border-radius: 5px;
left: 0;
color:white ;
padding:15px ;
display:flex ;
justify-content: center;
align-items:center ;
cursor: pointer;
padding:15px ;
font-family: 'Carattere',cursive !important;
font-size:55px ;
background-color: #0000003d;
backdrop-filter: blur(8px);




`

export const StopIcon = styled(FaStop)`


`

