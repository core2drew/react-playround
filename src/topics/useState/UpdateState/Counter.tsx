import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const onClickDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>Counter {count}</p>
      <button type="button" onClick={onClickIncrease}>
        Increase
      </button>
      <button type="button" onClick={onClickDecrease}>
        Decrease
      </button>
    </div>
  );
};
