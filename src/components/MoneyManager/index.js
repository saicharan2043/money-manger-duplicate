import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

const Option = props => {
  const {listItem} = props
  const {displayText} = listItem
  return <option value={displayText}>{displayText}</option>
}

class MoneyManager extends Component {
  state = {
    totalBalance: 0,
    income: 0,
    expenses: 0,
    amount: '',
    name: '',
    type: 'income',
    historyList: [],
  }

  onDelete = id => {
    const {historyList, expenses, income} = this.state
    const reciveDelete = historyList.filter(echValue => echValue.id === id)
    const {name, amount, type} = reciveDelete[0]
    const value = parseInt(amount)
    const totaAmount = income - value - expenses
    console.log(value)
    if (type === 'income') {
      this.setState(previwes => ({
        totalBalance: totaAmount,
        income: previwes.income - value,
      }))
    } else {
      this.setState(previwes => ({
        expenses: previwes.expenses - value,
        totalBalance: previwes.totalBalance + value,
      }))
    }

    this.setState(previwes => ({
      historyList: previwes.historyList.filter(echValue => echValue.id !== id),
    }))
  }

  onSelect = event => {
    this.setState({type: event.target.value})
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  addValue = event => {
    event.preventDefault()
    const {name, amount, type, expenses, totalBalance, income} = this.state
    const newItem = {
      id: uuidv4(),
      name,
      amount,
      type,
    }
    const value = parseInt(amount)

    const totalAmount = income + value - expenses
    console.log(totalAmount)
    if (type === 'income') {
      this.setState(previwes => ({
        totalBalance: totalAmount,
        income: previwes.income + value,
      }))
    } else {
      this.setState(previwes => ({
        totalBalance: previwes.totalBalance - value,
        expenses: previwes.expenses + value,
      }))
    }

    this.setState(previwes => ({
      historyList: [...previwes.historyList, newItem],
      name: '',
      amount: '',
      type: 'income',
    }))
  }

  render() {
    const {
      totalBalance,
      income,
      expenses,
      historyList,
      name,
      amount,
      type,
    } = this.state
    console.log(historyList)
    return (
      <div className="bg-color">
        <div className="name-container">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="name-paragraph">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <ul className="ul-list-container">
          <MoneyDetails
            totalBalance={totalBalance}
            income={income}
            expenses={expenses}
          />
        </ul>

        <div className="ul-list-container">
          <div className="from-container">
            <form className="from">
              <h1 className="from-heading">Add Transaction</h1>
              <label className="label" htmlFor="Title">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                className="input"
                id="Title"
                onChange={this.changeName}
                value={name}
              />
              <label className="label" htmlFor="Amount">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                className="input"
                id="Amount"
                onChange={this.changeAmount}
                value={amount}
              />
              <label className="label" htmlFor="Type">
                TYPE
              </label>
              <select
                className="input"
                id="Type"
                value={type}
                onChange={this.onSelect}
              >
                {transactionTypeOptions.map(echValue => (
                  <Option listItem={echValue} key={echValue.optionId} />
                ))}
              </select>
              <button className="add-Button" onClick={this.addValue}>
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-un-list">
              <li className="list-top">
                <p className="box-top-name">Title</p>
                <p className="box-top-name">Amount</p>
                <p className="box-top-name">Type</p>
                <p className="box-top-name"> </p>
              </li>
              {historyList.map(echValue => (
                <TransactionItem
                  history={echValue}
                  key={echValue.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
