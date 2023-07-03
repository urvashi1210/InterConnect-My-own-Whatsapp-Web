import Message from "../models/Message.js"
import Conversation from "../models/Conversation.js"


export const newMessage=async(req,res)=>{

 try{
     console.log("newMessage",req.body);
    const newMessage=new Message(req.body);
// console.log(newMessage);
    await newMessage.save();
    
    
    await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
// console.log(Conversation);
    return res.status(200).json('Message has been sent successfully');

 }catch(error){
    return res.status(500).json(error.message)
 }   
}

export const getMessages=async(req,res)=>{
    try{
        
        // console.log("this is for messages");
        // console.log(req.params.id);
        const messages=await Message.find({conversationId:req.params.id})
        console.log("msgs",messages);
        return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json(error.message);
    }
}