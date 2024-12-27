import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 0, text: "Philosopher’s Path", done: false, Destination: "inbox",timestamp: "2024-12-25T16:00:00Z" },
  { id: 1, text: "Visit the temple", done: false, Destination: "work",timestamp: "2024-12-24T16:00:00Z" },
  { id: 2, text: "Drink matcha", done: false, Destination: "Shopping",timestamp: "2024-12-23T16:00:00Z" },
  { id: 3, text: "this is new", done: false, Destination: "family",timestamp: "2024-12-22T16:00:00Z" },

  { id: 4, text: "data is full", done: false, Destination: "inbox",timestamp: "2024-12-21T16:00:00Z" },
];
var timestamp= new Date();
var nextId =Date.now();
export const Dataslice = createSlice({
  name:'Data',
  initialState,
  reducers: {
    Adds: (state,action) => {
        const {val,Filterdata}=action.payload;
        state.push(  {
            id:nextId++,
            text:val,
            done: false,
            Destination:Filterdata,
            timestamp:timestamp,
          })
      
     
    },
    Edits: (state,action) => {
        const {id,text}=action.payload;
        const data =state.find((val)=>val.id===id);
      if(data){
        data.text=text;
      }
    },
    Deletes: (state,action) => {
        const val=action.payload;
     return state.filter((task) => task.id!==val);
    },
    ToggleDones: (state,action) => {
        const val=action.payload;
        const data= state.find((valu)=>valu.id==val);
        if(data){
            data.done=!data.done
        }
      
    },
},
});

export const{Adds,Edits,Deletes,ToggleDones}=Dataslice.actions
export default Dataslice.reducer