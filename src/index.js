function greet(name) {
  if (!name) {
    return 'Hello, World!';
  }
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, add };
