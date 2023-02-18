import React from "react";

const AddTask = () => {
  return (
    <div className=" m-20 flex  place-content-center  ">
      <input
        className="bg-blue-500 w-96 rounded-lg placeholder-white text-white p-2 "
        placeholder="add task"
      ></input>
      <button
        className="bg-green-600 p-2 px-4 text-white border rounded-2xl"
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
