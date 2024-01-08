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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const sum = getSum(root, low, high)
    return sum
};

const getSum = (root,low, high) => {
    if (root === null) {
        return 0
    }
    if (root.val>=low && root.val<=high) {
        return root.val + getSum(root.left, low,high) + getSum(root.right, low, high)
    }
    else if (root.val < low) {
        return getSum(root.right, low,high) 
    }
    else {
        return getSum(root.left, low, high)
    }
}