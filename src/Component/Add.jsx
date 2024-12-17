import React, { useState } from "react";

function Add({ adddata }) {
  const [val, setVal] = useState("");
  const handeldata = (e) => {
    e.preventDefault();
    if (val.length >= 4) {
        
      adddata(val);
      setVal("");
    } else {
      alert("Provide a word with length of 4 or more");
    }
  };
  return (
    <div className="flex mb-1 w-[80%] mx-auto gap-1">
    
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
       className="w-full border-blue-400 border-2 rounded-[4px]" />
        <button onClick={handeldata} type="button" className="bg-blue-400 px-5 rounded-[4px] text-white">Add</button>
    
    </div>
  );
}

export default Add;
