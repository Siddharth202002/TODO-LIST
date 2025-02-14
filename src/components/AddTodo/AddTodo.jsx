import { useState } from "react";

function AddTodo({ add_todo }) {
  const [changeInput, setChangeInput] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add your next todo..."
        onChange={(e) => setChangeInput(e.target.value)}
      />
      <button
        onClick={() => {
          add_todo({ todoText: changeInput });
          // setChangeInput("");
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddTodo;
