import { Input } from "postcss";
import React, { useContext, useState } from "react";
import DataShow from "./DataShow";
import Serchbar from "./Serchbar";
import Usefilterdata from "./Usefilterdata";
import Datamodel from "./Datamodel";
import { useSelector, useStore } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

function Show({  dataEdit, datadelete, ToggleDone }) {
    const[Inputtype,SetInputtype]=useState("text")
    const[datemodel,Setdatemodel]=useState(false)
    const[Compare,SetCompare]=useState({start:'',End:''})
    const[NCompare,SetNCompare]=useState({start:'',End:''})
  let count={Inbox:0,Work:0,Shopping:0,Family:0}
  const val=useSelector((state)=>state.Data)
  const [filterdata, Setfilterdata] = useState("All");
  const [Search, SetSearch] = useState("");
  const[Model,SetModel]=useState(false)
  const[ModelDestination,SetModelDestination]=useState()
  
  
  for(let i=0;i<val.length;i++){
    if(val[i].Destination== "work"){
      count.Work+=1
    }else if(val[i].Destination== "Shopping"){
      count.Shopping+=1
    }else if(val[i].Destination== "family"){
      count.Family+=1
    }else if(val[i].Destination== "inbox"){
      count.Inbox+=1
    }
  }
  
  const filteralldata = Usefilterdata(val, Search, filterdata,NCompare);
  console.log(filteralldata)
  const handelsubmit=(e)=>{
    e.preventDefault()
    if(Compare.start.length>0&& Compare.End.length>0){
      SetNCompare({start:Compare.start})
      SetNCompare((prev)=>({...prev,End:Compare.End}))
      Setdatemodel(!datemodel)
    }
    else{
      toast.warning("please choose start and end date!", {
        position: "top-center"
      });
    }
}
  return (
    <div className="w-full h-[88%]  flex flex-col items-center gap-2  "> <div className=" bg-blue-400 w-full flex ps-1 py-2">
  <ToastContainer />
      <h1 className=" font-bold text-3xl ">Today</h1>
      {Model && (
          <Datamodel
            val={val}
            ToggleDone={ToggleDone}
            Search={Search}
            filterdata={ModelDestination} 
            dataEdit={dataEdit}
            datadelete={datadelete}
            SetModel={SetModel} 
            SetModelDestination={SetModelDestination} 
          />
        )}
{datemodel&&(<div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
<div className="relative bg-white p-2 rounded-md shadow-lg w-52 h-20">
 <form action="" className="flex flex-wrap  h-full gap-1 justify-center" onSubmit={handelsubmit}>
  <input type={Inputtype} placeholder="Start date" onFocus={()=>SetInputtype("date")} onBlur={()=>{SetInputtype("text")}} className=" border-2 border-blue-400 w-[46%] ps-2" value={Compare.start} onChange={(e)=> SetCompare((prev) => ({ ...prev, start: e.target.value })) } />
  <input type={Inputtype}  placeholder="End date" onFocus={()=>SetInputtype("date")} onBlur={()=>{SetInputtype("text")}} className="  border-2 border-blue-400 w-[46%] ps-2" value={Compare.End} onChange={(e)=>SetCompare((prev) => ({ ...prev, End: e.target.value })) } />
  <div className=" w-full flex justify-around  ">

  <button className="bg-blue-400 px-2 " onClick={()=>{Setdatemodel(!datemodel)}}>cancel</button>
  <button className="bg-blue-400 px-3 " type="submit">Filter</button>
  </div>
  </form> 
</div>


</div>)}
      <Serchbar
        Setfilterdata={Setfilterdata}
        SetSearch={SetSearch}
        Search={Search}
        datemodel={datemodel}
        Setdatemodel={Setdatemodel}
      />
    </div>

      <div className="w-[90%] h-[82%] overflow-auto  ">
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
        <button className="bg-gray-400  h-auto rounded-md w-[23%]" onClick={()=>{SetModelDestination("inbox"); 
        SetModel(true);}

        }>Inbox
          <p>{count.Inbox} task</p>
        </button>
        <button className="bg-green-600  h-auto rounded-md w-[23%]" onClick={()=>{SetModelDestination("work"); 
        SetModel(true);}

        }>Work
        <p>{count.Work} task</p>
        </button>
        <button className="bg-red-600 h-auto rounded-md w-[23%] overflow-auto" onClick={()=>{SetModelDestination("Shopping"); 
        SetModel(true);}

        }>Shopping
        <p>{count.Shopping} task</p>
        </button>
        <button className="bg-yellow-500  h-auto rounded-md w-[23%]" onClick={()=>{SetModelDestination("family"); 
        SetModel(true);}

        }>Family
        <p>{count.Family} task</p>
        </button>
       
      </div>
    </div>
  );
}

export default Show;
