// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// import Connection from './database/db.js';
// import Route from './routes/route.js';

// const app=express();

// // app.use(cors());

// // app.use(
// //     cors({
// //       origin: ['http://localhost:3000','http://localhost:8000','http://localhost:9000',"https://InterConnect--Whatsapp-Web-Clone.onrender.com","https://InterConnect--Whatsapp-Web-Clone-socket.onrender.com"]
// //     })
// //   );

// app.use(cors());

// // app.use((req, res, next) => {
// //     res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
// //     next();
// //   }); 
  
//   app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://interconnect-whatsapp-web-clone.onrender.com');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });

// app.use(bodyParser.json({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))

// // app.use('/', (req, res) => {
// //   res.send('Hello, world!');
// // });


// Connection();//Connect before making server i.e. before app.listen()

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on PORT ${PORT}`);
// });


// app.use('https://interconnect-whatsapp-web-clone-api.onrender.com', Route);


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Route from './routes/route.js';

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://interconnect-whatsapp-web-clone.onrender.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

Connection(); // Connect before making server i.e. before app.listen()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.use('/', Route);
