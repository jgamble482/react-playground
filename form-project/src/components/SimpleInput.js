import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: nameInput,
    isValid: nameIsValid,
    hasErrror: nameHasError,
    handleValueChange: nameChangeHandler,
    handleTouch: nameTouchHandler,
    reset: clearName,
  } = useInput((value) => value.trim() !== "");
  useEffect(() => {
    if (nameIsValid) {
      setFormIsValid(true);
    }
    setFormIsValid(false);
  }, [nameIsValid]);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }

    console.log(nameInput);
    clearName();
  };
  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameTouchHandler}
          onChange={nameChangeHandler}
          value={nameInput}
          type="text"
          id="name"
        />
        {nameHasError && <p className="error-text">Name Must Not Be Empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
