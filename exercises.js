// Question 1
const isRealPalindrome = str => {
  str = str.toLowerCase();
  let strs = str.split(' ').join('');
  strs = strs.replace(/ -,'/);
  let newstr = " ";
  for (let i = str.length - 1; i >= 0; i--) {
      newstr += strs[i];
  }

  if (newstr.match(strs) || newstr.match(/[,']/)) {
      return true;
  }
  return false;
};


// Question 2


const runningTotal = arr => {
  let num = 0;
  return arr.map(value => {
      num += value;
      return num;
  });
};


// Question 3
const swap = string => string.split(' ').map((x, i) => (x.length > 1 ? x[x.length - 1] + x.slice(1, x.length - 1) + x[0] : x)).join(' ');

// Question 4
const wordSizes = s => {
  const se = s.split(" ");
  const count = {};
  se.map(word => ((count[word.length] >= 1) ? count[word.length] += 1 : count[word.length] = 1));
  return count;
};


// Question 5
const union = (arr1, arr2) => {
  const nums = [...arr1, ...arr2];
  const newarr = [];

  for (let i = 0; i < nums.length; i++) {
      if (!newarr.includes(nums[i])) {
          newarr.push(nums[i]);
      }
  }

  return newarr;
};

// Question 6
const firstRecurring = str => {
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] === str[j]) {
              return str[i];
          }
      }
  }
  return '';
};

// Question 7
const showMultiplicativeAverage = nums => {
  let sum = 1;
  for (let i = 0; i < nums.length; i++) {
      sum *= nums[i];
  }
  return (sum / nums.length).toFixed(3);
};

// Quetsion 8
const multiplyList = (arr1, arr2) => {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i] * arr2[i]);
  }

  return arr3;
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
