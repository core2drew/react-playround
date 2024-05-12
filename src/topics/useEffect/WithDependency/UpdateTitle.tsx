import { useEffect, useState } from "react";

export const UpdateTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Click me
      </button>
    </div>
  );
};
