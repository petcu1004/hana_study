import React from "react";
import Component1 from "./Component1";
import { ColorMessage } from "./components/ColoredMessage";
import SchoolMessage from "./components/SchoolMessage";

const App1 = () => {
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px",
  // };
  const onClickButton = () => {
    alert("버튼이 눌렀습니다.");
  };
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "20px",
  // };

  return (
    <div>
      {console.log("자바스크립트 문법 넣기")}
      <h1 style={{ color: "red" }}>Hello</h1>
      {/* <p style={contentStyle}>React~</p> */}
      <button onClick={onClickButton}>버튼</button>

      <ColorMessage
        color="blue"
        message="잘 지내시나요"
        name="홍길동"
        age="10"
      ></ColorMessage>
      <SchoolMessage name="이순신" school="서울대">
        태그 사이의 글자
      </SchoolMessage>

      {/* <Component1></Component1> */}
    </div>
  );
};

export default App1;
