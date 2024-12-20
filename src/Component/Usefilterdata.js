import React from 'react'

function Usefilterdata(data,Search,filterdata) {
    
    const filteralldata = data.filter((val) => {
        const matchesSearch =
          val.text.toLowerCase().includes(Search.toLowerCase()) || Search === "";
    
        const matchesStatus =
         ( filterdata === "All" ||
          (filterdata === "checked" && val.done) ||
          (filterdata === "unchecked" && !val.done))|| val.Destination === filterdata;
    
        return matchesSearch && matchesStatus;
      });
      return filteralldata
}

export default Usefilterdata
