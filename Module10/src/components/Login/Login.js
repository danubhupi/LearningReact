import React, { useState, useEffect, useReducer ,useContext} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
// import { useEffect } from 'react/cjs/react.development';

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { val: prevState.val, isValid: prevState.isValid };
  }
  return { val: "", isValid: false };
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "INPUT_BLUR") {
    return { val: prevState.val, isValid: prevState.isValid };
  }
  return { val: "", isValid: false };
};

const Login = () => {

  const authCtx=useContext(AuthContext);


  
  


  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    val: "",
    isValid: null,
  });
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    val: "",
    isValid: null,
  });

  const {isValid:emailValid}=emailState;
  const {isValid:passwordValid}=passwordState;


  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailValid && passwordValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailValid,passwordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
