import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";
const toDos = [
  {
    task: "Overcome Anxiety",
    id: 7,
    completed: false,
  },
  {
    task: "Survive Today",
    id: 14042,
    completed: false,
  },
  {
    task: "Love Yourself More",
    id: 5,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: toDos,
    };
  }

  // Change Handlers

  // Updates State
  crossOff = (clickedToDoId) => {
    const newToDos = this.state.toDos.map((toDo) => {
      if (toDo.id === clickedToDoId) {
        return {
          ...toDo,
          completed: !toDo.completed,
        };
      } else {
        return toDo;
      }
    });
    this.setState({
      toDos: newToDos,
    });
  };

  addTask = (toDoName) => {
    //logic to add an item to toDoList state
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List:</h1>
          <ToDoForm addTask={this.addTask}/>
        </div>
        <ToDoList toDos={this.state.toDos} crossOff={this.state.crossOff} />
      </div>
    );
  }
}

export default App;
