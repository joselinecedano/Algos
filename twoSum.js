//********** Two Sum *********** */
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. 

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    // Create an object to store the value-index pairs
    let numObj = {};

    // Traverse the array
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        // Calculate the difference needed to reach the target
        let difference = target - num;

        // Check if the difference is in the object (i.e., the pair is found)
        if (numObj[difference] !== undefined) {
            return [numObj[difference], i]; // Return the indices as an array
        }

        // If the difference is not in the object, add the current number and its index
        numObj[num] = i;
    }

    // If no such pair is found, return an empty array or raise an exception, depending on your preference
    // In this case, we'll return an empty array
    return [];
}


let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

