const  {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
} = require('./exercises');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/

test('isRealPalindrome', () => {
  expect(isRealPalindrome('madam')).toBe(true);
  expect(isRealPalindrome('Madam')).toBe(true);
  expect(isRealPalindrome("Madam, I'm Adam")).toBe(true);
  expect(isRealPalindrome('356653')).toBe(true);
  expect(isRealPalindrome('356a653')).toBe(true);
  expect(isRealPalindrome('123ab321')).toBe(false);
});

test('runningTotal', () => {
  expect(runningTotal([2, 5, 13])).toEqual([2, 7, 20]);
  expect(runningTotal([14, 11, 7, 15, 20])).toEqual([14, 25, 32, 47, 67]);
  expect(runningTotal([3])).toEqual([3]);
  expect(runningTotal([])).toEqual([]);
});

test('swap', () => {
  expect(swap('Oh what a wonderful day it is')).toBe("hO thaw a londerfuw yad ti si");
  expect(swap('Abcde')).toBe("ebcdA");
  expect(swap('a')).toBe("a");
});

test('wordSizes', () => {
  expect(wordSizes('Four score and seven.')).toEqual({ "3": 1, "4": 1, "5": 1, "6": 1 });
  expect(wordSizes('Hey diddle diddle, the cat and the fiddle!')).toEqual({ "3": 5, "6": 1, "7": 2 });
  expect(wordSizes("What's up doc?")).toEqual({ "2": 1, "4": 1, "6": 1 });
});

test('union', () => {
  expect(union([1, 3, 5], [3, 6, 9])).toEqual([1, 3, 5, 6, 9]);
  expect(union([2, 2, 2, 2], [10, 5, 2])).toEqual([2, 10, 5]);
});

test('firstRecurring', () => {
  expect(firstRecurring('reuben')).toBe("e");
  expect(firstRecurring('anne')).toBe("n");
  expect(firstRecurring('restaurant')).toBe("r");
  expect(firstRecurring('paul')).toBe("");
});

test('showMultiplicativeAverage', () => {
  expect(showMultiplicativeAverage([3, 5])).toBe("7.500");
  expect(showMultiplicativeAverage([2, 4, 6])).toBe("16.000");
  expect(showMultiplicativeAverage([2, 2])).toBe("2.000");
  expect(showMultiplicativeAverage([1, 2, 3, 4, 5])).toBe("24.000");
});

test('multiplyList', () => {
  expect(multiplyList([3, 5, 7], [9, 10, 11])).toEqual([27, 50, 77]);
  expect(multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([5, 20, 45, 80]);
  });
  
  test('sequence', () => {
  expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
  expect(sequence(3)).toEqual([1, 2, 3]);
  expect(sequence(1)).toEqual([1]);
  });
