/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
   // pointer
   let k = 0;

   // loop through nums array
   for (let i = 0; i < nums.length; i++) {
      // if number at index is equal to value
      if (nums[i] !== val) {
         // overwrite element at index k
         nums[k] = nums[i];
         // increment k
         k++;
      }
   }
   // console.log(k);
   return k;
};

let testNums = [3, 2, 2, 3];
let testVal = 3;

removeElement(testNums, testVal);
