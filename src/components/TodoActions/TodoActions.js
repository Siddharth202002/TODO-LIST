import {
  ADD_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "../Constants/TodoConstants";

export function add_todo(changeInput) {
  return { type: ADD_TODO, payload: { todoText: changeInput } };
}

export function UpdateList(todo, finished) {
  return {
    type: UPDATE_TODO,
    payload: { todo: todo, finished: finished },
  };
}

export function DeleteList(todo) {
  return { type: DELETE_TODO, payload: { todo: todo } };
}

export function EditTodo(todo, editText) {
  return {
    type: EDIT_TODO,
    payload: { todo: todo, todoText: editText },
  };
}
