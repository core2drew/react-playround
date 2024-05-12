import { useState } from "react";

export const UpdateMyFavoriteFruit = () => {
  const [fruit, setFruit] = useState("Mango 🥭");

  return (
    <div>
      <button type="button" onClick={() => setFruit("Apple 🍎")}>
        Update my favorite fruit
      </button>
      <p>My updated favorite fruit is {fruit}</p>
    </div>
  );
};
