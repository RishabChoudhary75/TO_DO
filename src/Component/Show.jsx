import { Input } from "postcss";
import React, { useState } from "react";
import DataShow from "./DataShow";
import Serchbar from "./Serchbar";
import Usefilterdata from "./Usefilterdata";
import Datamodel from "./Datamodel";

function Show({ data, dataEdit, datadelete, ToggleDone }) {
  let count={Inbox:0,Work:0,Shopping:0,Family:0}
  const [filterdata, Setfilterdata] = useState("All");
  const [Search, SetSearch] = useState("");
  const[Model,SetModel]=useState(false)
  const[ModelDestination,SetModelDestination]=useState()

  const filteralldata = Usefilterdata(data, Search, filterdata);
 for(let i=0;i<data.length;i++){
  if(data[i].Destination== "work"){
    count.Work+=1
  }else if(data[i].Destination== "Shopping"){
    count.Shopping+=1
  }else if(data[i].Destination== "family"){
    count.Family+=1
  }else if(data[i].Destination== "inbox"){
    count.Inbox+=1
  }
 }
 console.log(count)
  return (
    <div className="w-full h-[92%]  flex flex-col items-center gap-2  "> <div className=" bg-blue-400 w-full flex ps-1 py-2">

      <h1 className=" font-bold text-3xl ">Today</h1>
      {Model && (
          <Datamodel
            data={data}
            Search={Search}
            filterdata={ModelDestination} 
            dataEdit={dataEdit}
            datadelete={datadelete}
            SetModel={SetModel} 
            SetModelDestination={SetModelDestination} 
          />
        )}

      <Serchbar
        Setfilterdata={Setfilterdata}
        SetSearch={SetSearch}
        Search={Search}
      />
    </div>

      <div className="w-[90%] h-[68%] overflow-auto  ">
        <ul>
          {filteralldata.map((val) => (
            <li key={val.id} className="mb-1 border-b-[1px]">
              <DataShow
                data={val}
                dataEdit={dataEdit}
                datadelete={datadelete}
                ToggleDone={ToggleDone}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-[90%] flex flex-wrap gap-[2.6%] ">
        <button className="bg-gray-400 h-20 rounded-md w-[23%]" onClick={()=>{SetModelDestination("inbox"); 
        SetModel(true);}

        }>Inbox
          <p>{count.Inbox} task</p>
        </button>
        <button className="bg-green-600 h-20 rounded-md w-[23%]" onClick={()=>{SetModelDestination("work"); 
        SetModel(true);}

        }>Work
        <p>{count.Work} task</p>
        </button>
        <button className="bg-red-600 h-20 rounded-md w-[23%]" onClick={()=>{SetModelDestination("Shopping"); 
        SetModel(true);}

        }>Shopping
        <p>{count.Shopping} task</p>
        </button>
        <button className="bg-yellow-500 h-20 rounded-md w-[23%]" onClick={()=>{SetModelDestination("family"); 
        SetModel(true);}

        }>Family
        <p>{count.Family} task</p>
        </button>
       
      </div>
    </div>
  );
}

export default Show;
