// Write your code here
import './index.css'

const TransactionItem = props => {
  const {history, onDelete} = props
  const {id, name, amount, type} = history
  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="list-items">
      <p className="list-name">{name}</p>
      <p className="list-name">{amount}</p>
      <p className="list-name">{type}</p>
      <div className="delete-container">
        <button className="delete" onClick={deleteItem} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="img-delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
