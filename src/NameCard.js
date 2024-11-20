import { useState } from "react";

const NameCardPrn = ({ nameCard }) => {
  return (
    <>
      <h3>명함 정보</h3>
      <p>이름: {nameCard.name}</p>
      <p>직책: {nameCard.position}</p>
      <p>회사: {nameCard.company}</p>
      <p>주소: {nameCard.addr}</p>
      <p>메일: {nameCard.email}</p>
      <p>전화: {nameCard.phone}</p>
    </>
  );
};

const NameCard = () => {
  const [nameCard, setNameCard] = useState({
    name: "",
    position: "",
    company: "",
    addr: "",
    email: "",
    phone: "",
  });
  const [submit, setSubmit] = useState(false);
  const onChange = (key, value) => {
    //계산된 속성명: ES6에서 추가, [ ] 안에 표현식을 넣으면 됨.
    setNameCard({ ...nameCard, [key]: value });
  };
  const onSubmit = () => {
    setSubmit(true);
  };
  return (
    <>
      <h3>정보 기입</h3>
      <input
        type="text"
        placeholder="이름"
        value={nameCard.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="직책"
        value={nameCard.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사"
        value={nameCard.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="주소"
        value={nameCard.addr}
        onChange={(e) => onChange("addr", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="메일"
        value={nameCard.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="전화"
        value={nameCard.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <br />
      <button onClick={onSubmit}>제출</button>
      {submit && <NameCardPrn nameCard={nameCard} />}
    </>
  );
};
export default NameCard;
