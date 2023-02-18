import React from "react";

const ShowTask = () => {
  const tasklist = [
    { id: 10001, name: "TASK A ", time: "2:09:01 AM 09/03/2023" },
    { id: 10001, name: "TASK A ", time: "2:09:01 AM 09/03/2023" },
    { id: 10001, name: "TASK A ", time: "2:09:01 AM 09/03/2023" },
  ];
  return (
    <div className="m-16 bg-slate-300 rounded-2xl h-96 ">
      <div className="flex justify-between  ml-60  p-10">
        <span className="font-bold text-2xl "> Todo</span>
        <button className="bg-blue-600 text-white p-2  mr-60">Clear All</button>
      </div>
      <ul className="flex justify-between  mx-96">
        {tasklist.map((task) => (
          <li className="bg-white     p-12 px-16 rounded-xl font-bold uppercase">
            <p className="flex   flex-col">
              <span>{task.name}</span>
              <span>{task.time} </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;
