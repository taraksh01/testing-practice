const captalize = require("./capitalize");

test("works with string in lower case", () => {
  expect(captalize("tarak")).toBe("Tarak");
});

test("works with string of length 1", () => {
  expect(captalize("s")).toBe("S");
});

test("works with string of length 1", () => {
  expect(captalize("S")).toBe("S");
});

test("works with string with upper case", () => {
  expect(captalize("s")).toBe("S");
});

test("works with string with upper and lower case", () => {
  expect(captalize("hello I am TaRak")).toBe("Hello i am tarak");
});
