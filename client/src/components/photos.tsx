import React,{useEffect,useState} from "react";
//components
import Photo from "./photo";
//dependencies
import axios from "axios";
interface PhotosIn{
  photos:any;
  deletehandler:any
}

const Photos =({photos,deletehandler}:PhotosIn)=>{
  return(<div>
  {
photos.map((photo:any)=>(<Photo photoObjects={photo}  deletehandler={deletehandler}/>))  
  }
  </div>
  )
}
export default Photos