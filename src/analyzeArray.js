const analyzeArray = (array) => {
  let min = Infinity;
  let max = -Infinity;
  let average = -Infinity;
  let sum = 0;
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    sum += array[i];
  }

  average = Math.round((sum / len) * 100) / 100;
  console.log(sum, average);
  return { average: average, min: min, max: max, length: len };
};

module.exports = analyzeArray;
