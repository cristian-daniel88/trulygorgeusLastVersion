import styled from "styled-components";
import { FaPlayCircle, FaStop, FaStopCircle} from "react-icons/fa";




export const Video = styled.video`
width:100% ;

`

export const ContainerVideo = styled.div`
position: relative;

`


export const LogoVideo = styled.div`
position:absolute ;

height: 8%;
top: 87%;
background-color: #a7a7a7;
border-radius: 5px;
left: 4%;
color:white ;
padding:10px ;
display:flex ;
justify-content: center;
align-items:center ;
cursor: pointer;
font-family: 'Carattere',cursive !important;

//font-size: 40px;

`

export const StopIcon = styled(FaStop)`


`

