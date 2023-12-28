// 1.
// Given an integer x, return true if x is a palindrome, and false otherwise.
function isPalindrome(x) {
    const str = String(x);
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
const number1 = 121;
const number2 = -121;
const number3 = 10;

console.log(isPalindrome(number1));  
console.log(isPalindrome(number2));  
console.log(isPalindrome(number3)); 




function isPalindrome(x) {
    const str = String(x);
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}
const number4 = 121;
const number5 = -121;
const number6 = 10;

console.log(isPalindrome(number4));  
console.log(isPalindrome(number5)); 
console.log(isPalindrome(number6)); 




function isPalindrome(x) {
    const str = String(x);
    return str === str.split('').reverse().join('');
}
const number7 = 121;
const number8 = -121;
const number9 = 10;

console.log(isPalindrome(number7));  
console.log(isPalindrome(number8));  
console.log(isPalindrome(number9));  



// 2.
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



// 3.
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. 
// The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
//  However, the numeral for four is not IIII. Instead, the number four is written as IV.
//  Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:



// 4.
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".



// 5.
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// 6.
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.



// 7.
// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, 
// you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the 
// order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
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



// 8.
// Given two strings needle and haystack, return the index of the first 
// occurrence of needle in haystack, or -1 if needle is not part of haystack.


// 9.
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.



// 10.
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring
// consisting of non-space characters only.


// 11.
// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. The digits are ordered from most
// significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.



// 12.
// Given two binary strings a and b, return their sum as a binary string.


// 13.
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
