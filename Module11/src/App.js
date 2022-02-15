
import React ,{useState}from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
  const [isCartShown,setIsCartShown]=useState(false);

  const showCartHandler=()=>{
    setIsCartShown(true);
  }

  const hideCartHandler=()=>{
    setIsCartShown(false);
  }

  

  return <CartProvider>
   { isCartShown &&   <Cart onClose={hideCartHandler}/>} 
    <Header onShowCart={showCartHandler}/>
    <Meals/>
    

  </CartProvider>;
  
}

export default App;
