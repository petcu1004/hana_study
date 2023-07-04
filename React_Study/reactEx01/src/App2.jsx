import { useState, useEffect } from "react";

export const App2 = () => {
  //[변수, 함수]
  const [data, setData] = useState(10);
  const [passOrFail, setPassOrFail] = useState("불합격"); //디폴트 값

  const [name, setName] = useState();
  const [nickname, setNickName] = useState();
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []); // []배열안에 들어있는 변수가 변할때만 렌더링 됨.

  useEffect(() => {
    console.log("랜더링, 재랜더링 되고 있습니다");
    console.log({ name, nickname });
  }); //빈배열을 주면 딱 한번만 수행되고

  console.log("렌더링...");
  const onClickButton = () => {
    setData(data + 1);
  };
  const onClickButton2 = () => {
    setData(data - 1);
  };
  const onClickButton3 = () => {
    setPassOrFail("축하드립니다");
  };

  const onClickButton4 = () => {
    setPassOrFail("다음 기회에..");
  };
  return (
    <>
      <button onClick={onClickButton}>useState 버튼+1</button>
      <button onClick={onClickButton2}>useState 버튼-1</button>
      <button onClick={onClickButton3}>합격버튼</button>
      <button onClick={onClickButton4}>불합격버튼</button>
      <p>{data}</p>
      <p>{passOrFail}</p>
      <input value={name} onChange={onChangeName}></input>
      <br></br>
      <input value={nickname} onChange={onChangeNickName}></input>
      <p>{name}</p>
      <p>{nickname}</p>
    </>
  );
};

export default App2;
