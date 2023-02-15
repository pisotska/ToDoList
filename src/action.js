export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CHECK_TASK = "CHECK_TASK";

export const addTask = (newTask) => {
  return { type: ADD_TASK, payload: newTask };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const checkTask = (id, comleted) => {
  return { type: CHECK_TASK, payload: id };
};

/*
 <img
            className="btn-delete"
            src="https://cdn3.iconfinder.com/data/icons/basic-interface/100/delete-512.png"
          />
*/
