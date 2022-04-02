const { log } = console;

const calculate = (dotsToCalculate) => {
  if (typeof dotsToCalculate !== "string" || dotsToCalculate.length === 0) {
    return "Argument passed must be of type 'string' and cannot be empty string";
  }

  const splitter = dotsToCalculate.split(" ");
  const leftDots = splitter[0].length;
  const operator = splitter[1];
  const rightDots = splitter[2].length;
  let dotsCount;

  switch (operator) {
    case "+":
      dotsCount = leftDots + rightDots;
      break;
    case "-":
      dotsCount = leftDots - rightDots;
      break;
    case "//":
      dotsCount = Math.trunc(leftDots / rightDots);
      break;
    case "*":
      dotsCount = leftDots * rightDots;
      break;
    default:
      return "Invalid operator!";
  }

  if (dotsCount < 0) {
    return "The result of calculation is less than 0";
  }

  return ".".repeat(dotsCount);
};

log(calculate("..... // .."));
log(calculate("....... + ."));
log(calculate("... * .."));
log(calculate(".. - ."));
log(calculate(""));
log(calculate(4242));
