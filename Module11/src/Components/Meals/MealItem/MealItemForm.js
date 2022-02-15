import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";
import { useRef } from "react";

const MealItemForm = (props) => {
  const inputref = useRef();
  //  const cartCtx=useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = +inputref.current.value;

    props.addItem(amount);
  };
  // const onChangeHandler = () => {
  //   const amount = +inputref.current.value;

  //   props.addItem(amount);
  // };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        // onChange={onChangeHandler}
        ref={inputref}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button >+ ADD</button>
    </form>
  );
};

export default MealItemForm;
