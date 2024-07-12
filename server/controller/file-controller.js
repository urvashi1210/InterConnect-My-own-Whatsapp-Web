import grid from 'gridfs-stream';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
// dotenv.config({ path: '../client/.env' });

dotenv.config();

// const url='http://localhost:8000';

const url=process.env.REACT_APP_SERVER_URL;

let gfs,gridFsBucket;
const conn=mongoose.connection;
conn.once('open',()=>{
    gridFsBucket=new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs',
    });
    gfs=grid(conn.db,mongoose.mongo);//2 parameters are : database name and mongoose's server
    gfs.collection('fs');
})

export const uploadFile=(req,res)=>{
    if(!req.file){
       return res.status(404).json('File not found'); 
    }
    const imageUrl=`${url}/file/${req.file.filename}`;

return res.status(200).json(imageUrl);

}

export const getFile=async(req,res)=>{
    try{
        const file=await gfs.files.findOne({filename:req.params.filename});
        const readStream=gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    }catch(error){
        res.status(500).json(error.message);
    }
}