import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'

export class TodoList extends Component {

  state = {
    todos: JSON.parse(localStorage.getItem("todos") || "[]")
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

  toggleDone = (id) => {
    const todos = [...this.state.todos];
    todos.forEach(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
    })
    this.setState({todos});
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos});
  }

  save = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo key={todo.id} todo={todo} editTodo={this.editTodo} deleteTodo={this.deleteTodo} toggleDone={this.toggleDone}/>
    })
    this.save();
    return (
      <div className="TodoList py-8 bg-red-500 text-center text-white font-sans rounded mt-8 shadow-2xl">
        <h1 className="text-3xl uppercase font-thin mb-4">Todo List!</h1>
        {todos}
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default TodoList
