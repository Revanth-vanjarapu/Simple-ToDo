import './index.css'

const TodoItems = props => {
  const {todo, deletetodo} = props
  const {id, title} = todo
  const deletetodoitem = () => {
    deletetodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={deletetodoitem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
