/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function(root1, root2) {
    // get the leaves
    const getLeaf = (root, leaves) => {
        if (root !== null && root.left === null && root.right === null) {
            leaves.push(root.val)
            return
        }
        if (root.left) getLeaf(root.left, leaves)
        if (root.right) getLeaf(root.right, leaves)
    }
    
    const leftLeaf = []
    const rightLeaf = []
    getLeaf(root1, leftLeaf)
    getLeaf(root2, rightLeaf)
    
    return leftLeaf.length == rightLeaf.length && leftLeaf.every((value, index) => value === rightLeaf[index]);
};

