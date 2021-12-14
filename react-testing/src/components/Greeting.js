import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const clickHandler = (event) => {
    setChangedText(true);
  }
  
  return (
    <div>
      <h1>Hello this is a Greeting</h1>
      {!changedText && <p>It's good to see you</p>}
      {changedText && <p>You did something!</p>}
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default Greeting;
