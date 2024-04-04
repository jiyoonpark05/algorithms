function messageDeliverySystem({ timestamps, messages, k }) {
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
  return answer;
}

module.exports = messageDeliverySystem;
