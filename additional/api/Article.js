const axios = require("axios");

function customSort(a, b) {
  if (a.num_comments === b.num_comments) {
    if (a.title > b.title) return -1;
    else if (a.title < b.title) return 1;
    return 0;
  } else if (a.num_comments > b.num_comments) {
    return -1;
  } else {
    return 1;
  }
}

async function topArticles(limit) {
  const res = await axios.get(`https://jsonmock.hackerrank.com/api/articles`);
  const total_pages = res.data.total_pages;
  const promises = [];

  for (let i = 1; i <= total_pages; i++) {
    const articles = await axios.get(
      `https://jsonmock.hackerrank.com/api/articles?page=${i}`,
    );
    promises.push(articles.data.data);
  }

  const resolvePromisses = await Promise.all(promises);
  const articleArray = resolvePromisses.reduce(
    (acc, val) => acc.concat(val),
    [],
  );
  articleArray.sort((a, b) => customSort(a, b));

  console.log(articleArray.slice(0, limit).map((article) => article.title));

  return articleArray.slice(0, limit).map((article) => article.title);
}

function main() {
  topArticles(2);
}

main();
