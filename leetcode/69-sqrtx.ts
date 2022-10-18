//Given a non-negative integer x, compute and return the square root of x.
//
//Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
//
//Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
//
// 
//
//Example 1:
//
//Input: x = 4
//Output: 2
//
//Example 2:
//
//Input: x = 8
//Output: 2
//Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
//
// 
//
//Constraints:
//
//    0 <= x <= 231 - 1
//
//





// My solution : But fails due to time
function mySqrt(x: number): number {
	let result = 0
	let y = 0

	for (let i = 0; i <= (x / y); i++) {
		const multiple = i*i

		if(multiple === x){
			result = i;
			break;
		}

		if	(multiple < x){
			result = i	
		}
		
		y++	
	}

	return result
};



console.log(mySqrt(1), "| ", 1)
console.log(mySqrt(4), "| ", 2)
console.log(mySqrt(8), "| ", 2)
console.log(mySqrt(9), "| ", 3)
console.log(mySqrt(11), "| ", 3)
console.log(mySqrt(14), "| ", 3)


//Runtime: 234 ms, faster than 5.78% of TypeScript online submissions for Sqrt(x).
//Memory Usage: 44.5 MB, less than 89.24% of TypeScript online submissions for Sqrt(x).







