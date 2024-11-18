import "./App.css";
import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponent";

function App() {
  return (
    <>
      <MyComponent name="안유진" age={21} />
      <BoxComponent>첫 번째 박스 입니다.</BoxComponent>
      <BoxComponent>두 번째 박스 입니다.</BoxComponent>
    </>
  );
}

export default App;
