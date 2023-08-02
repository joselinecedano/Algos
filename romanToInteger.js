//************* Roman To Integar ************ */
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.


function romanToInt(romanNumeral) {
    // Define a mapping of Roman numerals to their corresponding values
    const romanToInteger = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    // Initialize the result variable to store the integer value
    let result = 0;
    
    // Initialize a variable to keep track of the previous value for comparison
    let prevValue = 0;
  
    // Loop through each character in the Roman numeral string
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const currentValue = romanToInteger[currentNumeral];
  
      // Check if the current value is greater than the previous value
      if (currentValue > prevValue) {
        // Since the current value is greater, it implies a subtraction scenario
        // Example: IV (4), IX (9), XL (40), XC (90), CD (400), CM (900)
        // So, subtract twice the previous value from the result
        result += currentValue - 2 * prevValue;
      } else {
        // The current value is not greater than the previous value, 
        // so simply add it to the result
        result += currentValue;
      }
  
      // Update the previous value for the next iteration
      prevValue = currentValue;
    }
  
    // Return the final integer value after processing the entire Roman numeral
    return result;
  }
  
console.log(romanToInt("III"));  // Output: 3
console.log(romanToInt("LVIII"));// Output: 58
console.log(romanToInt("MCMXCIV"));   // Output: 1994