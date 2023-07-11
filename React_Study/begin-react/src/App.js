import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    // setUsers(users.concat(user));
    setUsers((users) => users.concat(user));

    //추가하면 input 태그는 빈칸으로 초기화
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(
    (id) => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter((user) => user.id !== id)); //선택한 객체가 아닌 것들만 가져와서 새로운 배열로 만들면 삭제된걸로 보임
    },
    [users]
  );

  const onToggle = useCallback((id) => {
    setUsers(
      //deps에 안넣고, 함수형 업데이트 방식으로 변경 그리하여 []에 users를 안넣어도 됨. 그리하여 특정 항목을 수정하게 될 떄, 해당 항목만 리렌더링 된다.
      (users) =>
        //배열의 불변성을 유지하면서 배열을 업데이트 할 때에도 map 함수를 사용
        // map은 "주어진 배열의 값들을 오름차순으로 접근해 새로운 값을 정의하고 신규 배열을 만들어 반환한다"
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
    );
  }, []);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}
export default App;
