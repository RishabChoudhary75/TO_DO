import React, { useState } from 'react'

function Serchbar({ Setfilterdata,SetSearch,Search}) {
 
  const handleFilterChange = (e) => {
    Setfilterdata(e.target.value);
  };
  return (
    <div className='w-full  flex gap-2 my-1 justify-end pe-2 '>
      <input type="text" placeholder='search note......' className='w-[30%]  border-blue-400 border-2 rounded-[4px] box-border ' value={Search}onChange={(e)=>SetSearch(e.target.value)} />
      <select name="" id="" className='bg-blue-400 rounded-[4px] text-white w-[15%]' onChange={handleFilterChange}>
<option value="All" >All</option>
<option value="checked" >Checked</option>
<option value="unchecked" >UnChecked</option>

      </select>
      
    </div>
  )
}

export default Serchbar
