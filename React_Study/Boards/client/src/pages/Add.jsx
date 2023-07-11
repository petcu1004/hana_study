import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [board, setBoard] = useState({
    content: "",
    password: "",
  });

  const handleChange = (e) => {
    setBoard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(board);

  //handleClick로 버튼 클릭시 데이터를 입력하도록 하고,
  // navigate으로 원래 페이지로 이동하도록 한다.
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8500/boards", board);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <h1> 게시판 입력하기 </h1>
      <input type="text" placeholder="content" name="content"></input>
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
      ></input>
      <button onClick={handleClick}>입력</button>
      <Link to="/"> 게시판 전체 내용 </Link>
    </div>
  );
};

export default Add;
