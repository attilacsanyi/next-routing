import NewsList from "@/components/news-list";
import { getAllNews } from "@/libs/news-dao";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
