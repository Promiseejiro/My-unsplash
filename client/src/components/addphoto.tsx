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
    uploading:boolean,
    uploadFilepath: string
    
}

interface Func{
  hideAddmodalHandler:any,
}
const AddPhoto =({hideAddmodalHandler}:Func)=>{
  const baseurl ="https://unsplash-qoun.onrender.com"

  const [newPhoto,setNewPhoto]=useState<Photo>({
    url:"",
    label:"",
    disabled:true,
    file:"",
    loading:false,
    uploading:false,
    uploadFilepath:""
  })
  //function 
  const handleChange =(name: string,value: String)=>{
    setNewPhoto({...newPhoto,[name]:value});
    if(newPhoto.url && newPhoto.label){
   setNewPhoto({...newPhoto,disabled:false})
    }
  }
  
  const handleSelect=async(e:any)=>{
    if(e.target){
   try{
     setNewPhoto({...newPhoto,uploading:true})
   const formdata = new FormData();
  formdata.append("file",e.target.files[0])
   const res =await axios.post(`${baseurl}/select`,formdata,{
   headers:{
    "Content-Type": "multipart/form-data",
     }
   })
  setNewPhoto({...newPhoto,uploadFilepath:res.data.filepath,uploading:true,disabled:false,})
      }catch(error){
        alert(error)
      }
    }
  }
  
 const submitPhoto =async ()=>{
   setNewPhoto({...newPhoto,loading:true})
   if(newPhoto.label){
     try{
       const res =await axios.post(`${baseurl}/photo`,{label:newPhoto.label,
     filepath:newPhoto.uploadFilepath ? newPhoto.uploadFilepath:newPhoto.url
   });
   if(res){
     setNewPhoto({...newPhoto,
    url:"",
    file:"",
    loading:false,
    disabled:true ,
   })
   hideAddmodalHandler()
   }
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
    <label className="mt-2">{"Photo URL"}</label>
  {newPhoto.uploadFilepath &&
    <p>
    {newPhoto.uploadFilepath}
   </p>
  }
    {!newPhoto.uploadFilepath && (
    <SearchBar onchange={handleChange} name="url" label="Valid photo url or select a photo"/>
    )}
    {!newPhoto.uploadFilepath && <div className="w-full">
        <p className="text-center">or</p>
    <FileInput handleSelect={handleSelect} uploading={newPhoto.uploading}/>
    </div>
    }
    <div className="mt-4 flex ">
    
    <div className="flex justify-end w-full space-x-4"> 
    
    <Btn text="Cancel"onclickHandler={hideAddmodalHandler} bgcolor="#fff" color="black"loading={false} disabled={false} borderRadius={5} bordercolor="transparent" />
    
    <Btn text="Submit"onclickHandler={submitPhoto} bgcolor="green"color="#fff"disabled={newPhoto.disabled} loading={newPhoto.loading} borderRadius={5} bordercolor="green" />
    
    </div>
    </div>
    </div>
    )}/>)
}
export default AddPhoto