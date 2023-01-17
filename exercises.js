const isRealPalindrome = (str) => {
  const alphanumericOnly = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return alphanumericOnly === alphanumericOnly.split('').reverse().join('');
};

const runningTotal = (nums) => {
  let runningTotal = 0;
  return nums.map((num) => {
    runningTotal += num;
    return runningTotal;
  });
};

const swap = (str) => {
  return str.split(' ').map(word => word[word.length-1]+word.slice(1, -1)+word[0]).join(' ');
};

const wordSizes = (str) => {
  return str.split(' ').reduce((counts, word) => {
    let wordLength = word.length;
    counts[wordLength] = counts[wordLength] || 0;
    counts[wordLength] += 1;
    return counts;
  }, {});
};

const union = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

const firstRecurring = (str) => {
  let charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      return char;
    } else {
      charMap[char] = true;
    }
  }
  return '';
};

const showMultiplicativeAverage = (arr) => {
  let product = arr.reduce((acc, curr) => acc * curr);
  return (product / arr.length).toFixed(3);
};

const multiplyList = (arr1, arr2) => {
  return arr1.map((num, index) => num * arr2[index]);
};

const sequence = (n) => {
  return Array.from({length: n}, (_, i) => i + 1);
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
