// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, income, expenses} = props
  return (
    <>
      <li className="list list-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="">
          <p className="position-text">Your Balance</p>
          <p className="amount-text" testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </li>

      <li className="list list-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="">
          <p className="position-text">Your Income</p>
          <p className="amount-text" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>

      <li className="list list-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="">
          <p className="position-text">Your Expenses</p>
          <p className="amount-text" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
