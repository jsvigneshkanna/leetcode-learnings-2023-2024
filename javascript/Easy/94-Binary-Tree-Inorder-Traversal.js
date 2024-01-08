/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inOrder;
var inorderTraversal = function(root) {
    inOrder = []
    getInOrder(root)
    return inOrder
};

const getInOrder = (root) => {
    if (root === null) {
        return
    }
    getInOrder(root.left)
    inOrder.push(root.val)
    getInOrder(root.right)
}
