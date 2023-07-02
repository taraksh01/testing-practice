const calculator = require("./calculator");

test("adds two number", () => {
  expects(add(2, 3)).toBe(5);
});

test("works with zero", () => {
  expects(add(2, 0)).toBe(2);
});

test("works with zero", () => {
  expects(add(0, 0)).toBe(0);
});

test("works with zero", () => {
  expects(add(0, 2)).toBe(2);
});

test("works with negative number", () => {
  expects(add(2, -10)).toBe(-8);
});

test("works with zero", () => {
  expects(add(-2, -6)).toBe(-8);
});

test("subtract two numbers", () => {
  expects(subtract(3, 2)).toBe(1);
});

test("works with smaller number", () => {
  expects(subtract(3, 12)).toBe(-9);
});

test("works with zero", () => {
  expects(subtract(0, 2)).toBe(-2);
});

test("works with two negative numbers", () => {
  expects(subtract(-3, -2)).toBe(-5);
});

test("multiply two numbers", () => {
  expects(multiply(3, 2)).toBe(6);
});

test("works with zero", () => {
  expects(multiply(3, 0)).toBe(0);
});

test("works with negative number", () => {
  expects(multiply(3, -2)).toBe(-6);
});

test("works with both negative numbers", () => {
  expects(multiply(-3, -2)).toBe(6);
});

test("divide two numbers", () => {
  expects(divide(3, 2)).toBe(1.5);
});

test("divide two numbers", () => {
  expects(divide(5, 12)).toBe(0);
});

test("divide bye zero error", () => {
  expects(divide(3, 0)).toBe("Divied by zero");
});

test("divide ", () => {
  expects(divide(0, 2)).toBe(0);
});
