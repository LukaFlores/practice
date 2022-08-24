//
//Implement strStr().
//
//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
//Clarification:
//
//What should we return when needle is an empty string? This is a great question to ask during an interview.
//
//For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
//
// 
//
//Example 1:
//
//Input: haystack = "hello", needle = "ll"
//Output: 2
//
//Example 2:
//
//Input: haystack = "aaaaa", needle = "bba"
//Output: -1
//
// 
//
//Constraints:
//
//    1 <= haystack.length, needle.length <= 104
//    haystack and needle consist of only lowercase English characters.
//

function strStrCheat(haystack: string, needle: string): number {
	return haystack.lastIndexOf(needle)
};

function strStr(haystack: string, needle: string): number {
    if (!needle.length) return 0;

	for (let i = 0; i < haystack.length; i++) {

		if (haystack[i] === needle[0]) {
			for (let j = 0; ; j++) {
				if (j === needle.length){
					return i;
				} else if (haystack[i + j] !== needle[j]) {
                    break;
                }
			}	
		}
	}
	return -1
};


//console.log(strStrCheat("hello", "ll"))
console.log(strStr("hello", "ll"))
//console.log(strStrCheat("aaaaa", "bba"))
console.log(strStr("aaaaa", "bba"))
//console.log(strStrCheat("a", "a")) console.log(strStr("a", "a"))
