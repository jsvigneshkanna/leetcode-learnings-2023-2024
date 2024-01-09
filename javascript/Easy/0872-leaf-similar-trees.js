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

let leftLeaf = []
let rightLeaf = []
var leafSimilar = function(root1, root2) {
    leftLeaf = []
    rightLeaf = []
    getLeaf(root1, "left")
    getLeaf(root2, "right")
    console.log(leftLeaf)
    console.log(rightLeaf)
    
    return leftLeaf.length == rightLeaf.length && leftLeaf.every((value, index) => value === rightLeaf[index]);
};

const getLeaf = (root, side) => {
    if (root !== null && root.left === null && root.right === null) {
        if (side=="left") {
            leftLeaf.push(root.val)
        }
        else {
            rightLeaf.push(root.val)
        }
        return
    }
    if (root.left) getLeaf(root.left, side)
    if (root.right) getLeaf(root.right, side)
    
}