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
/*
 * Complete the 'getWinnerTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING competition
 *  2. INTEGER year
 */

async function getGoalCount(competition, year, winner, hostTeam) {
  const res = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&${hostTeam}=${winner}`,
  );
  const totalPage = res.data.total_pages;
  const promises = [];
  for (let i = 1; i <= totalPage; i++) {
    promises.push(
      axios.get(
        `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&${hostTeam}=${winner}&page=${i}`,
      ),
    );
  }

  const resolvedPromises = await Promise.all(promises);
  let result = 0;
  for (let i of resolvedPromises) {
    const current = i.data.data;
    console.log(current);
    const count = current.reduce((pre, cur) => {
      pre += parseInt(cur[hostTeam + "goals"]);
      return pre;
    }, 0);
    result += count;
  }
  return result;
}

async function getWinnerTotalGoals(competition, year) {
  const res = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`,
  );
  const data = res.data.data;
  const winner = data[0].winner;

  const team1Score = await getGoalCount(competition, year, winner, "team1");
  const team2Score = await getGoalCount(competition, year, winner, "team2");

  return team1Score + team2Score;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const competition = readLine();

  const year = parseInt(readLine().trim(), 10);

  const result = await getWinnerTotalGoals(competition, year);

  ws.write(result + "\n");

  ws.end();
}
