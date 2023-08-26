// Creating a pipe() function:
const pipe = (...fucntions) => initVal => fucntions.reduce((prevVal, func) => func(prevVal), initVal)

// Creating functions to compose in pipeline:
const timesTen = (n) => n * 10;
const devideByTwo = (n) => n / 2;

// Calling pipe() with the functions we want to compose and save the 
// pipe to 'myPipe' variable:
const myPipe = pipe(timesTen, devideByTwo);

// We call our composed functions (our pipeline) by calling myPipe() with an initial value:
console.log(
  myPipe(6), // Expected output: 30
  myPipe(32), // Expected output: 160
  myPipe(95), // Expected output: 475
  myPipe(23), // Expected output: 115
  myPipe(0.6), // Expected output: 3
);
