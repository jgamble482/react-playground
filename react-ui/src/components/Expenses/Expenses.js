import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

function ExpenseItems(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (value) => {
    setFilteredYear(value);
  };
  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === filteredYear
  );


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          initialYear={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default ExpenseItems;
