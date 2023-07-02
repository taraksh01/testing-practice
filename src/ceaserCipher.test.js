const ceaserCipher = require("./ceaserCipher");

test("works with zero shift", () => {
  expect(ceaserCipher("hello", 0)).toBe("hello");
});

test("works with one shift", () => {
  expect(ceaserCipher("hello", 1)).toBe("ifmmp");
});

test("works with multiple words", () => {
  expect(ceaserCipher("hello i am tarak", 4)).toBe("lipps m eq xeveo");
});

test("works after z", () => {
  expect(ceaserCipher("hello zen z", 3)).toBe("khoor chq c");
});

test("works with punctuation", () => {
  expect(ceaserCipher("hello, i am tarak.", 4)).toBe("lipps, m eq xeveo.");
});

test("works with negative shift", () => {
  expect(ceaserCipher("hello.", -1)).toBe("gdkkn.");
});
