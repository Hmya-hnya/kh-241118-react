import logo from "./logo.svg";
import "./App.css";
// [JSX 문법 이해하기]
// JSX에 표현식 포함하기: {변수나 간단한 연산식}
// 감싸인 요소로 표현하기: 컴포넌트를 반환 시 하나의 태그이어야 함.

function App() {
  const name = "곰돌이사육사";
  return (
    <>
      <h1>{name}의 리액트 공부를 시작 하겠습니다.</h1>
      <p>리액트는 JSX문법을 사용하고 리턴문 내에서 작성 합니다.</p>
    </>
  );
}

export default App;
