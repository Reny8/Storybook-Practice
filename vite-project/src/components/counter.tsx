import { useState } from "react";
import ButtonCounter from "./button-counter/button-counter";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-row items-center justify-between gap-4 mt-4">
      <div className="text-2xl font-bold flex-1 text-center">{count}</div>
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
