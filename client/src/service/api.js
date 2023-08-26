import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// const url='http://localhost:8000';

// const url =
//       process.env.NODE_ENV === 'production'
//         ? 'https://interconnect-whatsapp-web-clone-api.onrender.com'
//         : 'http://localhost:8000';

const url=`https://Interconnect-whatsapp-web-clone-api.onrender.com`;

// const url='https://interconnect-whatsapp-web-clone-api.onrender.com';
// const url2 ='https://interconnect-whatsapp-web-clone-socket.onrender.com';

console.log("url" , url);

export const addUser=async (data)=>{
    try{
    let res=await axios.post(`${url}/add`,data);
    console.log("addUser api : ",res.data);
    return res.data;
    }catch(error){
    console.log('Error with addUser API',error.message);
    }
}

export const getUsers=async()=>{
   try{
    let res=await axios.get(`${url}/users`);
    console.log("getUsers api : ",res.data);
    return res.data;
   }catch(error){
    console.log(`Error while calling getUsers api`,error.message);
   } 
}

export const setConversation=async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
        console.log('setConversation api works fine')
    }catch(error){
        console.log('Error while calling setConversation api',error.message);
    }
}

export const getConversation=async(data)=>{
    try{
       let res= await axios.post(`${url}/conversation/get`,data);
       console.log("getConvo api : ",res.data); 
       return res.data;
    }catch(error){
        console.log('Error while calling setConversation api',error.message);
    }
}


export const getMessages = async (id) => {
    try {
        
        let response = await axios.get(`${url}/message/get/${id}`);
        console.log("hello");
        console.log(id);
        console.log("getMessages api : ",response.data)
        return response.data;
    } catch (error) {
        console.log('Error while calling getMessages API ', error.message);
    }
}


export const newMessage = async (data) => {
    try {
        console.log('newMessage api works fine')
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling new message API ', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log(data);
        console.log('Error while uploadFile API ', error.message);
    }
}                        
