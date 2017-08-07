import React, { Component } from 'react';
import Task from './task';
import './App.css';

class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [Task('do something'), Task('do something else'), Task('one thing more')],
        inputText: ""
    }
  }

  addTask(e) {
    const newTasks = this.state.tasks.slice();
    newTasks.unshift(Task(this.state.inputText));
    this.setState({tasks: newTasks, inputText: ""});
  }

    onChange(e) {
      this.setState({inputText: e.target.value});
    }

  render() {
    return (
      <div className="todo-app">
        <header>
          Task:<input type="text" value={this.state.inputText} onChange={(e) => this.onChange(e)} /><button onClick={e => this.addTask(e)}>Add</button>
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
