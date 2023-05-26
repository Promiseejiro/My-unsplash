import {useState} from "react"
interface HandleChage {
  onchange:any;
  name:string;
  label: string
}

interface Input{
  value: string
}
const SearchBar=({onchange,name,label}:HandleChage)=>{
  
  const handleChange=(e:any)=>{
    onchange(e.target.name, e.target.value)
    setInput({...input,value:e.target.value})
  }
  const [input,setInput]=useState<Input>({
    value:""
  })
  
  return (
    <div className="border-2 border-solid border-[black] rounded-[5px] text-[black] font-[400] overflow-hidden pl-2">
   {/* <AiOutlineSearch className="w-10 text-[20px] font-[900] "/>*/}
    <input className="input py-1.5  text-[16px]  flex-auto focus:outline-0" type="text" placeholder={`${label}`} name={name} onChange={handleChange} value={input.value}/>
    </div>
    )
}

export default SearchBar