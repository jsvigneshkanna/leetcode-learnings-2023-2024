/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // return with2Pass(head, n)
    return with1Pass(head, n)
};

const with1Pass = (head, n) => {
    let slow = head
    let fast = head
    for (let index=0; index<n; index++) {
        fast = fast.next
    }
    if (!fast) {
        return head.next
    }
    fast = fast.next
    
    while (fast) {
        fast=fast.next
        slow=slow.next
    }
    slow.next = slow.next.next
    return head
}

const with2Pass = (head, n) => {
    let length = 0
    let dummyNode = head
    while (dummyNode) {
        length++
        dummyNode = dummyNode.next
    }
    if (length===n) {
        return head.next
    }
    length = length- n-1
    let result = new ListNode(0)
    result.next = head
    while (length>0) {
        head = head.next
        length--
    }
    head.next = head.next.next
    return result.next
}