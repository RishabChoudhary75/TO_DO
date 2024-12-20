import React from 'react'
import DataShow from "./DataShow";
import Usefilterdata from "./Usefilterdata";
import { IoMdClose } from "react-icons/io";
function Datamodel({val,Search,filterdata,dataEdit,datadelete,SetModel,SetModelDestination}) {
    const filteralldata = Usefilterdata(val, Search,filterdata);
  return (
    <div>
       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-white p-2 rounded-md shadow-lg w-[25%] h-[25%]">
          <h1 className="font-bold"> {filterdata}</h1>
            <div className="w-[90%] h-[68%] overflow-auto  ">
        <ul>
          {filteralldata.map((val) => (
            <li key={val.id} className="mb-1 border-b-[1px]">
              <DataShow
                data={val}
                dataEdit={dataEdit}
                datadelete={datadelete}
              />
            </li>
          ))}
        </ul>
      </div>

            <button
              className="text-blue-500 absolute top-3 right-3"
              onClick={() => SetModel(false)} // Close modal
            >
              <IoMdClose />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Datamodel
