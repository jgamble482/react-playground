import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const submitExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: 10 * Math.random().toString(),
    };
    props.onAddExpense(newExpense);
    displayFormHandler();
  };
  const displayFormHandler = () => {
    setShowForm((previous) => !previous);
  };
  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={displayFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onFormSubmit={submitExpenseHandler}
          onCancel={displayFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
