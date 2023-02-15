import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTask } from "../action";
import { checkTask } from "../action";

const Tasks = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="task-card">
      <div className="content-container">
        <input
          type="checkbox"
          onChange={() => console.log(dispatch(checkTask(props.id)))}
          className="checkbox"
          checked={props.completed}
        />
        <div
          className={classNames(
            "task-text",
            props.completed && "completed-task"
          )}
        >
          {props.title}
        </div>
        <button
          className="btn"
          type="button"
          onClick={() => dispatch(deleteTask(props.id))}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Tasks;
