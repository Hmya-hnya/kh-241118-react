import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: white;
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
    text-align: center;
    cursor: pointer;
  }
  th {
    background-color: aliceblue;
  }
`;

const responseData = [
  {
    id: 1,
    name: "민지",
    addr: "서울시 신사동",
  },
  {
    id: 2,
    name: "하니",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 3,
    name: "해린",
    addr: "서울시 강남구 청담동",
  },
  {
    id: 4,
    name: "다니엘",
    addr: "서울시 강남구 삼성동",
  },
  {
    id: 5,
    name: "혜인",
    addr: "서울시 강남구 논현동",
  },
];
const TableMap = () => {
  const [memberData, setMemberData] = useState("");

  useEffect(() => {
    //이때 서버와 비동기 통신이 일어남
    setMemberData(responseData);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData &&
        memberData.map((member, index) => (
          <tr key={index} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
};
export default TableMap;
