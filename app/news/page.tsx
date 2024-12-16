import { getAllNews } from "@/libs/news-dao";
import Image from "next/image";
import Link from "next/link";

const NewsPage = () => {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image
                src={`/images/news/${news.image}`}
                alt={news.title}
                width={300}
                height={200}
              />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
