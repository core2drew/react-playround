import { useState } from "react";

export const MyFavoriteFruit = () => {
  const [fruit] = useState("mango 🥭");

  return <p>My favorite fruit is {fruit}</p>;
};
