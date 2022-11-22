const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let delay = 0;
for (const character of spinner) {
  setTimeout(() => {
    process.stdout.write(character);
  }, delay);
  delay += 150;
}