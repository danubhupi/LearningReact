import CartContext from "./cart-context";

import React, { useReducer } from "react";

const CartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const itemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(itemIndex);
    const itemObj = prevState.items[itemIndex];

    let updatedData = [];
    const updatedTotal = prevState.total + action.item.price;

    if (itemObj) {
      const updatedItem = {
        ...itemObj,
        amount: itemObj.amount + action.item.amount
      };
      updatedData = [...prevState.items];
      updatedData[itemIndex] = updatedItem;
    } else {
      updatedData = prevState.items.concat(action.item);
    }

    return { items: updatedData, total: updatedTotal };
  }

  if(action.type==="REMOVE"){

    const itemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    console.log(itemIndex);
    const itemObj = prevState.items[itemIndex];

    let updatedData = [];
    const updatedTotal = prevState.total - itemObj.price;

    if (itemObj.amount===1) {
     
      updatedData = prevState.items.filter(item =>   item.id!=action.id);
      // updatedData[itemIndex] = updatedItem;
    } else {
      // updatedData = prevState.items.concat(action.item);


      const updatedItem = {
        ...itemObj,
        amount: itemObj.amount - 1
      };
      updatedData = [...prevState.items];
      updatedData[itemIndex] = updatedItem;
  }
  return { items: updatedData, total: updatedTotal };

}

};

const defaultData = {
  items: [],
  total: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultData);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartCtx = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
