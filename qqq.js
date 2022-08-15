
function average(...nums) {
  let total = 0;
  if (nums.length === 0) {
    total = 0;
    return total;
  } else {
    for (const num of nums) {
      total += parseInt(num);
    }
      return total / nums.length;

  }
  
}

console.log(average());
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));

