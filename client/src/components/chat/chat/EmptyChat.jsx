import { emptyChatImage } from "../../../constants/data"

import { Box,Typography,styled,Divider } from "@mui/material"

const Component=styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:100vh;
`;

const Container=styled(Box)`
padding:0 200px;
`;

const Title=styled(Typography)`
font-size:32px;
margin:25px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41525d;
`;

const Subtitle=styled(Typography)`
font-fize:14px;
color:#667781;
font-weight:400;
font-family:inherit;
`;

const Image=styled('img')({
    width:400,
    marginTop:100
})

const StyledDivider=styled(Divider)`
margin:40px 0;
opacity:0.4;
`;

const EmptyChat=()=>{
return(
    <Component>
        <Container>
           <Image src={emptyChatImage} alt="image"/> 
           <Title>Whatsapp Web</Title>
           <Subtitle>Now send and receive messages wihtout keeping your phone online.</Subtitle>
           <Typography>Use whatsapp on upto 4 linked devices and 1 phone at the same time.</Typography>
           <StyledDivider />
        </Container>
    </Component>
)
}

export default EmptyChat;