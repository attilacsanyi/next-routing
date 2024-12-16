import NewsList from "@/components/news-list";
import { getAllNews } from "@/libs/news-dao";

const NewsPage = () => {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
