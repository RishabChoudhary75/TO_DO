import React, {useReducer, useState } from "react";
import Add from "./Add";
import Show from "./Show";
import Serchbar from "./Serchbar";
import { MdDarkMode } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

function Main() {
  const initialdata = [
    { id: 0, text: "Philosopher’s Path", done: false, Destination: "inbox" },
    { id: 1, text: "Visit the temple", done: false, Destination: "work" },
    { id: 2, text: "Drink matcha", done: false, Destination: "Shopping" },
    { id: 3, text: "this is new", done: false, Destination: "family" },

    { id: 4, text: "data is full", done: false, Destination: "inbox" },
  ];
  const [backset, Setbackset] = useState(false);
  const [Set, SetSet] = useState(false);
  const [datas, Setdatas] = useState(initialdata);
 
  var nextId = Math.random();
  const Usereducer = (data, action) => {
    switch (action.type) {
      case "add":
        return [
          ...data,
          {
            id: action.id,
            text: action.text,
            done: false,
            Destination: action.Destination,
          },
        ];
  
      case "Edit":
        return data.map((task) =>
          task.id === action.task.id
            ? { ...task, text: action.task.text }
            : task
        );
  
      case "Delete":
        return data.filter((task) => task.id !== action.id);
        case "ToggleDone":
          return data.map((task) =>
            task.id === action.id
              ? { ...task, done: !task.done } 
              : task
          );
      default:
        return data;
    }
  };
  // using customhook
  const [data, dispatch] = useReducer(Usereducer, datas);
  const adddata = (val, Filterdata) => {
    dispatch({
      type: "add",
      id: nextId++,
      text: val,
      Destination: Filterdata,
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
  const ToggleDone = (id) => {
    dispatch({
      type: "ToggleDone",
      id: id,
    });
  };
  return (
    <div
      className={` w-[30%] h-[96%] relative ${
        backset ? "bg-slate-950" : "bg-white"
      } shadow-2xl border-2 `}
    >
      {Set && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-white p-2 rounded-md shadow-lg w-[25%] h-[25%]">
            <h1 className="font-bold">Add Todo</h1>
            <Add adddata={adddata} Add={Add} />

            <button
              className="text-blue-500"
              onClick={() => SetSet(false)} // Close modal
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <Show data={data} dataEdit={Edit} datadelete={Delete}  ToggleDone={ToggleDone} />
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
