// Symbol        Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
   let romanNums = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };

   // variable to store total
   let total = 0;

   // loop through the string
   for (i = 0; i < s.length; i++) {
      // current value
      let currVal = romanNums[s[i]];

      // next value
      let nextVal = romanNums[s[i + 1]];

      // if nextVal > currVal
      if (nextVal > currVal) {
         // total -= currVal
         total -= currVal;
      } else {
         // total += currVal
         total += currVal;
      }
   }

   // return total
   return total;
};
