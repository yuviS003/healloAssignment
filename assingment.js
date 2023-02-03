// Convert input to output using javascript
// Input = { a: 1, b: 2, c: 3 }
// Output = [{ a: 1 }, { b: 2 }, { c: 3 }]
const assignment1 = (input) => {
  return Object.entries(input).map(([key, value]) => ({ [key]: value }));
};
console.log(assignment1({ a: 1, b: 2, c: 3 }));

// Convert input to output using javascript
// Input = [{ a: 1 }, { b: 2 }, { c: 3 }]
// Output = { a: 1, b: 2, c: 3 }
const assignment2 = (input) => {
  return input.reduce((acc, obj) => {
    const [key, value] = Object.entries(obj)[0];
    acc[key] = value;
    return acc;
  }, {});
};
console.log(assignment2([{ a: 1 }, { b: 2 }, { c: 3 }]));

const assignment3 = (n) => {
  return (n * (n - 1)) / 2;
};
console.log(assignment3(5));
