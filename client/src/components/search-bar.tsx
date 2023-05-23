import {AiOutlineSearch} from "react-icons/ai"
const SearchBar=()=>{
  return (
    <div className="flex justify-between items-center border-2 boder-solid rounded-[12px] text-[gray] font-[400] overflow-hidden mr-[1rem] flex-1 ">
    <AiOutlineSearch className="w-10 text-[20px] font-[900] "/>
    <input className="flex-auto py-2 focus:outline-0 text-[16px]  " type="text" placeholder="Search by name" />
    </div>
    )
}

export default SearchBar