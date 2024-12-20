import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/libs/news-dao";
import Link from "next/link";
import { Suspense } from "react";

const FilteredArchives = async ({
  year,
  month,
}: {
  year?: string;
  month?: string;
}) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(+year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(+year, +month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
};

const ArchivesFilter = async ({
  year,
  month,
}: {
  year?: string;
  month?: string;
}) => {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(+year)) ||
    (year && month && !(await getAvailableNewsMonths(+year)).includes(+month))
  ) {
    throw new Error("Invalid archive filter");
  }

  if (year && !month) {
    links = await getAvailableNewsMonths(+year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const ArchiveYearPage = async ({
  params,
}: {
  params: Promise<{ filter: string[] | undefined }>;
}) => {
  // Catch all route
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading archive filter...</p>}>
        <ArchivesFilter year={selectedYear} month={selectedMonth} />
      </Suspense>

      <Suspense fallback={<p>Loading archive details...</p>}>
        <FilteredArchives year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default ArchiveYearPage;
