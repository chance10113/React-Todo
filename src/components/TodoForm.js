import React from "react";

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newToDoName: "",
        }
    }

    changeHandler = (e) => {
        this.setState({
            newToDoName: e.target.value,
        })
    };
    
    submitHandler = () => {
        this.props.addTask();
    }

    render() {
        return (
            <form>
                <input
                value={this.state.newToDoTask}
                type="text"
                name="task"
                onChange={this.changeHandler}
                />
                <button onClick={this.submitHandler()}> Add </button>
            </form>
        )
    }
}

export default ToDoForm