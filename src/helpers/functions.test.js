import { getRandomArbitrary, eachValueIsNumber } from "./functions";

it("getRandomArbitrary", () => {
  expect(getRandomArbitrary()).toBe(0);
  expect(getRandomArbitrary(1)).toBe(0);
  expect(getRandomArbitrary(null, 2)).toBe(0);
  expect(getRandomArbitrary("1", 2)).not.toBeNaN();
  expect(getRandomArbitrary(1, "2")).not.toBeNaN();
  expect(getRandomArbitrary("1", "2")).not.toBeNaN();
  expect(getRandomArbitrary(1, 2)).not.toBeGreaterThan(2);
  expect(getRandomArbitrary(1, 2)).not.toBeLessThan(1);
});

it("eachValueIsNumber", () => {
  expect(eachValueIsNumber()).toBe(undefined);
  expect(eachValueIsNumber("a")).toBe(undefined);
  expect(eachValueIsNumber(null)).toBe(undefined);
  expect(
    eachValueIsNumber({
      value1: "string",
      value2: 2,
    })
  ).toBe(false);
  expect(
    eachValueIsNumber({
      value1: 1,
      value2: 2,
    })
  ).toBe(true);
});
