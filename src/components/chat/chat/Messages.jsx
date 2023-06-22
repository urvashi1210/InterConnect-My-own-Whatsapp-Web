import {useContext,useState,useEffect} from 'react';

import { Box, styled } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider.jsx';

import { newMessage,getMessages } from '../../../service/api.js';

//components
import Footer from './Footer.jsx'

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;
    `;
//using url instead of img tag makes it easy to display messages on the background 

const Component=styled(Box)`
height:80vh;
overflow-y:scroll;
`;

const Messages=({person,conversation})=>{

    const [value,setValue]=useState('');

    const [messages,setMessages]=useState([]);

    useEffect(()=>{
        const getMessageDetails=async()=>{
            let data=await getMessages(conversation._id);
            console.log(data);
            setMessages(data);
        }

        conversation._id&&getMessageDetails();

    },[person._id,conversation._id]);

    const {account}=useContext(AccountContext);

    const sendText=async(e)=>{
        console.log(e);
        const code=e.keyCode||e.which;
        if(code===13){
           let message={
            senderId:account.sub,
            receiverId:person.sub,
            ConversationId:conversation._id,
            type:'text',
            text:value
           } 
           await newMessage(message);
           console.log('messages.jsx works fine')
           setValue('');
        }
    }

    return(
       <Wrapper>
            <Component>
            {
                messages&&messages.map(message=>{

                })
            }
            </Component>
            <Footer 
            sendText={sendText}
            value={value}
            setValue={setValue}
            />
       </Wrapper>
    )
}

export default Messages;