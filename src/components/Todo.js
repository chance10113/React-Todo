import React from "react";

const ToDo = (props) => {
  return (
    <div
      onClick={() => props.crossOff(props.toDo.id)}
      className={`item${props.toDo.completed ? "completed" : ""}`}
    >
      <p>{props.toDo.name}</p>
    </div>
  );
};

export default ToDo;
