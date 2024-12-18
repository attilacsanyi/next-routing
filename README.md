# Next Routing

![Next.js 15](https://img.shields.io/badge/-Next.js%2015-000000?style=flat-square&logo=next.js)
![React 19](https://img.shields.io/badge/-React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

A comprehensive demonstration of Next.js 15's **advanced routing capabilities** and patterns based on [Maximilian Schwarzmüller's Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux).

## Next Routing Demo

### Route Groups

- Content Routes (`(content)`)
  - `/news` - Main news listing
  - `/archive` - News archive
- Landing Routes (`(landing)`)
  - `/` - Homepage

### Parallel Routes

- Archive Page with Parallel Routes
  - `@archive` - Filter component
  - `@latest` - Latest news section
    Example: `/archive/2024/3`

### Intercepting Routes

- Modal Image View
  - `(.)/image` - Intercepts full image view
    Example: `/news/hiking/image`

### Dynamic Routes

- News Detail Pages
  - `/news/[slug]` - Individual news articles
    Example: `/news/will-ai-replace-humans`

### Catch-all Routes

- Archive Filter
  - `/archive/[[...filter]]` - Handles year/month filtering
    Example: `/archive/2024` or `/archive/2024/3`

### Special Files

- `layout.tsx` - Shared layouts
- `not-found.tsx` - Custom 404 pages
- `error.tsx` - Error boundaries
- `default.tsx` - Default UI for parallel routes

## Screenshots

Home Page

<img src="public/readme/next-routing-home.png" width="500" alt="Home Page" />

Archive Page

<img src="public/readme/next-routing-archive.png" width="500" alt="Archive Page" />

News Page

<img src="public/readme/next-routing-news.png" width="500" alt="News Page" />

News Details Page

<img src="public/readme/next-routing-news-details.png" width="500" alt="News Details Page" />
