import React,{useState} from "react"
import Modal from "./modal";
import FileInput from "./file-input"
import Btn from "./btn";
import SearchBar from "./search-bar"
import axios from "axios"

interface Photo{
  url: String;
  label: String;
  disabled: boolean;
    file: String,
    loading:boolean,
    
}

interface Func{
  hideAddmodalHandler:any,
}
const AddPhoto =({hideAddmodalHandler}:Func)=>{
  const [newPhoto,setNewPhoto]=useState<Photo>({
    url:"",
    label:"",
    disabled:true,
    file:"",
    loading:false,
  })
  //function 
  const handleChange =async(e:any)=>{
    setNewPhoto({...newPhoto,[e.target.name]:e.target.value,})
    if(newPhoto.url && newPhoto.label){
   setNewPhoto({...newPhoto,disabled:false})
    }
  }
  
  const handleSelect=async(e:any)=>{
    if(e.target){
   try{
     setNewPhoto({...newPhoto,loading:true})
   const formdata = new FormData();
  formdata.append("file",e.target.files[0])
   const res =await axios.post("http://localhost:2000/select",formdata,{
   headers:{
    "Content-Type": "multipart/form-data",
     }
   })
  setNewPhoto({...newPhoto,url:res.data.filepath,loading:true,disabled:false,})
      }catch(error){
        alert(error)
      }
    }
  }
  
 const submitPhoto =async ()=>{
   if(newPhoto.label){
     try{
       const res =await axios.post("http://localhost:2000/photo",{label:newPhoto.label,
     filepath:newPhoto.url
   })
   setNewPhoto({...newPhoto,
    url:"",
    file:"",
    loading:false,
    disabled:true 
   })
   hideAddmodalHandler()
   }catch(err){
   }
   }else{
     alert("Add a label")
   }
 }
 
  return (<Modal  modalContentent={(
    <div className="bg-[#fff] flex flex-col w-full p-4 rounded-[10px] mb-[9rem]">
    <h3 className="text-[18px] font-[500]">Add a new photo</h3>
    <label className="mt-2">Label</label>
    <SearchBar onchange={handleChange} name="label"label="Label"/>
    <label className="mt-2">Photo URL</label>
    <SearchBar onchange={handleChange} name="photoUrl" label={newPhoto.url ? `${newPhoto.url}` : "Photo URL"}/>
    {!newPhoto.url && <div className="w-full">
        <p className="text-center">or</p>
    <FileInput handleSelect={handleSelect} uploading={newPhoto.loading}/>
    </div>
    }
    <div className="mt-4 flex ">
    <div className="flex justify-end w-full space-x-4">  <Btn text="Cancel"onclickHandler={hideAddmodalHandler} bgcolor="gray" loading={false} disabled={false}/>
    <Btn text="Submit"onclickHandler={submitPhoto} bgcolor="green"disabled={newPhoto.disabled} loading={false} />
    </div>
    </div>
    </div>
    )}/>)
}
export default AddPhoto