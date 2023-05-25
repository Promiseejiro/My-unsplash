import React,{useState,useEffect} from "react"
//components
import Header from "../components/header";
import Btn from "../components/btn";
import Photos from "../components/photos"
import SearchBar from "../components/search-bar"
import Logo from "../components/logo"
import AddPhoto from "../components/addphoto"
//packages
import axios from "axios"
interface PhotoInfo {
  photos:any
}

interface Search{
  value:String
}

const Homepage =()=>{
  const [showModal,setModal]=useState(false)
  const [photoInfo,setPhotoInfo]=useState<PhotoInfo>({
    photos:[],
  })
  const [search ,setSearch]=useState<Search>({
    value:""
  })
 //function
  const showAddModalHadler =()=>{
    setModal(true)
  }
  const hideAddmodalHandler=()=>{
  setModal(false)
  fetchData()
  }
  
  const handleSearch=(e:any)=>{
    setSearch({...search,value:e.target.value});
  }

 const deletehandler=async(id: String)=>{
   await axios.delete(`http://localhost:2000/${id}`);
   fetchData()
 }
 
 const fetchData =async()=>{
   const url =`http://localhost:2000/photos?search=${search.value}`
    const data =await axios.get(url);
    if(data.data){
    }
 setPhotoInfo({...photoInfo,photos:data.data})
  }
 useEffect(()=>{
   fetchData()
 },[search])
 
  return(
    <div className="w-full">
    <Logo/>
{showModal &&   (<AddPhoto hideAddmodalHandler={hideAddmodalHandler}/>)}
    <div > 
    
    <div className="logo"></div>
    <div className="relative header flex items-center justify-between w-full px-2 my-4 ">
    <SearchBar onchange={handleSearch} name="search"label="Search by name"/>
<Btn text="Add photo" onclickHandler={showAddModalHadler} disabled={false} bgcolor="green"loading={false}/>
</div>

    <div className="search-bar"></div>
    </div> 
    <div className="body px-2 w-full">
    <Photos photos={photoInfo.photos} deletehandler={deletehandler}/>
    </div> 
    <div className="footer">
  {/*  <p>promise</p>*/}
    </div> 
    </div>
    )
}
export default Homepage