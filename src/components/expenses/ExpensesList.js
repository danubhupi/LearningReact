import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => {
          return (
            <ExpenseItems
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </ul>
    );
  } else {
    return (
      <p className="expenses-list__fallback"> Sorry no expense for that year</p>
    );
  }
};

export default ExpensesList;
