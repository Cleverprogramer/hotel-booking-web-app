// 🔃 this function is loading the data and waiting for it to be loaded

export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
