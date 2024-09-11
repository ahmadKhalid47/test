import React from "react";
import { useState, useEffect } from 'react';
export const dynamic = "force-dynamic";
export const revalidate =1;

export default function ListView(data ) {
  const [popup, setPopup] = useState(false);
  const [deleteManyPopup, setDeleteManyPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const page = 1;
  const [sortedData, setSortedData] = useState(data);
  const [make, setMake] = useState("");

  useEffect(() => {
    setSortedData(data);
  }, [data]);
  const itemsPerPage = 100;
console.log(sortedData);

  return (
    <div className="w-full h-fit mt-4 relative">
      <h3
        className={`w-full flex justify-between items-center font-[400]  text-[14px] sm:text-[18px] leading-[21px] text-main-blue`}
      >
        <span>
          <button
            className="cursor-pointer"
            onClick={() => {
              setDeleteManyPopup(true);
            }}
          >
            Delete Multiple
          </button>
        </span>
      </h3>
      <div className="w-full h-fit overflow-auto rounded-[10px] border-2 border-grey mt-2 ">
        <div className="w-[900px] 1200:w-full h-fit flex flex-col justify-start items-start bg-light-grey overflow-hidden mt-0 leading-[17px]">
          <div className="w-full h-[43px] flex justify-between items-center font-[600] text-[12px] sm:text-[14px] rounded-t-[10px] leading-[17px text-center border-b-2 border-grey">
            <div className="text-center w-[6%] flex justify-center items-center ">
              <div
                className={`w-[15px] h-[15px] rounded-[1px] ${"bg-red-500"} border-2 border-dark-grey`}
              ></div>
            </div>
            <div className="text-start pe-3 flex justify-start items-center w-[7%] cursor-pointer">
              ID
            </div>{" "}
            <div className="text-start pe-3 flex justify-between items-center w-[70%]">
              Make
            </div>
            <div className="text-center pe-3 flex justify-start items-center w-[13%]">
              Actions{" "}
            </div>
          </div>
          
        </div>
      </div>
      <div className="w-full h-[32px] mt-10 flex justify-between items-center">
        <div className="font-[400] text-[12px] sm:text-[14px] leading-[17px] text-[#878787]">
          Showing {(page - 1) * itemsPerPage + 1} -{" "}
          {Math.min(page * itemsPerPage, data.length)} of {data.length} data{" "}
        </div>
        <div className="font-[600] text-[10px] sm:text-[14px] leading-[17px]"></div>
      </div>
    </div>
  );
}
