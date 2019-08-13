import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'

export class TodoList extends Component {

  state = {
    todos: []
  }

  addTodo = (todo) => {
    todo.id = uuid()
    this.setState(state => {
      return {
        todos: [...state.todos, todo]
      }
    })
  }

  editTodo = (id, title) => {
    const todos = [...this.state.todos];
    todos.forEach(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
    })
    this.setState({todos});
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos});
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo key={todo.id} todo={todo} editTodo={this.editTodo} deleteTodo={this.deleteTodo}/>
    })

    return (
      <div className="TodoList">
        {todos}
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default TodoList
