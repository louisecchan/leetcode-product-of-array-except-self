// Given an integer array nums
// return an array answer such that
// answer[i] is equal to the product of
// all the elements of nums except nums[i].

// You must write an algorithm that runs in O(n) time
// and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function (nums) {
  let res = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = right * res[i];
    right = right * nums[i];
  }
  return res;
};

// https://dev.to/akhilpokle/product-of-array-except-self-a-mind-boggling-google-interview-question-1en1
