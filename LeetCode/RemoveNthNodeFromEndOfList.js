/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    const length = getLength(head);
    
    if(length===1) {
       return null;
    }
     
    const indexToRemove = length - n; 
    
    if (indexToRemove === 0 ) {
        return head.next; 
    }
    
    let prevNode = null;
    let currentNode = head;
    let currentIndex = 0; 
    
    while (currentIndex < indexToRemove) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
    }
    
    prevNode.next = currentNode.next;   
    return head;
};

function getLength(head) { 
    let count = 0; 
    let currentNode = head;
    while(currentNode) {
        count++;
        currentNode = currentNode.next; 
    }
  
    return count; 
}


