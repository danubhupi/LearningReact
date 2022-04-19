import { useState } from "react";

const useInput = (validatingFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setWasTouched(true);
  };

  const reset = () => {
    setWasTouched(false);
    setEnteredValue("");
  };

  const isValid = validatingFunction(enteredValue);

  const hasError = !isValid && wasTouched;

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
