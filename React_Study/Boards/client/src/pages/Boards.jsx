import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Boards = () => {
  const [boards, setBoards] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8500/boards/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchAllBoards = async () => {
      try {
        const res = await axios.get("http://localhost:8500/Boards");
        setBoards(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBoards();
  }, []);
  return (
    <>
      <h1> 게시판 </h1>
      <div className="boards">
        {boards.map((board) => (
          <div className="board" key={board.id}>
            <h4>
              {" "}
              {board.content} - {board.password}{" "}
            </h4>
            <button className="delete" onClick={() => handleDelete(board.id)}>
              삭제
            </button>
            <button className="update">
              <Link to={`/update/${board.id}`}> 수정</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add"> 게시판 삽입 </Link>
      </button>
    </>
  );
};

export default Boards;
