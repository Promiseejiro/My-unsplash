import React,{useState} from "react"
//components
import Header from "../components/header";
import Btn from "../components/btn";
import Modal from "../components/modal";
import Photos from "../components/photos"
import SearchBar from "../components/search-bar"
//packages
import axios from "axios"
interface PhotoInfo {
  label:String;
  photoUrl: String
}
const Homepage =()=>{
  const [showAddModal,setAddModal]=useState(false)
  const [photoInfo,setPhotoInfo]=useState<PhotoInfo>({
    label:"",
    photoUrl:""
  })
 //function
  const showAddModalHadler =()=>{
    setAddModal(true)
  }
  const hideAddmodalHandler=()=>{
    setAddModal(false)
  }
  
  const handleChange =(e:any)=>{
    setPhotoInfo({...photoInfo,[e.target.name]:e.target.value})
  }
  
  const handleSearch=()=>{
    
  }
 const submitPhoto =async ()=>{
   try{
  const formdata = new FormData();
  //formdata.append("label",photoInfo.label)
 // formdata.append("filepath",photoInfo.photoUrl)
   const res =await axios.post("http://localhost:2000/photo",{label:photoInfo.label,
     filepath:photoInfo.photoUrl
   },{
     headers:{
    "Content-Type": "multipart/form-data",
     }
   })
   if(res){
     alert(res)
   }
   
   }catch(err){
     
   }
 }
  return(
    <div className="w-full">
    {showAddModal && (<Modal modalContentent={(
    <div className="bg-[#fff] flex flex-col w-full p-4 rounded-[10px] mb-[9rem]">
    <h3 className="text-[18px] font-[500]">Add a new photo</h3>
    <label className="mt-2">Label</label>
    <SearchBar onchange={handleChange} name="label"/>
    <label className="mt-2">Photo URL</label>
    <SearchBar onchange={handleChange} name="photoUrl"/>
    <div className="mt-4 flex ">
    <div className="flex justify-end w-full space-x-4">
        <Btn text="Cancel"onclickHandler={hideAddmodalHandler} bgcolor="green" />
    <Btn text="Submit"onclickHandler={submitPhoto} bgcolor="green" />
    </div>

    </div>
    </div>
    )}/>)}
    
    <div > 
    
    <div className="logo"></div>
    <div className="relative header flex items-center justify-between w-full px-2 my-4 ">
    <SearchBar onchange={handleSearch} name="search"/>
<Btn text="Add photo" onclickHandler={showAddModalHadler} bgcolor="green"/>
</div>

    <div className="search-bar"></div>
    </div> 
    <div className="body px-2 w-full">
    <Photos/>
    </div> 
    <div className="footer">
  {/*  <p>promise</p>*/}
    </div> 
    </div>
    )
}
export default Homepage