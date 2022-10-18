export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
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
