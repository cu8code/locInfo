import { useState } from "react";

export default function FormInput({ val, setVal, pHolder }) {
  const empty = {
    transform: "translateY(25px) translateX(15px)",
    transition: "200ms",
    color: "#cfcfcf",
  };
  const focus = {
    transform: "translateY(7px) translateX(-4px)",
    transition: "200ms",
    color: "#669FEA",
    // color:"#fff",
    fontSize: "14px",
    position:"relative",
    zIndex: "11",
  };
  const [style, setStyle] = useState(empty);
  return (
    <>
      <div>
        <div className="w-full flex items-center flex-col">
          <div style={style} className="capitalize w-[90%] text-[16px] h-[24px]">
            <span className="bg-[#1b2c47] pr-[5px] inline-block mt-[6px] select-none">{pHolder}</span>
          </div>
          <input
            className="text-white capitalize focus:border-[#fff] focus:border-2 hover:border-[#e3e3e3] caret-white w-[90%] h-[40px] outline-none p-[14px] pt-[16.5px] pb-[16.5px] rounded text-[15px] bg-transparent border border-[#305688] relative z-10"
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onFocus={() => setStyle(focus)}
            onBlur={() => {
              if (val.length == 0) setStyle(empty);
            }}
          />
        </div>
      </div>
    </>
  );
}
