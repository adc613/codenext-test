import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"Adam",
      todos: [],
    };
  }

  addTodo(todo) {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, todo],
    });
  }

  render() { 
    return (
      <div>
        <p>{this.state.name}</p>
        <TodoList
          todos={this.state.todos}
        >
        </TodoList>
        <TodoForm
          submitHandler={(todo) => this.addTodo(todo) }
        >
        </TodoForm>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() { 
    const todos = this.props.todos.map(todo => (<li><Todo text={todo}></Todo></li>));
    return (
      <ul>
        {todos}
      </ul>
    );
  }
}

class Todo extends React.Component {
  render() { 
    return (
      <p>
        {this.props.text}
      </p>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state.value);
    this.setState({value: ""});
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <p>{this.state.name}</p>
          <input
            type="text"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
