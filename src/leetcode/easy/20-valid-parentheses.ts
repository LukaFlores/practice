//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//An input string is valid if:
//
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
// 
//
//Example 1:
//
//Input: s = "()"
//Output: true
//Example 2:
//
//Input: s = "()[]{}"
//Output: true
//Example 3:
//
//Input: s = "(]"
//Output: false
// 
//
//Constraints:
//
//1 <= s.length <= 104
//s consists of parentheses only '()[]{}'.


//Wrong Answer but along the lines
//function isValid(s: string): boolean {
//	const stack = []
//
//	for (let i = 0; i < s.length; i++) {
//		const top = stack[stack.length - 1]
//
//		if(s[i] === '(' || s[i] === '{' || s[i] === '['){
//			stack.push(s[i])
//		}else if( stack.length !== 0){
//			if(s[i] === ')' && top === '('){
//				stack.pop()	
//			}
//			if(s[i] === ']' && top === '['){
//				stack.pop()	
//			}
//			if(s[i] === '}' && top === '{'){
//				stack.pop()	
//			}
//		}else {
//			return false
//		}
//	}
//
//	return stack.length === 0
//
//};

//Optimized Answer

function isValid(s: string): boolean {
	if (s.length % 2 !== 0) return false;
  
  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
    
  for (let i = 0 ; i < s.length ; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    } 
  }
  return stack.length === 0;
}








console.log(isValid('()'))
//true
console.log(isValid('()[]{}'))
//true
console.log(isValid('(]'))
//false
console.log(isValid('(])'))
//false

