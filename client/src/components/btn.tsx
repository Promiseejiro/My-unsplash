interface props{
  text: String;
  onclickHandler:any
}
function Btn ({text,onclickHandler}:props){
  return (
<button  className="bg-blue-500  hover:bg-blue-700 text-white font-[400] p-1 rounded-[12px] flex-6" onClick={onclickHandler}> {text}</button>
)
}
export default Btn