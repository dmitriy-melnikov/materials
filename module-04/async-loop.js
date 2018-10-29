const resolveAfter2Seconds = (x) => {
  return new Promise((resolve) => setTimeout(() => resolve(x), 2000));
};

const iterate = async (num) => {
  const queue = [];
  for (let i = num; i--;) {
    queue.push(resolveAfter2Seconds(10));
  }
  return Promise.all(queue).then((values) => values.reduce((prev, current) => prev + current, 0));
};

console.time(`iterate`);
iterate(5).then((sum) => {
  console.log(sum);
  console.timeEnd(`iterate`);
}); // iterate: ~2s
