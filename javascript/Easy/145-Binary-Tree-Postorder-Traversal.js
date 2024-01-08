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
let postOrder
var postorderTraversal = function(root) {
    postOrder = []
    getPostOrder(root)
    return postOrder
};

const getPostOrder = (root) => {
    if (root === null) {
        return 
    }
    getPostOrder(root.left)
    getPostOrder(root.right)
    postOrder.push(root.val)

}
