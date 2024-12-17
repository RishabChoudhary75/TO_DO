import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdSaveAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function DataShow({ data, dataEdit, datadelete }) {
  const [Edit, SetEdit] = useState(false);
  const [Editdata, SetEditdata] = useState(false);
  let datashow;
  if (Edit) {
    datashow = (
      <div className="w-full flex">
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
          className="bg-blue-400 px-5 rounded-[4px] text-white"
        >
          <MdSaveAlt />
        </button>
      </div>
    );
  } else {
    datashow = (
      <div className="flex w-full ">
        <p
          className={`w-full bg-white ${
            data.done ? "line-through" : "no-underline"
          }`}
        >
          {data.text}
        </p>

        {Editdata && <FaEdit className="my-auto " />}
        <button
          onClick={() => {
            SetEdit(!Edit);
          }}
          className="bg-blue-400 px-5 rounded-[4px] text-white"
        >
          <CiEdit />
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-1">
      <div className="w-full flex bg-white gap-1">
        {!Edit && (
          <input
          className="bg-blue-400"
            type="checkbox"
            checked={data.done}
            onChange={(e) => {
              dataEdit({
                ...data,
                done:e.target.checked,
              });
            }}
          />
        )}
        {datashow}
      </div>
      <button
        onClick={() => {
          datadelete(data.id);
        }}
        className="bg-blue-400 px-5 rounded-[4px] text-white"
      >
        <MdDeleteForever />
      </button>
    </div>
  );
}

export default DataShow;
