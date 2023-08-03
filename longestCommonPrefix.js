//*************** Longest Common Prefix  ****************** */
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


function longestCommonPrefix(strs) {
    // If the array is empty, return an empty string
    if (strs.length === 0) {
      return "";
    }
  
    // Find the shortest string in the array
    let shortestStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].length < shortestStr.length) {
        shortestStr = strs[i];
      }
    }
  
    // Iterate over characters in the shortest string
    let commonPrefix = "";
    for (let i = 0; i < shortestStr.length; i++) {
      const currentChar = shortestStr[i];
      // Check if the character is not common to all strings
      for (const str of strs) {
        if (str[i] !== currentChar) {
          // Return the prefix up to the point of mismatch
          return commonPrefix;
        }
      }
      // If the character is common to all strings, add it to the common prefix
      commonPrefix += currentChar;
    }
  
    // If all characters in the shortest string are common, return it
    return commonPrefix;
  }
  
  // Test cases
  const str1 = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(str1)); // Output: "fl"
  
  const str2 = ["dog", "racecar", "car"];
  console.log(longestCommonPrefix(str2)); // Output: ""