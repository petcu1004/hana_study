import React from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
const App = () => {
  console.log("App 렌더링");
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };
  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <p>리액트 시작</p>
    </>
  );
};

export default App;
