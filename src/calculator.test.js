const { add, subtract, multiply, divide } = require("./calculator");

test("adds two number", () => {
  expect(add(2, 3)).toBe(5);
});

test("works with zero", () => {
  expect(add(2, 0)).toBe(2);
});

test("works with zero", () => {
  expect(add(0, 0)).toBe(0);
});

test("works with zero", () => {
  expect(add(0, 2)).toBe(2);
});

test("works with negative number", () => {
  expect(add(2, -10)).toBe(-8);
});

test("works with zero", () => {
  expect(add(-2, -6)).toBe(-8);
});

test("subtract two numbers", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("works with smaller number", () => {
  expect(subtract(3, 12)).toBe(-9);
});

test("works with zero", () => {
  expect(subtract(0, 2)).toBe(-2);
});

test("works with two negative numbers", () => {
  expect(subtract(-3, -2)).toBe(-1);
});

test("multiply two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
});

test("works with zero", () => {
  expect(multiply(3, 0)).toBe(0);
});

test("works with negative number", () => {
  expect(multiply(3, -2)).toBe(-6);
});

test("works with both negative numbers", () => {
  expect(multiply(-3, -2)).toBe(6);
});

test("divide two numbers", () => {
  expect(divide(3, 2)).toBe(1.5);
});

test("divide two numbers", () => {
  expect(divide(5, 12)).toBeCloseTo(0.415);
});

test("divide bye zero error", () => {
  expect(divide(3, 0)).toBe("Divided by zero");
});

test("divide ", () => {
  expect(divide(0, 2)).toBe(0);
});
