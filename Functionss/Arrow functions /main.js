const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
};

console.log(getRandomNumber());