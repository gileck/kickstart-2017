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
    // TODO - Implement here adding a new task to the Todo list
  }

  render() {
    return (
      <div className="todo-app">
        <header>
          Task:<input type="text" /><button onClick={e => this.addTask(e)}>Add</button>
        </header>
        <main>
          <ul>
            {this.state.tasks.map((task) => <li className='task'>{task.text}</li>)}
          </ul>
        </main>
      </div>
    );
  }
}

export default TodoApp;
