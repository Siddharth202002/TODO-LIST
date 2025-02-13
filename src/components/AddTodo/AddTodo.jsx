import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../TodoActions/TodoActions";

function AddTodo({ add_todo }) {
  const [changeInput, setChangeInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add your next todo..."
        onChange={(e) => setChangeInput(e.target.value)}
      />
      <button
        onClick={() => {
          add_todo(changeInput);
          setChangeInput("");
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddTodo;
