import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { bindActionCreators } from "redux";
import {
  add_todo,
  UpdateList,
  DeleteList,
  EditTodo,
} from "./components/TodoActions/TodoActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { add_todo, EditTodo, DeleteList, UpdateList },
    dispatch
  );
  return (
    <div>
      <AddTodo add_todo={actions.add_todo} />
      <TodoList
        EditTodo={actions.EditTodo}
        DeleteList={actions.DeleteList}
        UpdateList={actions.UpdateList}
      />
    </div>
  );
}

export default App;
