//
//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
//
//Increment the large integer by one and return the resulting array of digits.
//
// 
//
//Example 1:
//
//Input: digits = [1,2,3]
//Output: [1,2,4]
//Explanation: The array represents the integer 123.
//Incrementing by one gives 123 + 1 = 124.
//Thus, the result should be [1,2,4].
//
//Example 2:
//
//Input: digits = [4,3,2,1]
//Output: [4,3,2,2]
//Explanation: The array represents the integer 4321.
//Incrementing by one gives 4321 + 1 = 4322.
//Thus, the result should be [4,3,2,2].
//
//Example 3:
//
//Input: digits = [9]
//Output: [1,0]
//Explanation: The array represents the integer 9.
//Incrementing by one gives 9 + 1 = 10.
//Thus, the result should be [1,0].
//
// 
//
//Constraints:
//
//    1 <= digits.length <= 100
//    0 <= digits[i] <= 9
//    digits does not contain any leading 0's.
//

//Base 10
// 1
// 10
// 100
// 1000

// FIRST TRY
//function plusOne(digits: number[]): number[] {
//	let counter = 1
//	let number = 0
//
//	for (let i = digits.length - 1; i >= 0; i--) {
//		number += digits[i]*counter
//		counter = counter * 10
//	}
//
//	return (number+1).toString().split('').map(Number)
//};
//

function plusOne(digits: number[]): number[] {
	
	let numbers = []
	let carry = false

	for (let i = digits.length - 1; i >= 0; i--) {
		if(i === digits.length - 1 || carry === true){
			if(digits[i] === 9){
				numbers.push(0)
				if(i === 0){
					numbers.push(1)
				}
				carry = true
			} else {
				carry = false
				numbers.push(digits[i] + 1)	
			}
			continue;
		}
		numbers.push(digits[i]);
	}
	return numbers.reverse()
};


console.log(plusOne([1,2,4]), "| [1,2,5]")
console.log(plusOne([4,3,2,1]), "| [4,3,2,2]")
console.log(plusOne([4,3,0,2,1]), "| [4,3,0,2,2]")
console.log(plusOne([9,9,9,9,9]), "| [1,0,0,0,0,0]")
console.log(plusOne([9]), "| [1,0]")
console.log(plusOne([1,9]), "| [2,0]")
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]), "| [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]")
