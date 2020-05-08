import React from 'react';
import { Button } from 'reactstrap';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            newTaskText: ""
        }
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({ newTaskText: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.newTaskText) {
            this.props.addTask(this.state.newTaskText)
        }
        this.setState({ newTaskText: "" })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="task"
                    value={this.state.newTaskText}
                    onChange={this.handleChanges}
                />
                <Button>Add</Button>
            </form>
        )
    }
}

export default TodoForm;