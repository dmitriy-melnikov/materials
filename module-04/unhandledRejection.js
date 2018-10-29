const asyncThrow = async () => {
  throw new Error(`I throwed error!`);
};

const asyncWork = async () => {
  asyncThrow();
};

asyncWork().catch((e) => console.error(e));
