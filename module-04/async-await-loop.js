const resolveAfter2Seconds = (x) => {
  return new Promise((resolve) => setTimeout(() => resolve(x), 2000));
};

const iterate = async (num) => {
  let sum = 0;
  for (let i = num; i--;) {
    sum += await resolveAfter2Seconds(10);
  }
  return sum;
};

console.time(`iterate`);
iterate(5).then((sum) => {
  console.log(sum);
  console.timeEnd(`iterate`);
}); // iterate: ~10s
