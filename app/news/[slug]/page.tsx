import { getAllNewsBySlug } from "@/libs/news-dao";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const news = getAllNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <div className="news-article-header-image">
          <Image src={`/images/news/${news.image}`} alt={news.title} fill />
        </div>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};

export default NewsDetailPage;
