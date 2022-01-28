import "./Expense.css";
 
import ExpenseItems from "./ExpenseItems";

import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* <ExpenseItems item={expense[0]}/>
        <ExpenseItems item={expense[1]}/>
        <ExpenseItems item={expense[2]}/> */}

      <ExpenseItems
        title={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      />

      <ExpenseItems
        title={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      />

      <ExpenseItems
        title={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      />
    </Card>
  );
};

export default Expenses;
