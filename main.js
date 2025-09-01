const sayHello = () => {
  const letters = ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D'];
  letters.forEach((letter, i) => {
    setTimeout(() => {
      process.stdout.write(letter);
      if (i === letters.length - 1) process.stdout.write('\n');
    }, 200 * i);
  });
};

sayHello();
