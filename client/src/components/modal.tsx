interface prop{
  modalContentent:any
}
const Modal =({modalContentent}:prop)=>{
  return (
    <div className="modal fixed z-60 top-0 left-0 border-6  border-solid h-screen w-full flex items-center bg-[rgba(0,0,0,.5)] px-4">
    {
      modalContentent
    }
    </div>
    )
}
export default Modal