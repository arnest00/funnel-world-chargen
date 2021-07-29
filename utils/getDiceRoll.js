export function getDiceRoll(sides, amt = 1) {
  let result = 0;

  for (let i = 0; i < amt; i++) {
    result += Math.floor(Math.random() * sides) + 1;
  };

  return result;
};