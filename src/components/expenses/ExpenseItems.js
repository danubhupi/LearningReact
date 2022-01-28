import React,{useState} from 'react';

import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItems(props) {
    const [title,setTitle]=useState(props.title);
 
    const clickHandler=()=>{
        setTitle('updated');
        //it takes some time to change the value hence in the log the old
        //value of title will be shown
        console.log(title);
        
    }

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click me!</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
