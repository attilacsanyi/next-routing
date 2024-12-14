import Link from "next/link";

const NewsPage = () => {
  const news = [
    { id: "1", title: "First News" },
    { id: "2", title: "Second News" },
  ];

  return (
    <>
      <h1>News Page</h1>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
