import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const nameIsValid = nameInput.trim() !== "";
  const nameInputInvalid = !nameIsValid && nameInputTouched;
  useEffect(() => {
    if(nameIsValid) {
      setFormIsValid(true);
    }
    setFormIsValid(false);
  }, [nameIsValid])
  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);

  };

  const inputBlurHandler = (event) => {
    setNameInputTouched(true);
  };
  const handleFormSubmission = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    if(!nameIsValid) {
      return;
    }

    console.log(nameInput);
    setNameInput("");
    setNameInputTouched(false);
  };
  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={inputBlurHandler}
          onChange={handleNameInputChange}
          value={nameInput}
          type="text"
          id="name"
        />
        {nameInputInvalid && (
          <p className="error-text">Name Must Not Be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
