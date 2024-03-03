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
};