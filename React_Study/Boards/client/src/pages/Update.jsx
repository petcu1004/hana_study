import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Update = () => {
  const [board, setBoard] = useState({
    content: "",
    password: "",
  });

  const handleChange = (e) => {
    setBoard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const location = useLocation();

  const boardId = location.pathname.split("/")[2];

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8500/boards/${boardId}`, board);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(board);

  return (
    <div className="form">
      <h1>수정</h1>
      <input
        type="text"
        placeholder="content"
        onChange={handleChange}
        name="content"
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
      ></input>
      <button onClick={handleClick}>수정</button>
    </div>
  );
};

export default Update;
