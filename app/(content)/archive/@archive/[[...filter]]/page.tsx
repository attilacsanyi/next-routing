import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/libs/news-dao";
import { News } from "@/libs/news.types";
import Link from "next/link";

const ArchiveYearPage = async ({
  params,
}: {
  params: Promise<{ filter: string[] | undefined }>;
}) => {
  // Catch all route
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news: News[] | undefined;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(+selectedYear);
    links = await getAvailableNewsMonths(+selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear &&
      !(await getAvailableNewsYears()).includes(+selectedYear)) ||
    (selectedYear &&
      selectedMonth &&
      !(await getAvailableNewsMonths(+selectedYear)).includes(+selectedMonth))
  ) {
    throw new Error("Invalid archive filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {newsContent}
    </>
  );
};

export default ArchiveYearPage;
