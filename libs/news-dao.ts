import { News } from "@/libs/news.types";
import sqlite from "better-sqlite3";

const db = sqlite("data.db");

const simulateSlowResponse = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const getAllNews = async () => {
  const news = (await db.prepare("SELECT * FROM news").all()) as News[];

  await simulateSlowResponse();

  return news;
};

export const getAllNewsBySlug = async (slug: string) => {
  const newsItem = db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as News;

  await simulateSlowResponse();

  return newsItem;
};

export const getLatestNews = async () => {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as News[];

  await simulateSlowResponse();

  return latestNews;
};

export const getAvailableNewsYears = async () => {
  const select = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[];

  const years = select.map((year) => +year.year);

  // await simulateSlowResponse();

  return years;
};

export const getAvailableNewsMonths = async (year: number) => {
  const select = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    // Compare year as string to avoid type coercion
    .all(`${year}`) as { month: string }[];

  const months = select.map((month) => +month.month);

  // await simulateSlowResponse();

  return months;
};

export const getNewsForYear = async (year: number) => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(`${year}`) as News[];

  await simulateSlowResponse();

  return news;
};

export const getNewsForYearAndMonth = async (year: number, month: number) => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    // Compare year and month as strings to avoid type coercion
    // Month should be 2 digits
    .all(`${year}`, `${month < 10 ? "0" : ""}${month}`) as News[];

  await simulateSlowResponse();

  return news;
};
