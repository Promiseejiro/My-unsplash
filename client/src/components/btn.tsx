import ClipLoader from "react-spinners/ClipLoader";
interface props{
  text: String;
  onclickHandler:any;
  bgcolor: any;
 loading:boolean;
 disabled:boolean
 // color: String;
  
}
function Btn ({text,onclickHandler,bgcolor,loading,disabled}:props){
  return (
<button  disabled={disabled} className={`text-[#f4f4f4]  hover:bg-blue-700 text-white font-[400] text-center p-2 rounded-[5px] flex items-center `} onClick={onclickHandler} style={
  {backgroundColor:`${bgcolor}`,
  opacity:disabled ? ".4":"1"
  }
}
><ClipLoader
        color={"#fff"}
       loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
    className="mr-1"  /> {text}</button>
)
}
export default Btn