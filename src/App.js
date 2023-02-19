import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
