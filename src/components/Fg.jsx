import React, { useRef, useState } from "react";
import Card from "./Card";

export default function Fg() {
  const ref = useRef(null);
  const [data, setData] = useState([]);

  const addCard = () => {
    const newCard = {};
    setData([...data, newCard]);
  };

  return (
    <>
      <div className="z-[3]">
        <div ref={ref} className="left-0 w-full">
          <button
            onClick={addCard}
            className="absolute bg-zinc-100 px-3 py-2 rounded-full right-14 top-8 text-purple-600 font-semibold"
          >
            Add Docs +
          </button>
        </div>
        <div ref={ref} className="fixed top-20 left-0 w-full h-[90%]">
          {data.map((item, index) => (
            <Card
              data={item}
              reference={ref}
            />
          ))} 
        </div>
      </div>
    </>
  );
}
