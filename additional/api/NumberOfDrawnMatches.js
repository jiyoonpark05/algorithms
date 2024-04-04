"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const axios = require("axios");
const apiUrl = "https://jsonmock.hackerrank.com/api/football_matches?";

/*
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */

async function getCount(year, i) {
  let cnt = 0;
  const res = await axios.get(apiUrl + "year=" + year + "&page=" + i);
  const result = res.data;
  const data = result.data;

  if (Array.isArray(data)) {
    data.forEach((el) => {
      if (el.team1goals === el.team2goals) {
        cnt++;
      }
    });
  }

  return cnt;
}

async function getNumDraws(year) {
  let cnt = 0;
  let res = await axios.get(apiUrl + "year=" + year);
  let result = res.data;
  let total_pages = result.total_pages || 1;
  const promisses = [];

  for (let i = 1; i <= total_pages; i++) {
    promisses.push(getCount(year, i));
  }

  const results = await Promise.all(promisses);
  results.forEach((i) => (cnt += i));

  return cnt;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = await getNumDraws(year);

  ws.write(result + "\n");

  ws.end();
}
