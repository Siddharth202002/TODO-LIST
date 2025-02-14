import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todoText = action.payload.todoText;
      state.todoList.push({
        id: state.todoList.length + 1,
        value: todoText,
        isFinished: false,
      });
    },

    editTodo: (state, action) => {
      let todo = action.payload.todo;
      let todoText = action.payload.todoText;
      state.todoList = state.todoList.map((t) => {
        if (t.id === todo.id) {
          t.value = todoText;
        }
        return t;
      });
    },

    deleteTodo: (state, action) => {
      let todo = action.payload.todo;
      state.todoList = state.todoList.filter((t) => t.id != todo.id);
    },

    updateList: (state, action) => {
      let todo = action.payload.todo;
      let finished = action.payload.finished;
      state.todoList = state.todoList.map((t) => {
        if (t.id === todo.id) {
          t.isFinished = finished;
        }
        return t;
      });
    },
  },
});

export const { addTodo, updateList, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
