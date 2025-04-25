import { useState } from "react";
import ButtonCounter from "./button-counter/button-counter";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <br />
      <ButtonCounter
        label="Increment"
        onClick={increment}
        size="lg"
        backgroundColor="blue"
      />
    </div>
  );
};

export default Counter;
