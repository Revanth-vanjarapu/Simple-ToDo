import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [
      {id: 1, title: 'Book the ticket for today evening', completed: false},
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        completed: false,
      },
      {id: 4, title: 'Drop the parcel at Bloomingdale', completed: false},
      {id: 5, title: 'Order fruits on Big Basket', completed: false},
      {id: 6, title: 'Fix the production issue', completed: false},
      {id: 7, title: 'Confirm my slot for Saturday Night', completed: false},
      {id: 8, title: 'Get essentials for Sunday car wash', completed: false},
    ],
    newTodoTitle: '',
  }

  handleAddTodo = () => {
    const {newTodoTitle} = this.state
    const rawInput = newTodoTitle.trim()
    if (rawInput === '') return

    const parts = rawInput.split(' ')
    const maybeCount = parseInt(parts[parts.length - 1])
    const isMultiple = !Number.isNaN(maybeCount)
    const count = isMultiple ? maybeCount : 1
    const title = isMultiple ? parts.slice(0, -1).join(' ') : rawInput

    const newTodos = Array.from({length: count}, (_, i) => ({
      id: Date.now() + i,
      title,
      completed: false,
    }))

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
    }))
  }

  handleChange = e => {
    this.setState({newTodoTitle: e.target.value})
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.filter(todo => todo.id !== id),
    }))
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    }))
  }

  updateTodoTitle = (id, newTitle) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  render() {
    const {todosList, newTodoTitle} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo">
            <input
              type="text"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.handleChange}
              placeholder="Enter todo title (e.g. Buy Milk 3)"
            />
            <button onClick={this.handleAddTodo} type="button">
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
