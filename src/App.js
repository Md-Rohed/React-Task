import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [SingleTask, setSingleTask] = useState({});

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
