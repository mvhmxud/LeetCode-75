/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let counter = 0
    let headNode = head
    while(head){
        head = head.next
        counter+=1
    }
    counter = Math.floor(counter/2)+1
   while(counter > 1){
    counter-- 
    headNode = headNode.next
   }
    return headNode
};