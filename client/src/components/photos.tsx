import React,{useEffect,useState} from "react";

import Photo from "./photo";
import axios from "axios";
const Photos =()=>{
  const fetchData =async()=>{
    const data =await axios.get("https://unsplash-qoun.onrender.com/photos");
    setPhotos(data.data)
  }
  const [photos,setPhotos] =useState([])
  useEffect(()=>{
    fetchData()
  },[])
  return(<div>
  {
photos.map((photo:any)=>(<Photo photoObjects={photo}/>))  
  }
  </div>
  )
}
export default Photos