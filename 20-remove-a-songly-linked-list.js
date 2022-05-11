// Time O(n) | Space O(1)

const reverse = (head) => {
	// if head is null or only 1 node, then return
	if (!head || !head.next) {
		return head;
	}

	// create list to do and reversed list
	let listTodo = head.next;
	let reversedList = head;
	reversedList.next = null;

	// logic is very simple: we are just setting [1, 2, 3] -> [3, 2, 1]
	// basically set 1.next -> null, 2.next -> 1, 3.next -> 2 which is [3, 2, 1]

	// simply while there is next node, keep going
	while (listTodo) {
		// saving value at temporary variable
		let temp = listTodo;
		// after saving value, save the next value to it
		listTodo = listTodo.next;
		// update the current node as the head of reversed list
		temp.next = reversedList;
		reversedList = temp;
	}
	// after that just return the reversed list
	return reversedList;
};

// Time O(n) | Space O(n)

// recursive method
let reverse2 = () => {
	// check if has value or 1
	if (!head || !head.next) {
		return head;
	}

	// create reversehead which we will return in the end
	let reverseHead = reverse(head.next);

	// set the head.next.next = head
	head.next.next = head;

	// set the head.next = null
	head.next = null;

	// and return result. voila
	return reverseHead;
};
