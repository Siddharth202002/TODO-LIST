import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { bindActionCreators } from "redux";
import todoReducer, {
  addTodo,
  editTodo,
  deleteTodo,
  updateList,
} from "./slices/TodoSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, updateList },
    dispatch
  );
  return (
    <div>
      <AddTodo add_todo={actions.addTodo} />
      <TodoList
        EditTodo={actions.editTodo}
        DeleteList={actions.deleteTodo}
        UpdateList={actions.updateList}
      />
    </div>
  );
}

export default App;
