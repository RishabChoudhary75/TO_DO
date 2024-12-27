import React, {  useState } from "react";
import { MdDateRange } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

import { IoFilterCircleOutline } from "react-icons/io5";
function Serchbar({ Setfilterdata, SetSearch, Search,datemodel, Setdatemodel }) {
 const[Show,SetShow]=useState(false)
 
  return (
    <div className="w-full  flex  my-1 gap-1 justify-end pe-2 flex-wrap  ">
      <div className="bg-white w-[40%] flex gap-1  border-blue-400 border-2 rounded-[4px]">
       
          <input
            type="text"
            placeholder="Search...."
            className=" w-full  focus:outline-none md:ps-3 "
            value={Search}
            onChange={(e) => SetSearch(e.target.value)}
          />
     

        
     
          <IoMdSearch className="text-2xl" />
       
      </div>
      <button className="text-white" onClick={()=>Setdatemodel(!datemodel)}><MdOutlineDateRange /></button>
      <button className="text-white" onClick={()=>SetShow(!Show)}><IoFilterCircleOutline /></button>
{Show&&(<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
 <div className=" w-48 h-[15%] bg-blue-400 flex flex-col items-center justify-center gap-1">
 <button className="bg-white px-8 " onClick={()=>{Setfilterdata("All")
 SetShow(!Show) 
 }}>All</button>
 <button className="bg-white px-3   "onClick={()=>{Setfilterdata("checked")
  SetShow(!Show)
 }}>Checked</button>
 <button className="bg-white px-1  " onClick={()=>{Setfilterdata("unchecked")
  SetShow(!Show)
 }}>UnChecked</button>
 </div>

</div>)}
     
    </div>
  );
}

export default Serchbar;
