// Creating the pipe() function:
const pipe = (...functions) => {
  return function (x) {
    functions.forEach(func => {
      x = func(x)
    })
    return x;
  }
}

// Creating functions to compose in pipeline:
const timesTen = (n) => n * 10;
const devideByTwo = (n) => n / 2;


// Calling pipe() with the functions we want to compose 
// and save the pipe to 'myBadPipe' variable:
const myBadPipe = pipe(timesTen, devideByTwo);

// We call our composed functions (our pipeline) by calling myBadPipe() with an initial value:
console.log(
  myBadPipe(6), // Expected output: 30
  myBadPipe(32), // Expected output: 160
  myBadPipe(95), // Expected output: 475
  myBadPipe(23), // Expected output: 115
  myBadPipe(0.6), // Expected output: 3
);
