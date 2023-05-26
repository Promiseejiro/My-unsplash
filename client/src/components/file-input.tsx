import ClipLoader from "react-spinners/ClipLoader"
interface SelectFile{
  handleSelect:any;
  uploading:boolean
}
const FileInput =({handleSelect,uploading}:SelectFile)=>{
  return(    <div className="w-full">  
  <input className="hidden" id="file"type="file" onChange={handleSelect} />
  <label htmlFor="file" className="flex justify-center items-center block w-full py-2 bg-blue-500 hover:bg-blue-300 rounded-[5px] text-[#fff] text-center"><ClipLoader
        color={"#fff"}
       loading={uploading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
    className="mr-1"  /> Choose photo</label>
  </div>
  )
}
export default FileInput