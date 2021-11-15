import { useState } from "react";

const useInput = (validateFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFn(enteredValue);
  const hasErrror = !isValid && isTouched;

  const handleValueChange = (event) => {
    setEnteredValue(event.target.value);
  };
  const handleTouch = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid,
    hasErrror,
    handleValueChange,
    handleTouch,
    reset
  };
};
export default useInput;
