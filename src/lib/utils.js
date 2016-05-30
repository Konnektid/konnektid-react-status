
// pluck a key from an object
export const pluck = key => obj => obj[key];

// return the maximum of 2 values
export const max = (x, y) => x > y ? x : y;

// a function that does not do anything
export const noop = () => {};

// return whether the value is existing
export const exists = x => x !== null && typeof x !== "undefined";