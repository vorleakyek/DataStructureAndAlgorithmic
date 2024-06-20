//Solution from algoMonster 

// Define the structure of a TreeNode with TypeScript interface
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * Validates if the provided tree is a binary search tree.
 * @param {TreeNode | null} root - The root node of the binary tree to validate.
 * @return {boolean} - True if the tree is a valid BST; otherwise, false.
 */
const isValidBST = (root: TreeNode | null): boolean => {
  // Define the previous node to keep track of during in-order traversal
  let previous: TreeNode | null = null;

  /**
   * Performs in-order traversal to check each node's value strictly increasing.
   * @param {TreeNode | null} node - The current node in the traversal.
   * @return {boolean} - True if the subtree is valid; otherwise, false.
   */
  const inorderTraversal = (node: TreeNode | null): boolean => {
    if (node === null) {
      return true;
    }

    // Traverse the left subtree
    if (!inorderTraversal(node.left)) {
      return false;
    }

    // Check if the current node's value is greater than the previous node's value
    if (previous && node.val <= previous.val) {
      return false;
    }

    // Update the previous node to the current node
    previous = node;

    // Traverse the right subtree
    return inorderTraversal(node.right);
  };

  // Start the recursive in-order traversal from the root
  return inorderTraversal(root);
};

// Sample usage (in TypeScript you would normally type the input, here it is implicit for brevity)
// let tree: TreeNode = {
//   val: 2,
//   left: { val: 1, left: null, right: null },
//   right: { val: 3, left: null, right: null }
// };
// console.log(isValidBST(tree)); // Outputs: true
