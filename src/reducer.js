const initialState = {
  data: [
    {
      id: 1,
      title: "hi",
      completed: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case "DELETE_TASK":
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      };
    case "CHECK_TASK":
      return {
        ...state,
        data: state.data.map((task) => {
          console.log(task.completed);
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
