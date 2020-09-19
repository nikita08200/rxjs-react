export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const eachValueIsNumber = (obj) => {
  return Object.values(obj).every((value) => value && !isNaN(value));
};
