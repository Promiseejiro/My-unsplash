interface text{
title: String
}
const Header =({title}:text)=>{
  return (
    <h3 className="text-center text-[black] text-[22px] font-[500]">{title}</h3>
    )
}
export default Header