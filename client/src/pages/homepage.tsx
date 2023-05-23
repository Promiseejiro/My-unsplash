import Header from "../components/header";
import Btn from "../components/btn";
import Photos from "../components/photos"
import SearchBar from "../components/search-bar"
const Homepage =()=>{
  const onclickHandler =()=>{
    
  }
  return(
    <div className="w-full">
    <div > 
    <div className="logo"></div>
    <div className="header  flex item-center justify-between w-full px-2">
    <SearchBar />
<Btn text="Add photo" onclickHandler={onclickHandler}/>
</div>

    <div className="search-bar"></div>
    </div> 
    <div className="body p-2 w-full">
    <Photos/>
    </div> 
    <div className="footer">
  {/*  <p>promise</p>*/}
    </div> 
    </div>
    )
}
export default Homepage