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
let preOrder
var preorderTraversal = function(root) {
    preOrder = []
    getPreOrder(root)
    return preOrder
};

const getPreOrder = (root) => {
    if (root === null) {
        return
    }
    preOrder.push(root.val)
    getPreOrder(root.left)
    getPreOrder(root.right)
    
}
