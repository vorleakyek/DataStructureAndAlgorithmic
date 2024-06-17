//Compare if the two given trees have the same leaf value sequence. 
//NOTE: this solution might not be correct or complete 

function hasSameLeaves(root1, root2) {
	const seq1 = seqLeaves(root1);
	const seq2 = seqLeaves(root2);
	
	return seq1 === seq2;
}

class Node {
	constructor(value) {
		this.data = value;
		this.left = null;
		this.right = null;
	}
}

function seqLeaves(root) {
	
	const seqStr = ''; 
	
	if(root == null) return seqStr; 

	if(root.left == null && root.right == null) {
		seqStr += root.data; 
	}
	
	if(root.left != null) seq(root.left);
	if(root.right != null) seq(root.right);
	
}
