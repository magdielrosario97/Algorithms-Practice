var letterCombinations = function (digits) {
   if (digits.length === 0) return [];
   const alpha = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
   };
   const results = [];
   const backtrack = (current, i) => {
      //   console.log("Current and i: ", current, i);
      if (i > digits.length - 1) {
         results.push(current);
         //  console.log("results: ", results);
         return console.log("returned");
      }
      const letters = alpha[digits[i]];
      //   console.log("alpha[digits: ", letters);
      for (const num of letters) {
         //  console.log(letters);
         //  console.log("first", current);
         backtrack(current + num, i + 1);
         //  console.log("current: ", current);
      }
   };
   backtrack("", 0);
   //    console.log("When does this ocurr");
   return results;
};
let digits = "234";
console.log(letterCombinations(digits));
