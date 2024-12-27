import React from 'react'


function Usefilterdata(val,Search,filterdata,NCompare) {
  const { start = '', End = '' } = NCompare || {};
  if (!Array.isArray(val)) {
    console.error("Expected an array, but got:", val);
    return [];
  }
  
  return val.filter((task) => {
 
  const matchdate= (!start||new Date(task.timestamp).getDate()>=new Date(start).getDate())&&(!End||new Date(task.timestamp).getDate()<=new Date(End).getDate());
  const matchesSearch =
    task.text.toLowerCase().includes(Search.toLowerCase()) || Search === "";

  const matchesStatus =
    filterdata === "All" ||
    (filterdata === "checked" && task.done) ||
    (filterdata === "unchecked" && !task.done) ||
    task.Destination === filterdata;

  return matchdate&&matchesSearch && matchesStatus;
});
}

export default Usefilterdata
