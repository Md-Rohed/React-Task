import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import { useState, useEffect } from "react";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [SingleTask, setSingleTask] = useState({});
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        SingleTask={SingleTask}
        setSingleTask={setSingleTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        SingleTask={SingleTask}
        setSingleTask={setSingleTask}
      />
    </div>
  );
}

export default App;
