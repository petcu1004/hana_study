import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1004",
  database: "myapp",
});
app.use(cors);

app.listen(8500, () => {
  console.log(" 백앤드 연결 성공!! ");
});
app.use(express.json());

//GET 방식
app.get("/", (req, res) => {
  res.json("백엔드 부분입니다. 환영해요.");
});

app.get("/boards", (req, res) => {
  const sql = "select * from boards";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//app의 post 방식으로 insert하기
app.post("/boards", (req, res) => {
  const sql = "insert into boards(content, password) values (?)";

  //   const values = ["게시판 내용 입력2", "8910"];
  const values = [req.body.content, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/boards/:id", (req, res) => {
  const boardId = req.params.id;
  const q = "delete from boards where id = ?";

  db.query(q, [boardId], (err, data) => {
    if (err) return res.json(err);
    return res.json(" 삭제하였습니다.");
  });
});

app.put("/boards/:id", (req, res)=>{
   const boardId = req.params.id;
   const q="update boards set `content` = ?, `password` = ? where id = ?"

   const values = [
    req.body.content,
    req.body.password
   ]
   db.query(q, [...values, boardId], (err, data)=>{
    if(err) return res.json(err)
    return res.json("갱신 성공")
   })
});
​