import React from "react";

const First = () => {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center w-500 h-500 rounded-3xl p-12 bg-slate-400">
      <h1 className=" text-3xl mb-4 font-bold">Counter</h1>
      <h2 className="text-semibold mb-4  ">Count is: {count}</h2>
      <div className=" flex gap-3 ">
        <button className=" outline-none text-white bg-slate-700 hover:bg-slate-600 px-4 py-1 rounded-full shadow-sm" onClick={increase}>Increase</button>
        <button className=" outline-none text-white bg-slate-700 hover:bg-slate-600 px-4 py-1 rounded-full shadow-sm" onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

export default First;
