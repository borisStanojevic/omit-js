const omit = (properties, source) => {
  if (!Array.isArray(properties))
    throw Error("Properties argument must be an array.");
  if (source === undefined || source === null)
    throw Error("Source argument cannot be undefined or null.");
  if (typeof(source) !== "object")
    throw Error("Source argument must be an object.");

  if (properties.length === 1) {
    const {
      [properties[0]]: _, ...rest
    } = source;
    return rest;
  }

  return Object.keys(source).filter(key => !properties.includes(key))
    .reduce((destination, key) => ({
      ...destination,
      [key]: source[key]
    }), {});
}

const x = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e"
};

const y = omit(["a"], x);

console.log(y);