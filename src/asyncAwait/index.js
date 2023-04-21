const functionAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const anotherFunction = async () => {
  const something = await functionAsync();
  console.log(something);
};
