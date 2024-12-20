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

const ArchiveYearPage = async ({
  params,
}: {
  params: Promise<{ filter: string[] | undefined }>;
}) => {
  // Catch all route
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (selectedYear && !selectedMonth) {
    links = await getAvailableNewsMonths(+selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
  }

  if (
    (selectedYear && !availableYears.includes(+selectedYear)) ||
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

      <Suspense fallback={<p>Loading archive details...</p>}>
        <FilteredArchives year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default ArchiveYearPage;
