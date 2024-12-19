import { getAllNewsBySlug } from "@/libs/news-dao";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const news = await getAllNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <div className="news-article-header-image">
          <Link href={`/news/${news.slug}/image`}>
            <Image src={`/images/news/${news.image}`} alt={news.title} fill />
          </Link>
        </div>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};

export default NewsDetailPage;
