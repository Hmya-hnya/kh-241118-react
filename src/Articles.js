import Article from "./Article";

const data = [
  {
    title: "정치",
    description: "기사기사기사내용정치기사내용",
    date: "2024-11-13",
  },
  {
    title: "경제",
    description: "기사기사기사내용경제기사내용",
    date: "2024-11-14",
  },
  {
    title: "문화",
    description: "기사기사기사내용문화기사내용",
    date: "2024-11-15",
  },
  {
    title: "사회",
    description: "기사기사기사내용사회기사내용",
    date: "2024-11-16",
  },
];

const Articles = () => {
  return (
    <>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e) => <Article data={e} />)}
    </>
  );
};
export default Articles;
