function solution({ timestamps, messages, k }) {
  const answer = [];
  const prevArrival = new Map();

  for (let i = 0; i < timestamps.length; i++) {
    const arrivalTime = timestamps[i];
    const text = messages[i];
    let flag = !prevArrival.has(text);

    if (prevArrival.has(text)) {
      const duration = arrivalTime - prevArrival.get(text);
      flag = duration > k;
    }

    prevArrival.set(text, arrivalTime);
    answer.push(flag.toString());
  }
  console.log(answer);
  return answer;
}

function main() {
  const testCase = [
    {
      timestamps: [1, 4, 5, 10, 11, 14],
      messages: ["hello", "bye", "bye", "hello", "bye", "hello"],
      k: 5,
    },
  ];

  solution(testCase[0]);
}

main();
