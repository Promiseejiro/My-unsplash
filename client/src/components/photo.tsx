import {useState} from "react";
import Btn from "../components/btn";
import Modal from "./modal";
import SearchBar from "./search-bar";
//dependencies
import axios from "axios"
interface photo{
  photoObjects:any;
  deletehandler:any
}

interface Label{
  text: String
}

interface Loading {
  loading:boolean;
  disabled:boolean;
}

const Photo =({photoObjects,deletehandler}:photo)=>{
  const [showOverlay,setShowOverlay]=useState(false)
  const [showDeleteModal,setShowDeleteModel]=useState(false)
  const [isloading,setIsLoading]=useState<Loading>({loading:false,
    disabled:true,
  })
  const [label,setLabel] =useState<Label>({
    text:""
  })
  //function
    const showDeleteModalHadler =()=>{
    setShowDeleteModel(true)
  }
  
  const hideOverlayHandler=()=>{
    setShowOverlay(false)
  }
  
  const hideDeletemodalHandler=()=>{
    setShowDeleteModel(false)
    hideOverlayHandler()
  }
  
 const handleChange=(e:any)=>{
    setLabel({
      ...label,text: e.target.value
    })
    if(e.target.value===photoObjects.label){
      setIsLoading({...isloading,disabled:false})
    }
    else {
            setIsLoading({...isloading,disabled:true})
  }}
  
  const deletePhoto =()=>{
    if(label.text===photoObjects.label){
    try{
      deletehandler(photoObjects._id)
      setIsLoading({...isloading,loading:true})
  hideDeletemodalHandler()
  setIsLoading({...isloading,loading:false})
}catch(error){
  console.log(error)
}
  }
  }
  
  const showOverlayHandler =()=>{
    setShowOverlay(true)
  };
  window.addEventListener('scroll', hideOverlayHandler)
  const preDeleteHandler =async()=>{
    await axios.delete("");
  }
  return(  
  <div className="photo-container" onClick={showOverlayHandler}>
      {showDeleteModal && (<Modal modalContentent={(
    <div className="bg-[#fff] flex flex-col w-full p-4 rounded-[10px] mb-[9rem]">
    <h3 className="text-[18px] font-[500]">Are your sure ? </h3>
    <label className="my-2">Password : Type <span className="font-[600]">{photoObjects.label}</span> to confirm delete</label>
    <SearchBar onchange={handleChange} name="label"label="Label"/>
    <div className="mt-4 flex ">
    <div className="flex justify-end w-full space-x-4">
        <Btn text="Cancel"onclickHandler={hideDeletemodalHandler} bgcolor="gray" loading={false}disabled={false}/>
    <Btn text="Delete"onclickHandler={deletePhoto} bgcolor="red"disabled={isloading.disabled} loading={isloading.loading}/>
    </div>
    </div>
    </div>
    )}/>)}
 <img className="photo rounded-[10px]" src={photoObjects.filepath}/>
 { showOverlay && <div>  <div className="photo-overlay"></div>
 <h3 className="photo-title">{photoObjects.label}</h3>
 <div className="delete-btn"><Btn text="Delete"onclickHandler={showDeleteModalHadler} bgcolor="red" loading={false} disabled={false}/></div> </div>}
 </div>
 )
}
export default Photo