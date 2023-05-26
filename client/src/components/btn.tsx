import ClipLoader from "react-spinners/ClipLoader";
interface props{
  text: String;
  onclickHandler:any;
  bgcolor: any;
  color: string
 loading:boolean;
 disabled:boolean,
bordercolor: string,
borderRadius: number
  
}
function Btn ({text,onclickHandler,bgcolor,loading,disabled,color,bordercolor,borderRadius}:props){
  return (
<button  disabled={disabled} className={`text-[#f4f4f4]  hover:bg-blue-700 text-white font-[400] text-center p-1.5 rounded-[5px] flex items-center shadow-md`} onClick={onclickHandler} style={
  {backgroundColor:`${bgcolor}`,
  opacity:disabled ? ".4":"1",
  color:`${color}`,
  border: `2px solid ${bordercolor}`,
  borderRadius:`${borderRadius}px`
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