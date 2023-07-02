const reverseString = require("./reverseString");

test("works with string of one letter", () => {
  expect(reverseString("s")).toBe("s");
});

test("works with string upper case letter", () => {
  expect(reverseString("S")).toBe("S");
});

test("works with words", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("works with words upper and lower case letter", () => {
  expect(reverseString("hellO")).toBe("Olleh");
});

test("works with multiple words", () => {
  expect(reverseString("hello i am tarak")).toBe("karat ma i olleh");
});

test("works with multiple words", () => {
  expect(reverseString("hello i am Tarak")).toBe("karaT ma i olleh");
});

test("works with number and text words", () => {
  expect(reverseString("hello i am tarak248")).toBe("842karat ma i olleh");
});

test("works with special character", () => {
  expect(reverseString("hello i am @tarak")).toBe("karat@ ma i olleh");
});
