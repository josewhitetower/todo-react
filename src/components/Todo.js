import React, { Component } from 'react'

export default class Todo extends Component {
  state = {
    isEditing: false,
    title: this.props.todo.title
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

  render() {

    const todo = (<div>
                    <p onDoubleClick={this.handleDoubleClick}>{this.state.title}</p>
                    <p onClick={this.handleClick}>X</p>
                  </div>)

    const form = (<form onSubmit={this.handleSubmit}>
                    <input autoFocus type="text" value={this.state.title} onDoubleClick={this.handleDoubleClick} onChange={this.handleChange} onBlur={this.handleDoubleClick}/>
                  </form>)

    return (
      <div className="Todo">
        {this.state.isEditing ? form : todo}
      </div>
    )
  }
}
