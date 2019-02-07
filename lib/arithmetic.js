'use strict';

const arithmetic = module.exports;

function isNum(n) {
  return typeof n === 'number';
}

function areNums(arr) {
  return arr.reduce((a, n) => a && isNum(n), true);
}

function isArrayOfNums(arr) {
  if (Array.isArray(arr) && areNums(arr)) return true;
}

arithmetic.add = (a, b) => {
  if (areNums([a, b])) return a + b;
  if (isArrayOfNums(a)) return a.reduce((a, n) => a + n);
  return null;
};

arithmetic.subtract = (a, b) => {
  if (areNums([a, b])) return a - b;
  if (isArrayOfNums(a)) return a.reduce((a, n) => a - n);
  return null;
};

arithmetic.multiply = (a, b) => {
  if (areNums([a, b])) return a * b;
  if (isArrayOfNums(a)) return a.reduce((a, n) => a * n);
  return null;
};

arithmetic.divide = (a, b) => {
  if (!areNums([a, b]) || b === 0) return null;
  return a / b;
};