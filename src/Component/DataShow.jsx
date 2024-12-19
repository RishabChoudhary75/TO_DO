import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdSaveAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function DataShow({ data, dataEdit, datadelete, ToggleDone }) {
  const [Edit, SetEdit] = useState(false);
  const [Editdata, SetEditdata] = useState(false);
  let color
  let datashow;
  if(data.Destination=="work"){
    color ="bg-green-600"
  }else if(data.Destination=="Shopping"){
    color ="bg-red-600"
  }else if(data.Destination=="family"){
    color ="bg-yellow-500"
  }else if(data.Destination=="inbox"){
    color ="bg-gray-400"
  }
  if (Edit) {
    datashow = (
      <div className="w-full flex ">
        <input
          type="text"
          value={data.text}
          onChange={(e) => dataEdit({ ...data, text: e.target.value })}
          className="w-full border-blue-400 border-2 rounded-[4px]"
        />

        <button
          onClick={() => {
            SetEdit(!Edit);
            SetEditdata(true);
          }}
          className=" rounded-[4px] text-black"
        >
          <MdSaveAlt />
        </button>
      </div>
    );
  } else {
    datashow = (
      <div className="flex w-full gap-1 ">
        <p
          className={`w-full bg-white ${
            data.done ? "line-through" : "no-underline"
          }`}
        >
          {data.text}
        </p>
        <div className={`size-2 rounded-full my-auto ${color}`}></div>
        
        <button
          onClick={() => {
            SetEdit(!Edit);
          }}
          className=" rounded-[4px] text-black"
        >
          {Editdata?<FaEdit/>:<CiEdit />}
        </button>
      </div>
    );
  }
  return (
  

    <div className="flex gap-1">
      <div className="w-full flex bg-white gap-1 items-baseline">
        {!Edit && (
          <input
          className="  peer h-4 w-4 my-auto  cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
          type="checkbox"
          checked={data.done}
          onChange={() => {
            ToggleDone(data.id); // Call the ToggleDone function to toggle the done status
          }}
          />
        )}
        {datashow}
      </div>
      <button
        onClick={() => {
          datadelete(data.id);
        }}
        className="  rounded-[4px] text-black"
        >
        <MdDeleteForever />
      </button>
    </div>
    
        
  );
}

export default DataShow;
