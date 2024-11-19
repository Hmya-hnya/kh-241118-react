import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const changeMsg = (e) => setMessage(e.target.value);
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onClick = () => {
    alert(`${userName} : ${message}`);
    setUserName(""); //입력 창 비우기
    setMessage("");
  };
  // Enter Key가 입력되면 onClick() 호출
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        onChange={onChangeUserName}
        value={userName}
      />
      <input
        type="text"
        placeholder="아무 단어나 입력하세요."
        onChange={changeMsg}
        // onChange={(e) => changeMsg(e)} 를 사용하여도 무관
        //좀 더 직관적이지만 onChange 이벤트는 매개변수가 자동으로 전달되기 때문에 불필요)
        value={message}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventPractice;
