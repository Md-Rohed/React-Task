import React from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, newTask]);
  };
  return (
    <form
      className=" m-20 flex  place-content-center  "
      onSubmit={handleChange}
    >
      <input
        type="text"
        name="task"
        className="bg-blue-500 w-96 rounded-lg placeholder-white text-white p-2 "
        placeholder="add task"
      />
      <button
        className="bg-green-600 p-2 px-4 text-white border rounded-2xl"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
