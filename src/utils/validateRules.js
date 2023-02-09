export default {
  isRequired: (value) => Boolean(value.trim()),
  isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
  isUrl: (value) => /^https?:\/\/\S+$/g.test(value),
  min: (value, length) => value.length >= length,
  isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
  isContainDigit: (value) => /\d+/g.test(value),
  isFIO: (value) =>
    /^([a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{1,}'?-?[a-zA-Zа-яА-Я]{2,}\s?([a-zA-Z]{1,})?)/g.test(
      value
    ),
  isContainValue: (array, value) => array.includes(value),
};
