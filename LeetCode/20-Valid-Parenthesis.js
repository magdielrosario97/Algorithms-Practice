const s1 = "()";
// Output: true;

const s2 = "()[]{}";
// Output: true;

const s3 = "(]";
// Output: false

// Given a string including a parenthesis
// Check if the opening and closing bracket is present and return true
// if not return false

var isValid = function (s) {
   let stack = [];

   for (let i = 0; i < s.length; i++) {
      let bracket = stack[stack.length - 1];
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
         stack.push(s[i]);
      } else if (bracket === "(" && s[i] === ")") {
         stack.pop();
      } else if (bracket === "{" && s[i] === "}") {
         stack.pop();
      } else if (bracket === "[" && s[i] === "]") {
         stack.pop();
      } else {
         return false;
      }
   }
   return stack.length ? false : true;
};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
