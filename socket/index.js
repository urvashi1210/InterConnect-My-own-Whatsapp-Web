import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

let users = [];

// Helper function to find a user by userId
const getUsers = (userId) => {
    return users.find(user => user.sub === userId);
};

// Add user to the users array if they don't already exist
const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users.push({ ...userData, socketId });
    }
};

// Remove user from the users array by their socketId
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

io.on('connection', (socket) => {
    console.log('User connected via socket:', socket.id);

    // Handle adding users
    socket.on("addUsers", (userData) => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    // Handle sending messages
    socket.on('sendMessage', (data) => {
        const user = getUsers(data.receiverId);
        if (user) {
            io.to(user.socketId).emit('getMessage', data);  // Send message to the receiver
        } else {
            console.log(`User with receiverId ${data.receiverId} not found`);
        }
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log(`User with socketId ${socket.id} disconnected`);
        removeUser(socket.id);
        io.emit('getUsers', users);  // Update the users list for all clients
    });
});
