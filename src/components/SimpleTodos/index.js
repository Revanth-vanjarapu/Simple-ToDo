import {Component} from 'react'
import TodoItems from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

export default class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deletetodo = id => {
    const {todoList} = this.state
    const filterData = todoList.filter(eachItem => eachItem.id !== id)
    this.setState({todoList: filterData})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="container">
        <h1>Simple Todos</h1>
        <div className="list-conatainer">
          <ul className="list">
            {todoList.map(eachItem => (
              <TodoItems
                key={eachItem.id}
                todo={eachItem}
                deletetodo={this.deletetodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
