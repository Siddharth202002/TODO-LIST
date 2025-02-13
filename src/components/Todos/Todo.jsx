import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, deleteTodo, editTodo }) {
  const [changeInput, setChangeInput] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [changeText, setChangeText] = useState(todoData);
  return (
    <div>
      <input
        type="checkbox"
        checked={changeInput}
        onChange={(e) => {
          console.log(e);

          setChangeInput(e.target.checked);
          // calllback
          changeFinished(e.target.checked);
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={changeText}
          onChange={(e) => setChangeText(e.target.value)}
        />
      ) : (
        <span>{todoData}</span>
      )}

      <button
        onClick={() => {
          setIsEditing(!isEditing);
          editTodo(changeText);
        }}
      >
        {!isEditing ? "Edit" : "save"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default Todo;
