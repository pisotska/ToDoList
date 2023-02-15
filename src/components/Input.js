import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../action";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="enter what you need to do"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        type="button"
        className="btn-add"
        onClick={() => {
          dispatch(
            addTask({ id: Date.now(), title: inputValue, completed: false })
          );
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
