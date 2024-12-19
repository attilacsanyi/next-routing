import { getAllNewsBySlug } from "@/libs/news-dao";
import Image from "next/image";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const news = await getAllNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${news.image}`} alt={news.title} fill />
    </div>
  );
};

export default ImagePage;
