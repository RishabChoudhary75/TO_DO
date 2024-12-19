import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function Add({ adddata }) {
  const [val, setVal] = useState("");
  const[Filterdata,Setfilterdata]=useState("")
  const handleFilterChange = (e) => {
    Setfilterdata(e.target.value);
  };
  const handeldata = (e) => {
    e.preventDefault();

    if (val.length >= 4) {
       if(Filterdata.length<=0) {
        toast.warning("please choose a category!", {
          position: "top-center"
        });
      }else{

        adddata(val,Filterdata);
        setVal("");
        Setfilterdata('')
        toast.success("New task added!", {
          position: "top-center"
        });
      }
    } else {
      toast.warning("Provide a word with length of 4 or more!", {
        position: "top-center"
      });
      
    }
  };
  
  return (
    <div className="flex  w-[100%] h-[66%]  gap-1">
   <textarea  value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
       className="w-full border-blue-400 border-2 rounded-[4px]">


   </textarea>
    
       <select onChange={handleFilterChange} className="bg-blue-400 h-8 my-auto">
        <option value="inbox">Inbox</option>
        <option value="work">Work</option>
        <option value="Shopping">Shopping</option>
        <option value="family">Family</option>
       
       </select>
        <button onClick={handeldata} type="button" className="   absolute bottom-2 right-4 text-blue-500">Add</button>
        <ToastContainer />
    </div>
  );
}

export default Add;
