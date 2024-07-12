import {Server} from 'socket.io';
import dotenv from 'dotenv';
// dotenv.config({ path: '../client/.env' });
dotenv.config();

// const io=new Server(9000,{
//         cors:{
//             origin:REACT_APP_CLIENT_URL
//         }
//     })

// const io=new Server(9000,{
//     cors:{
//         origin:REACT_APP_CLIENT_URL
//     }
// })

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'interconnect-socket';
const SOCKET_PORT = process.env.REACT_APP_SOCKET_PORT || 9000;


const io=new Server(SOCKET_PORT,{
    cors:{
        origin:process.env.REACT_APP_CLIENT_URL
    }
})


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

console.log(`Socket server running on ${SOCKET_URL}:${SOCKET_PORT}`);