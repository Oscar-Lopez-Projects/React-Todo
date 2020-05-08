import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import '../src/index.css';


const tasks = [
  {
    task: 'Finish all Netflix Shows',
    id: 182,
    complete: false
  },
  {
    task: 'Finish Hw',
    id: 2554422,
    complete: false
  },
  {
    task: 'Clean room',
    id: 1345,
    complete: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggComplete = taskId => {
    console.log("bk: index.js: App: toggComplete: taskId ", taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            complete: !task.complete

          };
        }
        return task;
      })
    })
  }

  addTask = taskName => {
    console.log("bk: index.js: App: addTask: taskName: ", taskName)
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: taskName, complete: false, id: Date.now() }
      ]
    })
  }

  clearCompleted = () => {
    console.log("bk: index.js: clearCompleted")
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.complete
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toggComplete={this.toggComplete}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
