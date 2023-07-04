import ReactDOM from "react-dom/client";
import App from "./App";

// const App = () => {
//   return (
//     <>
//       <h1>안녕하세요</h1>
//       <p>잘지내시죠!</p>
//     </>
//   );
// };

// export default App;

//17버전
// ReactDOM.render(<App />, document.getElementById("root"));

//18버전
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
