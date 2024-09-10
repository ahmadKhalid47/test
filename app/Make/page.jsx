"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ListView from "./ListView";
import React from "react";

export default function Vehicles() {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [make, setMake] = useState("");
  const [reloader, setreloader] = useState("");
  const handleClick = () => {
    setPopup(true);
  };

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get("/api/getMake", {
          headers: { "Cache-Control": "no-store" },
        });
        setVehiclesData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [reloader]);

  async function save(action) {
    if (make.trim() === "") {
      alert("Please fill the input");
      return;
    }

    try {
      const result = await axios.post(`/api/saveMake`, {
        make,
      });
      console.log(result);
      // setMakeReloader(makeReloader + 1);
      setreloader(reloader + 1);
      if (action === "close") {
        setPopup(false);
      }
      setMake("");
    } catch (err) {
      console.log(err);
    }  }

  return (
    <div
      className={`${"nav-closed-width"} absolute right-0 w-fit h-fit mt-[90px] pt-5 transitions`}
    >
      <div
        className={`w-full h-fit flex flex-col justify-start items-start gap-[0px] md:gap-[20px] pe-[10px] md:pe-[50px] ps-[10px] md:ps-[40px] pb-10`}
      >
        <div className="w-[100%] gap-y-3 flex flex-wrap justify-between md:justify-start items-end">
          <h3 className="font-[600] text-[16px] xs:text-[18px] md:text-[25px] leading-5 md:leading-[38px] text-black w-[100%] md:w-[50%]">
            Make
            <p className="text-grey font-[400] text-[12px] xs:text-[14px] md:text-[18px] leading-5 md:leading-[21px] text-black">
              Configuration / Make
            </p>
          </h3>
          <div className="flex justify-start md:justify-end gap-3 items-end w-[100%] md:w-[50%]">
            <button
              className="w-fit px-3 md:px-6 py-2 md:py-0 h-fit md:h-[44px] rounded-[10px] bg-red-500 text-white  font-[600] text-[12px] md:text-[18px] leading-[21px] text-center"
              onClick={() => {
                handleClick();
              }}
            >
              Add New
            </button>
          </div>
        </div>

        <div className="w-full h-[73vh] relative">
          <ListView data={vehiclesData} />
          {popup ? (
            <div className="w-full h-full bg-[rgba(255,255,255,0.9)] rounded-[10px] absolute top-0 left-0 flex justify-center item-center sm:items-center z-[10] bg-red-40">
              <div className="w-[90%] sm:w-[500px] h-fit border-[1px] border-grey rounded-[10px] mt-0 flex flex-wrap justify-between items-start gap-x-[4%] gap-y-5 bg-white shadow z-[15]  py-3 xs:py-5 md:py-14 px-1 xs:px-3 md:px-10 relative">
                <div
                  className={`w-[100%] h-fit bg-red-30 flex flex-col justify-start items-start gap-1`}
                >
                  <label className="flex justify-start gap-1 items-start font-[600] text-[14px] leading-[17px]">
                    {"Add New"}
                  </label>
                  <div className="w-full h-fit flex justify-between items-center relative overflow-hidden">
                    <input
                      required={true}
                      type={"text"}
                      className="pe-10 font-[400] text-[16px] leading-[19px] ps-2 w-[100%] h-[43px] flex justify-between items-center input-color rounded-xl border-2 border-grey truncate"
                      placeholder={`Enter Text Here`}
                      onChange={(e) => {
                        setMake(e.target.value);
                      }}
                      value={make}
                    />
                  </div>
                </div>

                <div
                  className={`w-full flex justify-end gap-4 items-center pt-4`}
                >
                  <button
                    className="px-2 md:px-0 w-fit py-2 md:py-0 h-fit md:h-[44px] rounded-[10px] input-color  text-gray-500 font-[400] text-[12px] md:text-[18px] leading-[21px] absolute top-2 right-"
                    onClick={() => {
                      setPopup(false);
                      setMake("");
                    }}
                  >
                  </button>
                  <button
                    className="w-[230px] py-2 md:py-0 h-fit md:h-[44px] rounded-[10px] bg-red-500 text-white  font-[500] text-[12px] xs:text-[14px] md:text-[18px] leading-[21px] text-center"
                    onClick={() => save("close")}

                  >
                    Save and Close
                  </button>
                  <button
                    className="w-[230px] py-2 md:py-0 h-fit md:h-[44px] rounded-[10px] bg-red-500 text-white  font-[500] text-[12px] xs:text-[14px] md:text-[18px] leading-[21px] text-center"
                    onClick={() => save("new")}

                  >
                    Save and New
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
