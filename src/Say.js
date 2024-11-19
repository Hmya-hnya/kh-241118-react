import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  border: 2px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  .enterClick {
    background-color: royalblue;
    color: white;
  }
  .leaveClick {
    background-color: rosybrown;
    color: white;
  }
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 70px;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: white;
  font-size: 0.5em;
  font-weight: bold;
  color: ${(props) => props.color || "black"};
  transition: all 0.3s ease;
  /* hover 효과 넣는 방법 */
  &:hover {
    color: white;
    background-color: ${(props) => props.color || "black"};
    cursor: pointer;
    border-color: white;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const Say = () => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("black");
  const onClickMessage = (msg) => setMessage(msg);

  return (
    <Container>
      <ButtonContainer>
        <Button
          className="enterClick"
          onClick={() => onClickMessage("안녕하세요.")}
        >
          입장
        </Button>
        <Button
          className="leaveClick"
          onClick={() => onClickMessage("안녕히 가세요.")}
        >
          퇴장
        </Button>
      </ButtonContainer>
      <h2 style={{ color: value }}>{message}</h2>
      {/* 객체를 만들어주기 위해 중괄호가 이중으로 들어가야 함? */}
      {/* 익명의 함수가 없으면 등록, 있으면 호출이기 때문에 렌더링이 되기 위해서는 익명의 함수가 필요...? */}
      <ButtonContainer>
        <Button color="red" onClick={() => setValue("red")}>
          빨간색
        </Button>
        <Button color="green" onClick={() => setValue("green")}>
          초록색
        </Button>
        <Button color="blue" onClick={() => setValue("blue")}>
          파란색
        </Button>
      </ButtonContainer>
    </Container>
  );
};
export default Say;
