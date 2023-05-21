interface text{
  title: String;
  onclickHandler:any
}

function Btn ({title,onclickHandler}:text){
  return (
<button  className="bg-blue-500  hover:bg-blue-700 text-white font-[400] py-2 px-4 rounded" onClick={onclickHandler}> {title}</button>
)
}
export default Btn