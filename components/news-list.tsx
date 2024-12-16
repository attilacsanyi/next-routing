import { News } from "@/libs/news.types";
import Image from "next/image";
import Link from "next/link";

const NewsList = ({ news }: { news: News[] }) => {
  return (
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
  );
};

export default NewsList;
