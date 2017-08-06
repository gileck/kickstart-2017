import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {value: 0};

  }

  plus() {
    this.setState({value: ++this.state.value})
  }

  minus() {
    this.setState({value: --this.state.value})
  }

  render() {
    return (<div> {this.state.value}
      <button onClick={() => this.plus()}> + </button>
      <button onClick={() => this.minus()}> - </button>
    </div>);
  }
}

export const ImageView = props => {
    return (<div className='image-view'>
        <figure><img src={props.src}/></figure>
        <figcaption>{props.caption}</figcaption>
    </div>);
};

export const SimpleGallery = props => {
    return (<div className='simple-gallery'>
        {props.images.map((img, idx) => <ImageView src={img} caption={img} key={idx}/>)}
    </div>);
};


export class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {images: []};
    }

    add() {
        const url = prompt("Insert image URL");
        this.setState({images: [...this.state.images, url]});
    }

    render() {
        return (<div>
            <SimpleGallery images={this.state.images} />
            <button onClick={() => this.add()}>Add</button>
        </div>);
    }
}


export class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {data:
            [["green","yellow","green","blue"],
                ["yellow","green","blue","blue"],
                ["green","yellow","red","red"],
                ["red","blue","red","yellow"]]};
    }

    onChangeColor(row,col, color) {
        const colors = ["green","yellow","red","blue"];
        const newDataArray = this.state.data.slice();
        const newColorIndex = (colors.indexOf(color) + 1) % 4;
        newDataArray[row][col] = colors[newColorIndex];
        this.setState({data: newDataArray})
    }

    render() {
        return (
            <div className='simple-canvas'>
                {
                    this.state.data.map((row, idx) => {
                        return (<div className='row' key={idx}>
                            {
                                row.map((color, cellIdx) => {
                                    return <div
                                        className='cell'
                                        onClick={() => this.onChangeColor(idx,cellIdx,color)}
                                        key={cellIdx}
                                        style={{background: color}}/>;
                                })
                            }
                        </div>);
                    })}
            </div>);
    }
}

export const TodoAppView = props => {
    return (<div className='todo-app'>
        {
            props.items.map((item, idx) => {
                return (<TodoItem2
                    key={idx} {...item}
                    onToggle={() => props.onToggle(idx)}
                    onRemove={() => props.onRemove(idx)}
                />);
            })
        }
    </div>);
};

export const TodoItem = props => {
    const textDecoration = props.done ? 'line-through' : '';
    return (<div>
        <div className='todo-item' style={{textDecoration}} onClick={props.onToggle}>{props.title}</div>
        <button onClick={() => props.onRemove()}>🗑</button>
    </div>);
};

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
        return (<div>
            <input onChange={(e) => this.handleChange(e)} />
            <button className='add' onClick={() => this.props.onAddItem(this.state.value)}>Add item</button>
        </div>)
    }
}

export class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {title: "work", completed: false},
                {title: "school", completed: true},
                {title: "run", completed: true},
                {title: "swim", completed: false},
                {title: "soccer", completed: true},
                {title: "basketball", completed: false}]
        }
    }

    onToggle(idx) {
        const newTodos = this.state.todos.slice();
        newTodos[idx].completed = !newTodos[idx].completed;
        this.setState({todos: newTodos});
    }

    onRemove(idx) {
        const newTodos = this.state.todos.slice();
        newTodos.splice(idx,1);
        this.setState({todos: newTodos});
    }

    onAddItem(title) {
        console.log(title);
        if (!title) return;
        const newTodos = this.state.todos.slice();
        newTodos.push({title,completed: false});
        this.setState({todos: newTodos});
    }

    render() {
        return (
            <div>
                {this.state.todos.map((item, idx) =>
                  <TodoItem
                    key={idx}
                    onToggle={() => this.onToggle(idx)}
                    onRemove={() => this.onRemove(idx)}
                 done={item.completed}
                 title={item.title}/>
            )}
            <AddTodo onAddItem={(title) => this.onAddItem(title)} />
            </div>);
    }
}




