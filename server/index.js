import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Route from './routes/route.js';

import dotenv from 'dotenv';
dotenv.config({ path: '../client/.env' });

const app=express();

// app.use(cors());

// app.use(
//     cors({
//       origin: ['http://localhost:3000','http://localhost:8000']
//     })
//   );


// app.use(
//   cors({
//     origin: ['http://localhost:3000',process.env.REACT_APP_SERVER_URL]
//   })
// );

app.use(
    cors({
      origin: [process.env.REACT_APP_CLIENT_URL,process.env.REACT_APP_SERVER_URL]
    })
  );

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
    next();
  });  

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

// app.use('/', (req, res) => {
//   res.send('Hello, world!');
// });



Connection();//Connect before making server i.e. before app.listen()

// const PORT=8000;

// app.listen(PORT,()=>{
//     console.log(`Server is running on PORT ${PORT}`)
// })

const PORT = process.env.REACT_APP_SERVER_PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.use('/', Route);