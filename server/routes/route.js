import express from 'express'

import { addUser,getUsers } from '../controller/user-controller.js';
import { newConversation,getConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from '../controller/message-controller.js';
import { uploadFile,getFile } from '../controller/file-controller.js';

import upload from '../utils/upload.js'

const route=express.Router();

route.get('/',(req, res) => {
    res.send('Hello, world!');
  });
route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.get('/message/get/:id',getMessages)
route.post('/message/add',newMessage);
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getFile);
export default route;