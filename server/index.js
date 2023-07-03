import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Route from './routes/route.js';

const app=express();

// app.use(cors());

app.use(
    cors({
      origin: ['http://localhost:3000','http://localhost:8000',"https://interconnect.onrender.com"]
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

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

app.use('/', Route);