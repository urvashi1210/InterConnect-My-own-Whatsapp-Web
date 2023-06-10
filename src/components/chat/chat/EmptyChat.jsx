import { emptyChatImage } from "../../../constants/data"

import { Box,Typography,styled } from "@mui/material"

const Component=styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:100%;
`;

const Container=styled(Box)`
padding:0 200px;
`;

const Image=styled('img')({
    width:400,
    marginTop:100
})

const EmptyChat=()=>{
return(
    <Component>
        <Container>
           <Image src={emptyChatImage} alt="image"/> 
           <Typography>Whatsapp Web</Typography>
           <Typography>Now send and receive messages wihtout keeping your phone online.</Typography>
           <Typography>Use whatsapp on upto 4 linked devices and 1 phone at the same time.</Typography>
        </Container>
    </Component>
)
}

export default EmptyChat;