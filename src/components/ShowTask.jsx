import React from "react";

const ShowTask = ({ taskList, setTaskList }) => {
  const tasklist = [
    { id: 10001, name: "TASK A ", time: "2:09:01 AM 09/03/2023" },
    { id: 10001, name: "TASK A ", time: "2:09:01 AM 09/03/2023" },
    { id: 10001, name: "TASK A ", time: "2:09:01 AM 09/03/2023" },
  ];
  return (
    <div className="m-16 bg-slate-300 rounded-2xl h-96 ">
      <div className="flex justify-between  ml-60  p-10">
        <span className="font-bold text-2xl "> Todo</span>
        <button
          onClick={() => {
            setTaskList([]);
          }}
          className="bg-blue-600 text-white p-2  mr-60"
        >
          Clear All
        </button>
      </div>
      <ul className="flex justify-between  mx-48">
        {taskList.map((task) => (
          <li className="bg-white      p-12  rounded-xl font-bold uppercase">
            <p className="flex   flex-col">
              <span>{task.name}</span>
              <span>{task.time} </span>
            </p>
            <button className="bg-green-600 mx-4 my-4 w-12 h-8 text-white rounded-xl px-2">
              Edit
            </button>
            <button className="bg-red-600 mx-4 my-4 w-20 h-8 text-white rounded-xl ">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;
