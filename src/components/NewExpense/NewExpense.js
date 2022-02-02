import "./NewExpense.css";
import React from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
const newDataHandler=(newData)=>{
    let newExpenseObj={
        ...newData,
        id:Math.random().toString()
    };
    props.onNewExpenseAdded(newExpenseObj);
}


  return (
    <div className="new-expense">
      <NewExpenseForm onNewData={newDataHandler}/>
    </div>
  );
};

export default NewExpense;
