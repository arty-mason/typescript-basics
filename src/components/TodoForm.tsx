import React, { useState } from "react";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(title);
      setTitle("");
    }
  };

  return (
    <form className="input-field mt2">
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder=" Write the task here"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Write the task here
      </label>
    </form>
  );
};

export default TodoForm;
