import {Request, Response} from "express";
import photoSchema from "../modal/photo_model";
import cloudinary from "../utils/cloudinarySetup"
export const addPhoto =async (req:Request,res:Response)=>{
  try{
    if(req.file){
    const {label } =await req.body
  const cloudinaryResponse =await cloudinary.uploader.upload(req.file?.path,{
    folder:"my-unsplash",
    resource_type:"auto",
  },
  );
  console.log(cloudinaryResponse)
const newPhoto =new  photoSchema({
   label:label,
   filepath:cloudinaryResponse.secure_url
 });
 if(newPhoto){
   newPhoto.save()
   res.status(200).send(newPhoto);
 }
    }
    else {
      const {label ,filepath} =await req.body
   
   const newPhoto =new photoSchema({
     label:label,filepath:filepath
   });
   console.log(newPhoto);
   res.send(newPhoto);
 }
  }
 catch(error){
   console.log(error)
 }
}
export const getAllPhoto =async(req:Request,res:Response)=>{
  const allPhoto =await photoSchema.find()
  if(allPhoto){
    res.send(allPhoto);
  }
  if(!allPhoto){
    res.status(200).send("No photo present")
  }
}

export const searchPhoto =async(req:Request,res:Response)=>{
  const {label} =await req.body
  const query = photoSchema.find({label:label})
  res.send(query);
}

export const deletePhoto =async (req:Request,res:Response)=>{
  const {id} =req.body
  const deletedPhoto = await photoSchema.deleteOne({_id:id});
  if(deletedPhoto){
res.send(deletedPhoto);
  }
}















