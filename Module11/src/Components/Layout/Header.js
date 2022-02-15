import classes from "./Header.module.css";
import React from "react";
import mealImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  
  return <React.Fragment>
    <header className={classes.header}>
      <h2>Meals</h2>
      <HeaderCartButton onClick={props.onShowCart}/>
    </header>

    <div className={classes['main-image']}>
      <img src={mealImg} alt="a buffet" />
    </div>
  </React.Fragment>;
};

export default Header;
