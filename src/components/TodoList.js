import React from 'react';
import Todo from './Todo';
import { Button, Form } from 'reactstrap';
import '../components/Todo.css'



// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return(
        <Form>
            <div className="todoBody">
            {props.tasks.map(task => (
                <Todo
                    toggComplete={props.toggComplete}
                    key={task.id}
                    task={task}
                />
            ))}
            </div>
            <Button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </Button>
        </Form>
    )
}

export default TodoList;