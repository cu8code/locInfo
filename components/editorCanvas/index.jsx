import { useEffect, useRef, useState } from "react";
import Page from "./pages";
const jsonData = {
  education: {
    school: [
      {
        name: "abc school",
        yearStart: 2010,
        yearEnd: 2019,
      },
      {
        name: "abc school 2",
        yearStart: 2019,
        yearEnd: 2021,
      },
    ],
    university: [
      {
        name: "abc college",
        yearStart: 2021,
        yearEnd: 2025,
        degree: "Btech in cse",
      },
    ],
  },
  workExperience: [
    {
      name: "abc pvt ltd",
      yearStart: 2025,
      yearEnd: 2026,
      position: "sde",
      description: "did stuff",
    },
  ],
};

export default function EditorCanvas({ zoomVal, pages, temp}) {
  return (
    <>
      <div className="w-full min-h-full h-fit flex justify-center">
        <div
          style={{ transform: `scale(${zoomVal})` }}
          className="pt-4 pb-4 w-fit h-fit flex flex-col gap-2 origin-top duration-200"
        >
          {pages.map((data) => {
            return (
              <Page key={data.key} num={data.key} json={jsonData} temp={temp} />
            );
          })}
        </div>
      </div>
    </>
  );
}
