//컴포넌트: 리액트에서 UI를 수정하는 독립적인 모듈
// UI와 상태(State)를 가짐
// 대문자로 시작해야 함, 소문자로 시작 할 경우 html 태그로 판단됨
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달 할 때는 props로 전달해야 함
// props는 키워드가 아님. (문구를 변경하여도 무관함. ex: props -> tt)
// 구조분해 또는 비구조화 할당 (중괄호 {}를 삽입해야 함)
const WelcomeProps = (props) => {
  const { name, job, addr, isAdult, info } = props;
  return (
    <>
      <h1>안녕하세요. {name}님</h1>
      <p>직업: {job}</p>
      <p>주소: {addr}</p>
      {isAdult ? <p>성인 입니다. </p> : <p>미성년자 입니다. </p>}
      <p>일자: {info.date}</p>
      <p>제품: {info.product}</p>
    </>
  );
};
export default WelcomeProps;
