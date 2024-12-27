import React, { useReducer, useState } from "react";
import Add from "./Add";
import Show from "./Show";
import Serchbar from "./Serchbar";
import { MdDarkMode } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Edits, Deletes, ToggleDones } from "./Dataslice";

function Main() {
  const [backset, Setbackset] = useState(false);
  const [Set, SetSet] = useState(false);
  const dispatch = useDispatch();

  const handelEdit = (val) => {
    dispatch(Edits(val));
  };
  const handelDelete = (val) => {
    dispatch(Deletes(val));
  };
  const handelToggleDone = (id) => {
    dispatch(ToggleDones(id));
  };
  return (
    <div
      className={`sm:w-[60%]  lg:w-[45%]   h-[80%] relative ${
        backset ? "bg-slate-950" : "bg-white"
      } shadow-2xl border-2 `}
    >
      {Set && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-white p-2 rounded-md shadow-lg w-48 h-36">
            <h1 className="font-bold">Add Todo</h1>
            <Add />

            <button
              className="text-blue-500"
              onClick={() => SetSet(false)} // Close modal
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <Show dataEdit={handelEdit} datadelete={handelDelete} ToggleDone={handelToggleDone} />
      <button
        className="bg-blue-400 text-white p-4 rounded-full absolute right-1 bottom-2"
        onClick={() => SetSet(!Set)}
      >
        <IoIosAdd />
      </button>
      {/* <button className='bg-blue-400 p-1 px-2 py-[6px] rounded-[4px] absolute top-[52px] right-3 text-white 'onClick={()=>Setbackset(!backset)}><MdDarkMode /></button> */}
      
    </div>
  );
}

export default Main;
