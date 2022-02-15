import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const total=`$${cartCtx.total.toFixed(2)}`;

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null,item.id)}
          onAdd={addCartItemHandler.bind(null,item )}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>total</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>Order</button>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
