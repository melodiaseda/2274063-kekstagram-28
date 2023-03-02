const isCheckLength = (string, length) => string.length <= length;
isCheckLength('проверяемая строка', 20);
isCheckLength('проверяемая строка', 18);
isCheckLength('проверяемая строка', 10);

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i --) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
isPalindrom('топот');
isPalindrom('ДоВод');
isPalindrom('Кекс');

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2003');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');

const exNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
exNumber('2023');
exNumber('-1.5');

const myPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad :
      pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};
myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');
