import { getAllNewsBySlug } from "@/libs/news-dao";
import Image from "next/image";
import { notFound } from "next/navigation";

const InterceptedImagePage = async ({
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
    <>
      <div className="modal-backdrop"></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image src={`/images/news/${news.image}`} alt={news.title} fill />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
