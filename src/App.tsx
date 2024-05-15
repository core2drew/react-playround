import { useEffect, useState } from "react";
import "./App.css";

import { UpdateTitle } from "./topics/useEffect/WithDependency/UpdateTitle";
import { MyFavoriteFruit } from "./topics/useState/ReadState/MyFavoriteFruit";
import { Counter } from "./topics/useState/UpdateState/Counter";
import { MyBio } from "./topics/useState/UpdateState/MyBio";
import { UpdateMyFavoriteFruit } from "./topics/useState/UpdateState/UpdateMyFavoriteFruit";

function App() {
  return (
    <>
      {/* useState topics */}
      {/* <MyFavoriteFruit /> */}
      {/* <Counter /> */}
      {/* <UpdateMyFavoriteFruit /> */}
      {/* <MyBio /> */}

      {/* useEffect topics */}
      {/* <UpdateTitle /> */}
    </>
  );
}

export default App;
