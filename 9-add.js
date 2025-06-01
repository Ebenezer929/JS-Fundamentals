// Addition of integers
const num1 = parseInt(process.argv[2]); // Convert first argument to integer
const num2 = parseInt(process.argv[3]); // Convert second argument to integer

function add(a, b) {
  return a + b; // Function returns the sum of a and b
}
console.log(add(num1, num2));

