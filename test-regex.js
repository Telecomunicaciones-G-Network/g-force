const URL_REGEX = /(https?:\/\/[^\s]+)/g;

const text = 'hi https://google.com there';
const parts = text.split(URL_REGEX);
console.log(parts);

parts.forEach((part) => {
  console.log(`part: '${part}', match: ${!!part.match(URL_REGEX)}`);
});
