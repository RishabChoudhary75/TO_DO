import React, { useReducer, useState } from "react";
import Add from "./Add";
import Show from "./Show";
import Serchbar from "./Serchbar";
import { MdDarkMode } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
function Main() {
   const[backset,Setbackset]=useState(false)
  const [Set,SetSet] = useState(false);
  var nextId = Math.random();
  const initialdata = [
    { id: 0, text: "Philosopher’s Path", done: false },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false },
  ];
  const Reducer = (data, action) => {
    switch (action.type) {
      case "add": {
        return [...data, { id: action.id, text: action.text, done: false }];
      }
      case "Edit": {
        return data.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "Delete": {
        return data.filter((t) => t.id !== action.id);
      }
      default:
        return data;
    }
  };
  const [data, dispatch] = useReducer(Reducer, initialdata);
  const adddata = (val) => {
    dispatch({
      type: "add",
      id: nextId++,
      text: val,
    });
  };
  const Edit = (val) => {
    dispatch({
      type: "Edit",
      task: val,
    });
  };
  const Delete = (val) => {
    dispatch({
      type: "Delete",
      id: val,
    });
  };

  return (
    <div className={` w-[50%] h-[70%] relative ${backset?"bg-slate-950":"bg-white"} `}>
      <h1 className="bg-blue-400 font-bold text-5xl text-center text-white">TODO</h1>
      <Show data={data} dataEdit={Edit} datadelete={Delete} />
      {Set &&
      <Add adddata={adddata} />}
      <button
        className="bg-blue-400 text-white p-4 rounded-full absolute right-1 bottom-2"
        onClick={() => SetSet(!Set)}
      >
        <IoIosAdd />
      </button>
      <button className='bg-blue-400 p-1 px-2 py-[6px] rounded-[4px] absolute top-[52px] right-3 text-white 'onClick={()=>Setbackset(!backset)}><MdDarkMode /></button>
    </div>
  );
}

export default Main;
