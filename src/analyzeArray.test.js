const analyzeArray = require("./analyzeArray");

test("Works with normal array", () => {
  expect([1, 8, 3, 4, 2, 6]).toEqual({ average: 4, min: 1, max: 8, lenght: 6 });
});

test("Works with normal array", () => {
  expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).toEqual({
    average: 4.5,
    min: 0,
    max: 9,
    lenght: 10,
  });
});

test("Works with normal array", () => {
  expect([1, 8, 53, 41, 20, 6]).toEqual({
    average: 21.5,
    min: 1,
    max: 53,
    lenght: 6,
  });
});

test("Works with negative array", () => {
  expect([1, 8, 3, 4, -2, -6]).toEqual({
    average: 1.5,
    min: -6,
    max: 8,
    lenght: 6,
  });
});
