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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) {
        return true
    }
    const leftHeight = getDepth(root.left)
    const rightHeight = getDepth(root.right)
    return Math.abs(leftHeight- rightHeight)<=1 && isBalanced(root.left) && isBalanced(root.right)
};

const getDepth = (root) => {
    if (root === null) {
        return 0
    }
    return 1+ Math.max(getDepth(root.left), getDepth(root.right))
}
