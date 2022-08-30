// Given two strings s and t,
// return true if t is an anagram of s,
// and false otherwise.

const s1 = "anagram";
const t1 = "nagaram";

const s2 = "rat";
const t2 = "car";

const isAnagram = (s, t) => {
   const str1 = s.split("").sort().join("");
   const str2 = t.split("").sort().join("");

   return str1 === str2;
};

console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));
