import React, { useState, useReducer, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      isValid: state.value.includes("@"),
    };
  }
  return {};
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.trim().length >= 5,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      isValid: state.value.trim().length >= 5,
    };
  }
};

const Login = (props) => {
  /*   const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(); */
  /*   const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => clearTimeout(identifier);
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailIsValid}
          label="Email"
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          isValid={passwordIsValid}
          label="Password"
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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
