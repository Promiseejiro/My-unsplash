import {useState} from "react";
import Btn from "../components/btn";

//dependencies
import axios from "axios"
interface photo{
  photoObjects:any
  
}
const Photo =({photoObjects}:photo)=>{
  const [showOverlay,setShowOverlay]=useState(false)
  const showOverlayHandler =()=>{
    setShowOverlay(true)
  };
  
  const hideOverlayHandler=()=>{
    setShowOverlay(false)
  }
  window.addEventListener('scroll', hideOverlayHandler)
  
  const preDeleteHandler =async()=>{
    await axios.delete("");
  }
  return(  
  <div className="photo-container" onClick={showOverlayHandler}>
 <img className="photo rounded-[10px]" src={photoObjects.filepath}/>
 { showOverlay && <div>  <div className="photo-overlay"></div>
 <h3 className="photo-title">{photoObjects.label}</h3>
 <div className="delete-btn"><Btn text="Delete"onclickHandler={preDeleteHandler} bgcolor="red"/></div> </div>}
 </div>
 )
}
export default Photo