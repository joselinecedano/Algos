// *************** Remove Duplicates From Sorted List *****************
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).




function removeDuplicates(nums) {
    // If the array is empty, there are no duplicates
    if (nums.length === 0) {
      return 0;
    }
  
    // Initialize variables to keep track of unique elements and previous element
    let uniqueCount = 1; // At least one unique element (the first one)
    let prevElement = nums[0]; // The first element is always unique
  
    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
      // Check if the current element is different from the previous element
      if (nums[i] !== prevElement) {
        // We found a new unique element
  
        // Move the unique element to its correct position in the array
        nums[uniqueCount] = nums[i];
  
        // Update the previous element to the current element for the next iteration
        prevElement = nums[i];
  
        // Increment the count of unique elements
        uniqueCount++;
      }
    }
  
    // Return the number of unique elements (k)
    return uniqueCount;
  }