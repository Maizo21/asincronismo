const promise = new Promise((resolve, reject) => {});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve("You have enough cows!");
  } else {
    reject("You have too few cows!");
  }
});

countCows
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("Finally!");
  });
