

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameisValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameisValid && !emailIsValid) {
      return;
    }

    console.log(name);
    console.log(enteredEmail);

    nameReset();
    emailReset();
  };

  const formClass =
    nameHasError && emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Entered valid name</p>}

        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text"> Enter valid email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
