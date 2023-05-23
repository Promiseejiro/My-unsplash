interface props{
  text: String;
  onclickHandler:any;
  bgcolor: any;
 // color: String;
  
}
function Btn ({text,onclickHandler,bgcolor}:props){
  return (
<button  className={`text-[#f4f4f4]  hover:bg-blue-700 text-white font-[400] text-center p-2 rounded-[5px] `} onClick={onclickHandler} style={
  {backgroundColor:`${bgcolor}` }
}
> {text}</button>
)
}
export default Btn