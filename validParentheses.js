//*********** Valid Parentheses ************ */ 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "(]"
// Output: false

function isValid(s) {
    // Create an empty array to simulate a stack
    const stack = [];
  
    // Define a mapping of open brackets to their corresponding closing brackets
    const brackets = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    // Loop through each character in the input string
    for (const char of s) {
      // Check if the character is an open bracket
      if (char === '(' || char === '[' || char === '{') {
        // If it's an open bracket, push it onto the stack
        stack.push(char);
      } else {
        // If it's a closing bracket
        // Retrieve the last open bracket from the stack
        const lastOpenBracket = stack.pop();
  
        // Check if the stack is empty (no matching open bracket found) or
        // if the closing bracket doesn't match the corresponding opening bracket
        if (!lastOpenBracket || brackets[lastOpenBracket] !== char) {
          // If any of the above conditions are true, the string is not valid
          return false;
        }
      }
    }
  
    // If all characters are processed, check if the stack is empty
    // If it's empty, all open brackets are matched properly, and the string is valid
    return stack.length === 0;
  }
  

  const s = "()";
  console.log(isValid(s)); // Output: true