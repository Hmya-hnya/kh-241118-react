import { useEffect, useState } from "react";

const TodoList = () => {
  const [names, setNames] = useState(() => {
    // Try to retrieve names from localStorage, or use the initial array if not present
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          { id: 1, text: "HTML 연습" },
          { id: 2, text: "CSS 복습" },
          { id: 3, text: "자바스트립트 이해" },
          { id: 4, text: "리액트프로젝트" },
        ];
  });

  // 내용 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
    //JSON으로 변경시 문자열로 변경되어 들어옴 역직렬화?
  }, [names]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value); // e : event
  const onClick = () => {
    // const nextNames = names.concat({
    //   // 불변성의 원칙을 지키기 위해, 새로운 배열을 만들기 위해 concat 사용
    //   id: nextId,
    //   text: inputText,
    // });
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // id를 증가시킴
    setNames(nextNames); // todo list 갱신
    setInputText(""); // 입력창 초기화
    // 이렇게 하면 렌더링이 연타로 3번 일어나는거임.
    // 3번정도는 괜찮은데 나중에 너무 많이 useState 때리면 렌더링이 이상하게 일어남
  };
  const onRemove = (id) => {
    // 조건에 맞는 요소만 반환 받아서 새로운 배열 생성
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names &&
          names.map((name) => (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
              {name.text}
            </li>
          ))}
      </ul>
    </>
  );
};
export default TodoList;
