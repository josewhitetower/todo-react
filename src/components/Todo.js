import React, { Component } from 'react'

export default class Todo extends Component {
  state = {
    isEditing: false,
    title: this.props.todo.title,
    isDone: this.props.todo.isDone
  }

  handleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleDoubleClick = (e) => {
    this.setState(state => {
      return {
        isEditing: !state.isEditing
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const [id, title] = [this.props.todo.id, this.state.title];
    this.props.editTodo(id, title);
    this.setState({isEditing: false,  title: this.props.todo.title
    })
  }

  handleClick = () => {
    this.props.deleteTodo(this.props.todo.id)
  }

  handleTitleClick = () => {
    this.props.toggleDone(this.props.todo.id)
  }

  render() {

    const todo = (<div className="flex justify-between">
                    <p className={this.props.todo.isDone ? "line-through" : ""} onClick={this.handleTitleClick}>{this.state.title}</p>

                    <div className="flex">
                      <i className="fa fa-pencil fa-xs cursor-pointer" title="Edit" aria-hidden="true" onClick={this.handleDoubleClick}></i>
                      <i className="fa fa-trash fa-xs ml-2 cursor-pointer" title="Delete" aria-hidden="true" onClick={this.handleClick}></i>
                    </div>
                  </div>)

    const form = (<form onSubmit={this.handleSubmit} className="text-center">
                    <input autoFocus className="focus:outline-none bg-red-400 font-semibold" type="text" value={this.state.title} onChange={this.handleChange} onBlur={this.handleDoubleClick}/>
                  </form>)

    return (
      <div className="Todo bg-red-400 p-4 mb-2 text-left font-semibold">
        {this.state.isEditing ? form : todo}
      </div>
    )
  }
}
