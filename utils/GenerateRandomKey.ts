import crypto from "crypto";

export function generateRandomNumber() {
  function getRandomDigits() {
    const randomBytes = crypto.randomBytes(1);
    // Convert to a number in the range 0-999 and pad to 3 digits
    return (randomBytes[0] % 1000).toString().padStart(3, "0");
  }

  const part1 = getRandomDigits();
  const part2 = getRandomDigits();
  const part3 = getRandomDigits();

  return `#${part1}-${part2}-${part3}`;
}
