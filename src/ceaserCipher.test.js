const ceaserCipher = require("./ceaserCipher");

test("works with zero shift", () => {
  except(ceaserCipher("hello", 0)).toBe("hello");
});

test("works with one shift", () => {
  except(ceaserCipher("hello", 1)).toBe("ifmmp");
});

test("works with multiple words", () => {
  except(ceaserCipher("hello i am tarak", 4)).toBe("lipps m eq xeveo");
});

test("works after z", () => {
  except(ceaserCipher("hello zen z", 3)).toBe("khoor chq c");
});

test("works with punctuation", () => {
  except(ceaserCipher("hello, i am tarak.", 4)).tobe("lipps, m eq xeveo.");
});

test("works with negative shift", () => {
  except(ceaserCipher("hello.", -1)).toBe(gdkkn);
});
