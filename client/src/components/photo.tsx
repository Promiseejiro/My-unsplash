import {useState} from "react"
import Btn from "../components/btn"
const Photo =()=>{
  const [showOverlay,setShowOverlay]=useState(true)
  return(  
  <div className="photo-container">
 <img className="photo rounded-[10px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU"/>
 { showOverlay && <div>  <div className="photo-overlay"></div>
 <h3 className="photo-title"> Camera</h3>
 <div className="delete-btn"><Btn text="Delete"onclickHandler={()=>{
 }}/></div> </div>}

 </div>
 )
}
export default Photo