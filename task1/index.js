const { log } = console;

const calculate = (dotsToCalculate) => {
  const splitter = dotsToCalculate.split(" ");
  const leftDots = splitter[0];
  const operator = splitter[1];
  const rightDots = splitter[2];

  let dots = "";
  const dotsCount = eval(`${leftDots.length} ${operator} ${rightDots.length}`);

  if (dotsCount < 0) {
    return "The result of calculation is less than 0";
  }

  for (let i = 0; i < dotsCount; i++) {
    dots += ".";
  }

  return dots;
};

// log(calculate("..... // ."));
