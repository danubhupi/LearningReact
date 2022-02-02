import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  //   const [inputValues, setInputValues] = useState({
  //     titleValue: "",
  //     amountValue: "",
  //     dateValue: "",
  //   });

  const [addExpenseButton,setAddExpensebutton]=useState(false);
  const onAddExpenseButtonClick=()=>{
    setAddExpensebutton(!addExpenseButton);
  }

  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const titleChanged = (event) => {
    //   setInputValues((prevState)=>{
    //       return {...prevState,titleValue:event.target.value}
    //   });
    setTitleValue(event.target.value);
  };

  const amountChanged = (event) => {
    //     setInputValues((prevState)=>{
    //         return {...prevState,amountValue:event.target.value}
    //     });
    setAmountValue(event.target.value);
  };

  const dateChanged = (event) => {
    // setInputValues((prevState)=>{
    //     return {...prevState,dateValue:event.target.value}
    // });
    setDateValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.reset();

    const dataObject = {
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };
    props.onNewData(dataObject);
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
  };

  if(addExpenseButton==true){

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleValue} onChange={titleChanged} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountValue}
            min="0.1"
            step="0.1"
            onChange={amountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateValue}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChanged}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={onAddExpenseButtonClick}>Cancel</button>
        </div>
      </div>
    </form>
  );}

  else 
  return <button className='new-expense__actions' onClick={onAddExpenseButtonClick}>  Add expense </button>
};

export default NewExpenseForm;
