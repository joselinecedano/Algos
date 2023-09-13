/*------------------------------------------
								CHALLENGE
--------------------------------------------

1) Code a function named charCount that
	 accepts a string as its only argument and
	 returns an object with the count of each
	 character in the string.
2) The returned object should have properties
	 where the keys are a character in the
	 string and the value is how many times the
	 character appears in the string argument.
3) Upper and lower case characters should be
	 counted separately.
4) Space characters should be counted too.

	 For example:

		charCount("Hello there")

		would return an object like this -->
			{ H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1 }

------------------------------------------*/

// Write the function here....
charCount = (str) => {
    let obj = {}; // will be used later to store key-value pairs
    for(let i = 0; i < str.length; i++) { // loop over str
       let char = str[i]; // save character to variable
 
       // Check if the character is a space
       if (char === " ") {
          if (" " in obj) {
             obj[" "]++; // increment the count of spaces
          }
          else {
             obj[" "] = 1; // initialize the count of spaces
          }
       }
       else {
          // Check if the character is already in the object
          if (char in obj) {
             obj[char]++; // increment the count of the character
          }
          else {
             obj[char] = 1; // initialize the count of the character
          }
       }
    }
    return obj;
 }
 
 
 /*------------------------------------------

 output:
 
 { L: 1, e: 1, t: 1, "'": 1, s: 1, G: 1, o: 7, "!": 2 }
 
 ------------------------------------------*/
 
 console.log(charCount("Let's Gooooooo!!"))