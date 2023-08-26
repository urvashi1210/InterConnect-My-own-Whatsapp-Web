// // import dotenv from 'dotenv';
// // import {Server} from 'socket.io';
// // dotenv.config();

// // // const io=new Server(9000,{
// // //     cors:{
// // //         origin:['http://localhost:3000','https://interconnect-whatsapp-web-clone.onrender.com/','https://interconnect-whatsapp-web-clone-api.onrender.com/']
// // //     }
// // // })

// // const io = new Server(process.env.PORT || 9000, {
// //     cors: {
// //       origin: '*',
// //       methods: ['GET', 'POST']
// //     }
// //   });

// // let users=[];

// // const getUsers=(userId)=>{
// //     return users.find(user=>user.sub===userId);//find method returns entire object which has socketId(we need socketId coz socket.io works on socketId not mongodb's receiver or sender Id given by us)
// // }

// // const addUser=(userData,socketId)=>{
// //     !users.some(user=>user.sub===userData.sub)&&users.push({...userData,socketId});
// // }

// // io.on('connection',(socket)=>{
// //     console.log('user connected via socket');

// //     //connect
// //     socket.on("addUsers",userData=>{
// //         addUser(userData,socket.id);
// //         io.emit("getUsers",users);
// //     })

// //       //send message
// //       socket.on('sendMessage', (data) => {
// //         const user = getUsers(data.receiverId); io.to(user.socketId).emit('getMessage', data);//data object has the msg
// //     })
// //    //we send 3 things senderId,receiverId and ConversationId and here we need to know receiverId
       

// //     //disconnect
// //     // socket.on('disconnect', () => {
// //     //     console.log('user disconnected');
// //     //     removeUser(socket.id);
// //     //     io.emit('getUsers', users);
// //     // })
// // })

// import dotenv from 'dotenv';
// import { Server } from 'socket.io';
// import express from 'express';


// dotenv.config();
// const app = express();


// const io = new Server(process.env.PORT || 9000, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST','PUT', 'DELETE'],
//   },
// });

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://interconnect-whatsapp-web-clone.onrender.com, https://interconnect-whatsapp-web-clone-api.onrender.com, https://interconnect-whatsapp-web-clone-socket.onrender.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });


// let users = [];

// const getUsers = (userId) => {
//   return users.find((user) => user.sub === userId);
// };

// const addUser = (userData, socketId) => {
//   !users.some((user) => user.sub === userData.sub) && users.push({ ...userData, socketId });
// };

// io.on('connection', (socket) => {
//   console.log('user connected via socket');

//   // Connect
//   socket.on('addUsers', (userData) => {
//     addUser(userData, socket.id);
//     io.emit('getUsers', users);
//   });

//   // Send message
//   socket.on('sendMessage', (data) => {
//     const user = getUsers(data.receiverId);
//     io.to(user.socketId).emit('getMessage', data);
//   });
// });

import dotenv from 'dotenv';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';


dotenv.config();
const app = express();


app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://interconnect-whatsapp-web-clone.onrender.com, https://interconnect-whatsapp-web-clone-api.onrender.com, https://interconnect-whatsapp-web-clone-socket.onrender.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const io = new Server(process.env.PORT || 9000, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

let users = [];

const getUsers = (userId) => {
  return users.find((user) => user.sub === userId);
};

const addUser = (userData, socketId) => {
  console.log("socketId",socketId);
  !users.some((user) => user.sub === userData.sub) && users.push({ ...userData, socketId });
};

io.on('connection', (socket) => {
  console.log('user connected via socket on port' );

  // Connect
  socket.on('addUsers', (userData) => {
    addUser(userData, socket.id);
    io.emit('getUsers', users);
  });

  // Send message
  socket.on('sendMessage', (data) => {
    const user = getUsers(data.receiverId);
    console.log(user,"user");
    io.to(user.socketId).emit('getMessage', data);
  });
});

// socket.on('sendMessage', (data) => {
//   const user = getUsers(data.receiverId);
//   console.log('User:', user);
  
//   if (user && user.socketId) {
//     io.to(user.socketId).emit('getMessage', data);
//   } else {
//     console.log(`User with receiverId ${data.receiverId} not found or missing socketId.`);
//   }
// });

// })

