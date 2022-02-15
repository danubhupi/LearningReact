
import React ,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton=(props)=>{

    const cartCtx=useContext(CartContext);

    const totalItems=cartCtx.items.reduce((total,item)=>{
        return total+item.amount;
    },0);

    return <button className={classes.button} onClick={props.onClick}>

        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            your Cart
        </span>

        <span className={classes.badge}> {totalItems}</span>

    </button>;
}

export default HeaderCartButton;