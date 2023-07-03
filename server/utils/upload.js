import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

import {GridFsStorage} from 'multer-gridfs-storage';

const storage = new GridFsStorage({ url:`mongodb+srv://${USERNAME}:${PASSWORD}@nexuschat.wzzqmts.mongodb.net/?retryWrites=true&w=majority`,
 options:{
    useUnifiedTopology:true,
    useNewUrlParser:true
 },
 file:(req,file)=>{
    const match=["image/png","image/jpg"];
    if(match.indexOf(file.mimeType)===-1){
        return `${Date.now()}-file-${file.originalname}`;
    
    }
    return{
        bucketName:"photos",
        filename:`${Date.now()}-file-${file.originalname}`
    }
 }
});

export default multer({storage});