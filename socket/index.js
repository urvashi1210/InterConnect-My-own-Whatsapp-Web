import dotenv from 'dotenv';
import {Server} from 'socket.io';
dotenv.config();

// const io=new Server(9000,{
//     cors:{
//         origin:['http://localhost:3000','https://interconnect-whatsapp-web-clone.onrender.com/','https://interconnect-whatsapp-web-clone-api.onrender.com/']
//     }
// })

const io = new Server(process.env.PORT || 9000, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

let users=[];

const getUsers=(userId)=>{
    return users.find(user=>user.sub===userId);//find method returns entire object which has socketId(we need socketId coz socket.io works on socketId not mongodb's receiver or sender Id given by us)
}

const addUser=(userData,socketId)=>{
    !users.some(user=>user.sub===userData.sub)&&users.push({...userData,socketId});
}

io.on('connection',(socket)=>{
    console.log('user connected via socket');

    //connect
    socket.on("addUsers",userData=>{
        addUser(userData,socket.id);
        io.emit("getUsers",users);
    })

      //send message
      socket.on('sendMessage', (data) => {
        const user = getUsers(data.receiverId); io.to(user.socketId).emit('getMessage', data);//data object has the msg
    })
   //we send 3 things senderId,receiverId and ConversationId and here we need to know receiverId
       

    //disconnect
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    //     removeUser(socket.id);
    //     io.emit('getUsers', users);
    // })
})
