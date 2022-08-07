//
//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
//You must write an algorithm with O(log n) runtime complexity.
//
// 
//
//Example 1:
//
//Input: nums = [1,3,5,6], target = 5
//Output: 2
//
//Example 2:
//
//Input: nums = [1,3,5,6], target = 2
//Output: 1
//
//Example 3:
//
//Input: nums = [1,3,5,6], target = 7
//Output: 4
//
// 
//
//Constraints:
//
//    1 <= nums.length <= 104
//    -104 <= nums[i] <= 104
//    nums contains distinct values sorted in ascending order.
//    -104 <= target <= 104
//



function searchInsert(nums: number[], target: number): number {

	for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
};

function searchInsertBinary(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length

	while (left < right) {
		const middle = Math.floor((left+right) /2)

		if(nums[middle] < target){
			left = middle + 1
		}else{
			right = middle
		}
	}
	return left
};

console.log("== Binary Search ==")
console.log(searchInsertBinary([1,3],2), "| 1")
console.log(searchInsertBinary([1,3],4), "| 2")
console.log(searchInsertBinary([1,3,5,6],0), "| 0")
console.log(searchInsertBinary([1,3,5,6],5), "| 2")
console.log(searchInsertBinary([1,3,5,6],2), "| 1")
console.log(searchInsertBinary([1,3,5,6],7), "| 4")



console.log("== Search ==")
console.log(searchInsert([1,3],2), "| 1")
console.log(searchInsert([1,3],4), "| 2")
console.log(searchInsert([1,3,5,6],0), "| 0")
console.log(searchInsert([1,3,5,6],5), "| 2")
console.log(searchInsert([1,3,5,6],2), "| 1")
console.log(searchInsert([1,3,5,6],7), "| 4")
