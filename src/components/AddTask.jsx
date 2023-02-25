import React from "react";

const AddTask = ({ taskList, setTaskList, SingleTask, setSingleTask }) => {
  const handleChange = (e) => {
    e.preventDefault();
    if (SingleTask.id) {
      const date = new Date();
      const updatedTask = taskList.map((todo) =>
        todo.id === SingleTask.id
          ? {
              id: todo.id,
              name: SingleTask.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTask);
      setSingleTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setSingleTask({});
    }
  };
  return (
    <form
      className=" m-20 flex  place-content-center  "
      onSubmit={handleChange}
    >
      <input
        type="text"
        name="task"
        onChange={(e) => setSingleTask({ ...SingleTask, name: e.target.value })}
        value={SingleTask.name || " "}
        className="bg-blue-500 w-96 rounded-lg placeholder-white text-white p-2  sm:w-48 sm:mx-6"
        placeholder="add task"
      />
      <button
        className="bg-green-600 p-2 px-4 text-white border rounded-2xl"
        type="submit"
      >
        {SingleTask.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddTask;
