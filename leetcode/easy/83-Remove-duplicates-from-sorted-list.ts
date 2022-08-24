//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
//
//
//
//Example 1:
//
//Input: head = [1,1,2]
//Output: [1,2]
//
//Example 2:
//
//Input: head = [1,1,2,3,3]
//Output: [1,2,3]
//
//
//
//Constraints:
//
//    The number of nodes in the list is in the range [0, 300].
//    -100 <= Node.val <= 100
//    The list is guaranteed to be sorted in ascending order.
//

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { LinkedList, ListNode } from '../structures/list';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  return head;
}

function run(list: number[]) {
  const list1 = new LinkedList(new ListNode(1));

  list.map((num) => list1.append(num));

  return deleteDuplicates(list1.head);
}

console.log(run([1, 1, 2]), '[1,2]');
console.log(run([1, 1, 2, 3, 3]), '[1,2,3]');
