/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(0)
    let temp = dummyNode
    let carrySum = 0
    while (l1 || l2 || carrySum >0) {
        let sum = carrySum
        if (l1) {
            sum+= l1.val
            l1 = l1.next
        }
        if (l2) {
            sum+= l2.val
            l2 = l2.next
        }
        carrySum = sum>9? Math.floor(sum/10): 0
        const tempSum = new ListNode(sum>9? sum%10: sum)
        temp.next = tempSum
        temp = temp.next
    }
    return dummyNode.next
};