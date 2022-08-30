// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element
// is distinct

const nums1 = [1, 2, 3, 1];
// Output: true

const nums2 = [1, 2, 3, 4];
// Output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true

const containsDuplicate = (nums) => {
   const totalReps = new Map(nums.map((i) => [i]));
   return totalReps.size !== nums.length;
};

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));
