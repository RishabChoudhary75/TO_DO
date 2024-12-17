import { Input } from "postcss";
import React, { useState } from "react";
import DataShow from "./DataShow";
import Serchbar from "./Serchbar";

function Show({ data, dataEdit, datadelete }) {
  const [filterdata, Setfilterdata] = useState("All");
  const [Search, SetSearch] = useState("");

  const filteralldata = data.filter((val) => {
    const matchesSearch =
      val.text.toLowerCase().includes(Search.toLowerCase()) || Search === "";

    const matchesStatus =
      filterdata === "All" ||
      (filterdata === "checked" && val.done) ||
      (filterdata === "unchecked" && !val.done);

    return matchesSearch && matchesStatus;
  });
  console.log(filterdata);
  return (
    <div className="w-full">
      <Serchbar
        Setfilterdata={Setfilterdata}
        SetSearch={SetSearch}
        Search={Search}
      />
      <div className="w-[90%] h-72 mt-7 mx-auto">

      <ul  >
        {filteralldata.map((val) => (
          <li key={val.id} className="mb-1 border-b-2">
            <DataShow data={val} dataEdit={dataEdit} datadelete={datadelete} />
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default Show;
