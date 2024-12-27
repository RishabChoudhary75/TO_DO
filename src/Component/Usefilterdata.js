import React from 'react'


function Usefilterdata(val,Search,filterdata) {
 console.log(val)
 if (!Array.isArray(val)) {
  console.error("Expected an array, but got:", val);
  return [];
}

return val.filter((task) => {
  const matchesSearch =
    task.text.toLowerCase().includes(Search.toLowerCase()) || Search === "";

  const matchesStatus =
    filterdata === "All" ||
    (filterdata === "checked" && task.done) ||
    (filterdata === "unchecked" && !task.done) ||
    task.Destination === filterdata;

  return matchesSearch && matchesStatus;
});
}

export default Usefilterdata
