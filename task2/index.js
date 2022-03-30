const { log } = console;
// FIRST SOLUTION TO TASK 2:

// const grid = (num) => {
//   if (num < 0) {
//     return null;
//   }

//   let result = "";
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".repeat(num);

//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       result += alphabet[j + i];
//     }
//     result += "\n";
//   }

//   return result;
// };

// log(grid(20));

// --------------------------------------------------------------------------
// SECOND SOLUTION TO TASK 2:

const grid = (num) => {
  if (num < 0) {
    return null;
  }

  let result = "";
  const firstLetterCharcoded = "a".charCodeAt();

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += String.fromCharCode(firstLetterCharcoded + ((i + j) % 26));
    }
    result += "\n";
  }

  return result;
};

log(grid(25));
