import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/libs/news-dao";

const ArchiveYearPage = async ({
  params,
}: {
  params: Promise<{ year: string }>;
}) => {
  const { year } = await params;
  const news = getNewsForYear(+year);

  return <NewsList news={news} />;
};

export default ArchiveYearPage;
