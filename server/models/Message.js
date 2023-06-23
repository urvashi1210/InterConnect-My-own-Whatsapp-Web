import mongoose from 'mongoose';

const messageSchema=new mongoose.Schema({
    conversationId:{
        type:String
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},
{
        timeStamps:true
    }
);

const message=mongoose.model('Message',messageSchema);

export default message;

