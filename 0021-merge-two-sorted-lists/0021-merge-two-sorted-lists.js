let mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode(-1);
    let current = newHead;
    while(list1 || list2){

        if(list2 == null || (list1 !== null && list1.val <= list2.val)){
            newHead.next = list1;
            newHead = newHead.next;
            list1 = list1.next;
        } else {
            newHead.next = list2;
            newHead = newHead.next;
            list2 = list2.next;
        }
    }
    return current.next;
};