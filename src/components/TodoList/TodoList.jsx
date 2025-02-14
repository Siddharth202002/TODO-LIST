import Todo from "../Todos/Todo";
import { useDispatch, useSelector } from "react-redux";

function TodoList({ UpdateList, DeleteList, EditTodo }) {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.todo.todoList);
  console.log(List);

  function changeList(todo, finished) {
    UpdateList({ todo: todo, finished: finished });
  }

  function deleted(todo) {
    DeleteList({ todo });
  }

  function edit(todo, editText) {
    EditTodo({ todo: todo, todoText: editText });
  }

  return (
    <div>
      {List.length > 0 &&
        List.map((todo) => (
          <Todo
            key={todo.id}
            todoData={todo.value}
            isFinished={todo.isFinished}
            id={todo.id}
            changeFinished={(finished) => changeList(todo, finished)}
            deleteTodo={() => deleted(todo)}
            editTodo={(editText) => edit(todo, editText)}
          />
        ))}
    </div>
  );
}

export default TodoList;
