import axios from 'axios';

const url='http://localhost:8000';

export const addUser=async (data)=>{
    try{
    let res=await axios.post(`${url}/add`,data);
    return res.data;
    }catch(error){
    console.log('Error with addUser API',error.message);
    }
}

export const getUsers=async()=>{
   try{
    let res=await axios.get(`${url}/users`);
    console.log(res);
    return res.data;
   }catch(error){
    console.log(`Error while calling getUsers api`,error.message);
   } 
}

export const setConversation=async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log('Error while calling setConversation api',error.message);
    }
}


// export const getMessages = async (id) => {
//     try {
//         let response = await axios.get(`${url}/message/get/${id}`);
//         return response.data
//     } catch (error) {
//         console.log('Error while calling getMessages API ', error);
//     }
// }

// export const newMessages = async (data) => {
//     try {
//         return await axios.post(`${url}/message/add`, data);
//     } catch (error) {
//         console.log('Error while calling newConversations API ', error);
//     }
// }

// export const uploadFile = async (data) => {
//     try {
//         return await axios.post(`${url}/file/upload`, data);
//     } catch (error) {
//         console.log('Error while calling newConversations API ', error);
//     }
// }