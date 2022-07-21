const omit = (properties, source) => Object.keys(source).filter(key => !properties.includes(key))
  .reduce((destination, key) => ({
    ...destination,
    [key]: source[key]
  }), {});

const x = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e"
};

const y = omit(["a", "e"], x);

console.log(y);