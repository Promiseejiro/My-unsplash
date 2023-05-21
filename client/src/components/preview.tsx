import { AiOutlineCheckCircle } from 'react-icons/ai';
import Header from "./header";
import Btn from "./btn"
interface text{
  imageUrl: String;
  onclickHandler:any;
  title: String;
}



function ImagePreview ({imageUrl,onclickHandler,title}:text){
  return (
    <div> 
   <div className="flex justify-center">
   <AiOutlineCheckCircle className="bg-[green]  rounded-full p-0 text-[white]"></AiOutlineCheckCircle>
   </div>
    <Header title="Uploaded Successfully"/>
    <img className="w-full  mt-4" src={`${imageUrl}`} alt="image" />
    
    <div className="flex auto 1 py-4"><p className="overflow-hidden whitespace-nowrap text-ellipsis bg-[#f4f4f4] rounded p-2">{imageUrl}</p>  <Btn title={title} onclickHandler={onclickHandler}/></div>
    </div>
    )
}
export default ImagePreview