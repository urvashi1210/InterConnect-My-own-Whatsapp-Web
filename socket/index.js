
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';


dotenv.config();
const app = express();


app.use(cors());

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

