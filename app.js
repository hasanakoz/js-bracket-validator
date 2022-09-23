function isValid(p) {
  while (p.includes("[]") || p.includes("{}") || p.includes("()")) {
    p = p.replace("[]", "").replace("{}", "").replace("()", "");
  }
  if (p) {
    return `false because "${p}" doesn't have pair. `;
  } else {
    return true;
  }
}
console.log(isValid("[]{({})"));
