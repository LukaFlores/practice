//
//You are given the heads of two sorted linked lists list1 and list2.
//
//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//Return the head of the merged linked list.
//
//
//
//Example 1:
//
//Input: list1 = [1,2,4], list2 = [1,3,4]
//Output: [1,1,2,3,4,4]
//
//Example 2:
//
//Input: list1 = [], list2 = []
//Output: []
//
//Example 3:
//
//Input: list1 = [], list2 = [0]
//Output: [0]
//
//
//
//Constraints:
//
//    The number of nodes in both lists is in the range [0, 50].
//    -100 <= Node.val <= 100
//    Both list1 and list2 are sorted in non-decreasing order.
//

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  public head: ListNode | null = null;
  private len = 0;

  constructor(headElement?: ListNode) {
    this.head = headElement || null;
  }

  public append(elem: any) {
    let node = new ListNode(elem);
    let current: ListNode;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.len++;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

function start() {
  const list1 = new LinkedList(new ListNode(1));
  const list2 = new LinkedList(new ListNode(1));

  list1.append(2);
  list1.append(4);

  list2.append(3);
  list2.append(4);

  console.log(mergeTwoLists(list1.head, list2.head));
}

start();
