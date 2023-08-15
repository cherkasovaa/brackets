module.exports = function check(str, bracketsConfig) {
  const obj = bracketsConfig.reduce((o, [k, v]) => Object.assign(o, { [k]: v }), {});
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in obj && !stack.includes(char)) {
      stack.push(char);
    } else {
      obj[stack[stack.length - 1]] !== char ? stack.push(char) : stack.pop();
    }
  }

  return !stack.length;
};
