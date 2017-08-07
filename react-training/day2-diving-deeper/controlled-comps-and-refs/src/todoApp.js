import React, { Component } from 'react';
import Task from './task';
import './App.css';

class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [Task('do something'), Task('do something else'), Task('one thing more')]
    }
  }

  addTask(e) {
    const newTasks = this.state.tasks.slice();
    newTasks.unshift(Task(this.input.value));
    this.setState({tasks: newTasks});
    this.input.value = "";
  }

  render() {
    return (
      <div className="todo-app">
        <header>
          Task:<input type="text" ref={input => this.input = input} /><button onClick={e => this.addTask(e)}>Add</button>
        </header>
        <main>
          <ul>
            {this.state.tasks.map((task,i) => <li key={i} className='task'>{task.text}</li>)}
          </ul>
        </main>
      </div>
    );
  }
}

export default TodoApp;
