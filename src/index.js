module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];

  let output = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i] = matrix[i].reverse();
    }
    output = output.concat(matrix[i]);
  }

  return output;
}
