import {AiOutlineSearch} from "react-icons/ai"
interface HandleChage {
  onchange:any;
  name:string;
  label: string
}
const SearchBar=({onchange,name,label}:HandleChage)=>{
  return (
    <div className="border-2 border-solid border-[black] rounded-[12px] text-[gray] font-[400] overflow-hidden pl-2">
   {/* <AiOutlineSearch className="w-10 text-[20px] font-[900] "/>*/}
    <input className="input py-2  text-[16px]  flex-auto focus:outline-0" type="text" placeholder={`${label}`} name={name} onChange={onchange}/>
    </div>
    )
}

export default SearchBar