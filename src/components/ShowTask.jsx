import React from "react";

const ShowTask = ({ taskList, setTaskList, SingleTask, setSingleTask }) => {
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setSingleTask(selectedTask);
    console.log(SingleTask);
  };
  return (
    <div className="m-16 bg-slate-300 rounded-2xl h-full   ">
      <div className="flex justify-between  ml-60  p-10 ">
        <span className="font-bold text-2xl "> Todo</span>
        <button
          onClick={() => {
            setTaskList([]);
          }}
          className="bg-blue-600 text-white p-2  mr-60 rounded-xl"
        >
          Clear All
        </button>
      </div>
      <ul className="flex flex-wrap gap-4 justify-between   mx-48 ">
        {taskList.map((task) => (
          <li
            key={task.id}
            className="bg-white      p-12  rounded-xl font-bold uppercase"
          >
            <p className="flex   flex-col">
              <span>{task.name}</span>
              <span>{task.time} </span>
            </p>
            <button
              onClick={() => handleEdit(task.id)}
              className="bg-green-600 mx-4 my-4 w-12 h-8 text-white rounded-xl px-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-600 mx-4 my-4 w-20 h-8 text-white rounded-xl "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;
