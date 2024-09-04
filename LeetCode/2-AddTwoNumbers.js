// Example 1
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
   // result linked list
   let result = new ListNode(0);
   let current = result;

   // variable carry for sum of 10+
   let carry = 0;

   // loop through both linked lists
   while (l1 !== null || l2 !== null) {
      // if val is not null ? use list val : else use 0
      let val1 = l1 !== null ? l1.val : 0;
      let val2 = l2 !== null ? l2.val : 0;

      // calculate sum of val1 + val2 + carry
      let sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);

      // create a new node for the result linked list
      current.next = new ListNode(sum % 10);
      current = current.next;

      // move to the next node
      if (l1 !== null) {
         l1 = l1.next;
      }

      if (l2 !== null) {
         l2 = l2.next;
      }
   }

   // if carry > 0
   if (carry > 0) {
      // create a new node with carry value
      current.next = new ListNode(carry);
   }

   // return the head
   return result.next;
};
