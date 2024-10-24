function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const text = "lorem impsum dolor sit amet";

console.log(capitalize(text));
