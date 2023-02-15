import "./App.css";
import Input from "./components/Input";
import { useSelector } from "react-redux";
import Tasks from "./components/Tasks";

function App() {
  const taskList = useSelector((state) => state.data);

  return (
    <div className="App">
      <div className="title">TO DO LIST</div>
      <Input />
      <div className="display-tasks">
        {taskList.map((task) => (
          <Tasks {...task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
