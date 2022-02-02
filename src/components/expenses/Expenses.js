import React, { useState } from "react";

import "./Expense.css";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (value) => {
    setFilteredYear(value);
  };
  let filteredYearExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredYearExpense}/>
      <ExpensesList items={filteredYearExpense}/>
    </Card>
  );
};

export default Expenses;
