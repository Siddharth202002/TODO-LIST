function TodoReducer(state = [], action) {
  if (action.type == "add_todo") {
    let todoText = action.payload.todoText;
    return [
      ...state,
      { id: state.length + 1, value: todoText, isFinished: false },
    ];
  } else if (action.type == "edit_todo") {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const newList = state.map((t) => {
      if (t.id === todo.id) {
        t.value = todoText;
      }
      return t;
    });
    return newList;
  } else if (action.type == "delete_todo") {
    let todo = action.payload.todo;
    const newList = state.filter((t) => t.id != todo.id);
    return newList;
  } else if (action.type == "update_List") {
    let todo = action.payload.todo;
    let finished = action.todo.finished;
    const updateList = List.map((t) => {
      if (t.id === todo.id) {
        t.isFinished = finished;
      }
      return t;
    });
    return updateList;
  }
  return state;
}

export default TodoReducer;
