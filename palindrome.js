//*********** Palindrome ***************
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


function isPalindrome(x) {
    // Convert the integer to a string
    const xString = x.toString();
  
    // Compare the original string with its reverse
    return xString === xString.split('').reverse().join('');
  }
  

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false