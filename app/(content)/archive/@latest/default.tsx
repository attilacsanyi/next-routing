import NewsList from "@/components/news-list";
import { getLatestNews } from "@/libs/news-dao";

const LatestNewsDefaultPage = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNewsDefaultPage;
