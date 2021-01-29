// Print "Hello World"
// Every second
// And stop after 5 times
let counter = 0;

const interval = setInterval(() => {
  console.log('Hello World')
  counter += 1

  if (counter === 5) {
    console.log('Done')
    clearInterval(interval)
  }
}, 1000)

// After 5 times. Print "Done" and let Node exit.
