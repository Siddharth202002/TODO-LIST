import Todo from "../Todos/Todo";
import { useDispatch, useSelector } from "react-redux";
import { UpdateList, DeleteList, EditTodo } from "../TodoActions/TodoActions";

function TodoList({ UpdateList, DeleteList, EditTodo }) {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.todo);

  function changeList(todo, finished) {
    UpdateList(todo, finished);
  }

  function deleted(todo) {
    DeleteList(todo);
  }

  function edit(todo, editText) {
    EditTodo(todo, editText);
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
