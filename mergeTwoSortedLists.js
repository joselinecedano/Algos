// **************** Merge Two Sorted Lists ******************
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []



// ListNode constructor function to create linked list nodes
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  // Function to merge two sorted linked lists
  function mergeTwoLists(list1, list2) {
    // Create a new dummy node as the head of the merged list
    const dummy = new ListNode(-1);
    let current = dummy; // Pointer to keep track of the current position in the merged list
    let ptr1 = list1; // Pointer for list1
    let ptr2 = list2; // Pointer for list2
  
    // While both list1 and list2 have nodes to compare
    while (ptr1 !== null && ptr2 !== null) {
      // Compare the values of the nodes at ptr1 and ptr2
      if (ptr1.val <= ptr2.val) {
        // If the node in list1 has a smaller or equal value
        // Connect the current node in the merged list to the node in list1
        current.next = ptr1;
        ptr1 = ptr1.next; // Move ptr1 to the next node in list1
      } else {
        // If the node in list2 has a smaller value
        // Connect the current node in the merged list to the node in list2
        current.next = ptr2;
        ptr2 = ptr2.next; // Move ptr2 to the next node in list2
      }
  
      // Move the current pointer in the merged list to the next position
      current = current.next;
    }
  
    // Connect any remaining nodes from list1 or list2 to the merged list
    if (ptr1 !== null) {
      current.next = ptr1;
    } else {
      current.next = ptr2;
    }
  
    // Return the next of the dummy node, which is the head of the merged list
    return dummy.next;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToList(arr) {
    let head = null;
    let tail = null;
    for (let i = 0; i < arr.length; i++) {
      const newNode = new ListNode(arr[i]);
      if (!head) {
        // If the linked list is empty, make the new node the head and tail
        head = newNode;
        tail = newNode;
      } else {
        // Otherwise, connect the new node to the tail and update the tail to the new node
        tail.next = newNode;
        tail = newNode;
      }
    }
    return head;
  }
  
  // Helper function to convert a linked list to an array
  function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
      // Traverse the linked list and push each node's value into the result array
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  
// Example 1
const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);
const merged_list = mergeTwoLists(list1, list2);
console.log(listToArray(merged_list));
// Output: [1, 1, 2, 3, 4, 4]

// Example 2
const list3 = null;
const list4 = null;
const merged_list2 = mergeTwoLists(list3, list4);
console.log(listToArray(merged_list2));
// Output: []