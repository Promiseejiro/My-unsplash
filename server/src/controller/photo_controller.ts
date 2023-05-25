import {Request, Response} from "express";
import photoSchema from "../modal/photo_model";
import cloudinary from "../utils/cloudinarySetup";

export const selectPhoto =async(req:Request,res:Response)=>{
  try{
    if(req.file){
      const cloudinaryResponse =await cloudinary.uploader.upload(req.file?.path,{
    folder:"my-unsplash",
    resource_type:"auto",
  },
  );
  
  console.log(cloudinaryResponse)
  res.status(200).json({filepath:cloudinaryResponse.secure_url})
    }
  }catch(error){
    console.log(error)
  }
  
}
export const addPhoto =async (req:Request,res:Response)=>{
  try{
      const {label ,filepath} =await req.body
   const newPhoto =new photoSchema({
     label:label,filepath:filepath
   });
   newPhoto.save()
   res.send(newPhoto);
  }
 catch(error){
   console.log(error)
 }
}
export const getAllPhoto =async(req:Request,res:Response)=>{
  console.log(req.query["search"])
  const photos =await photoSchema.find({label:{ $regex:req.query["search"], $options:"i"}
 });
  if(photos){
    res.send(photos);
  }
}


export const deletePhoto =async (req:Request,res:Response)=>{
  const {id}= await req.params
  console.log(id)
  try{
    
  const deletedPhoto = await photoSchema.deleteOne({_id:id});
  if(deletedPhoto){
res.send(deletedPhoto);
  }
  }catch(erro){
    res.send(erro)
  }
}









