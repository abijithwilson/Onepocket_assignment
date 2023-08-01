function arraySum(numberArray) {
  if (!Array.isArray(numberArray)) {
    throw new Error("Input must be an array of integers.");
  }

  let sum = 0;
  for (const number of numberArray) {
    if (typeof number !== "number" || !Number.isInteger(number)) {
      throw new Error("All elements in the array must be integers.");
    }
    sum += number;
  }

  return sum;
}

module.exports = { arraySum };
