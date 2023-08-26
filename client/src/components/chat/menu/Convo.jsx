import {Box,Typography,styled} from '@mui/material'

import { useContext,useEffect,useState } from 'react';

import { AccountContext } from '../../../context/AccountProvider';

import { setConversation, getConversation } from '../../../service/api';

import { formatDate } from '../../../utils/common-utils';

// Replace the localhost URLs with Render-hosted URLs
const RENDER_API_URL = 'https://interconnect-whatsapp-web-clone-api.onrender.com'; // Update with the correct Render API URL


const Component=styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`;

const Image=styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding:'0 14px',
    cursor:'pointer'
})

const Container=styled(Box)`
display:flex;
`;

const TimeStamp=styled(Typography)`
font-size:12px;
margin-left:auto;
margin-right:12px;
color:#00000099;
`;

const Text=styled(Typography)`
font-size:14px;
color:rgba(0,0,0,0.6);
display:block;
`;

const Convo=({user})=>{

const {setPerson,account}=useContext(AccountContext);

const [message,setMessage,newMessageFlag]=useState({});

useEffect(()=>{
    const getConversationDetails=async()=>{
       const data= await getConversation({senderId:account.sub,receiverId:user.sub});
        setMessage({text:data?.message,timestamp:data?.updatedAt});

    }
    getConversationDetails();
},[newMessageFlag])

const getUser=async()=>{
    setPerson(user);
    await setConversation({senderId:account.sub,receiverId:user.sub,})
}

    return(
      <Component onClick={()=>getUser()}>
        <Box>
            <Image src={user.picture} alt="dp"/>
        </Box>
        <Box style={{width:'100%'}}>
            <Container> 
            <Typography>{user.name}</Typography>
            {
                message?.text&&
                <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
            }    
            </Container>
        <Box>
            <Text>{message?.text?.includes(RENDER_API_URL)?'media':message.text}</Text>
        </Box> 
        </Box>
      </Component>
    )
}

export default Convo;