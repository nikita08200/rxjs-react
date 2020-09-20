export const getRandomArbitrary = (min, max) => {
  if (!min | !max) {
    return 0;
  }

  return Math.random() * (max - min) + min;
};

export const eachValueIsNumber = (obj) => {
  if (!obj || typeof obj !== "object") {
    return undefined;
  }

  return Object.values(obj).every((value) => value && !isNaN(value));
};
