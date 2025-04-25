import { useState } from "react";
import ButtonCounter from "../button-counter/button-counter";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-row items-center justify-between gap-4 mt-4">
      <ButtonCounter
        label="-"
        onClick={decrement}
        size="lg"
        backgroundColor="darkred"
      />
      <div className="text-2xl font-bold flex-1 text-center">{count}</div>
      <ButtonCounter
        label="+"
        onClick={increment}
        size="lg"
        backgroundColor="darkblue"
      />
    </div>
  );
};

export default Counter;
