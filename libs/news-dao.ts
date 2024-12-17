import { DUMMY_NEWS } from "@/libs/news-data";

export const getAllNews = () => DUMMY_NEWS;

export const getAllNewsBySlug = (slug: string) =>
  getAllNews().find((news) => news.slug === slug);

export const getLatestNews = () => DUMMY_NEWS.slice(0, 3);

export const getAvailableNewsYears = () =>
  getAllNews()
    .reduce((years, news) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [] as number[])
    .sort((a, b) => b - a);

export const getAvailableNewsMonths = (year: number) =>
  getAllNews()
    .reduce((months, news) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
      return months;
    }, [] as number[])
    .sort((a, b) => b - a);

export const getNewsForYear = (year: number) =>
  getAllNews().filter((news) => new Date(news.date).getFullYear() === year);

export const getNewsForYearAndMonth = (year: number, month: number) =>
  getAllNews().filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
