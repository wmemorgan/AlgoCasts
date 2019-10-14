// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

// NOTE: Confirm with interviewer if we can use insert/remove/getAt() for
// all LinkedList CRUD activities
class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.insertAt(data, 0);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		return this.getAt(0);
	}

	getLast() {
		return this.getAt(this.size() - 1);
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.removeAt(0);
	}

	removeLast() {
		this.removeAt(this.size() - 1);
	}

	insertLast(data) {
		this.insertAt(data, this.size());
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (counter < index) {
			if (!node) {
				return null;
			}

			node = node.next;
			counter++;
		}

		return node;
	}

	removeAt(index) {
		// Edge case: empty list handler
		if (!this.head) {
			return;
		}

		// Edge Case: delete the first node
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}

		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		// Edge Case: empty list
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}
// Manual Test Environment
const l = new LinkedList();

module.exports = { Node, LinkedList };

/**
 * Node: My Solution
 */
// class Node {
//   constructor(data, ...args) {
//     this.data = data
//     this.next = [...args][0] || null
//   }
// }
/**
 * LinkedList: Official Solution w/ my
 * own twist
 */
// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 	}

// 	insertFirst(data) {
// 		this.insertAt(data, 0);
// 	}

// 	size() {
// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			counter++;
// 			node = node.next;
// 		}

// 		return counter;
// 	}

// 	getFirst() {
// 		return this.getAt(0);
// 	}

// 	getLast() {
// 		return this.getAt(this.size() - 1);
// 	}

// 	clear() {
// 		this.head = null;
// 	}

// 	removeFirst() {
// 		this.removeAt(0);
// 	}

// 	removeLast() {
// 		this.removeAt(this.size() - 1);
// 	}

// 	insertLast(data) {
// 		this.insertAt(data, this.size());
// 	}

// 	getAt(index) {
// 		let counter = 0;
// 		let node = this.head;
// 		while (counter < index) {
// 			if (!node) {
// 				return null;
// 			}

// 			node = node.next;
// 			counter++;
// 		}

// 		return node;
// 	}

// 	removeAt(index) {
// 		// Edge case: empty list handler
// 		if (!this.head) {
// 			return;
// 		}

// 		// Edge Case: delete the first node
// 		if (index === 0) {
// 			this.head = this.head.next;
// 			return;
// 		}

// 		const previous = this.getAt(index - 1);
// 		if (!previous || !previous.next) {
// 			return;
// 		}

// 		previous.next = previous.next.next;
// 	}

// 	insertAt(data, index) {
// 		// Edge Case: empty list
// 		if (!this.head) {
// 			this.head = new Node(data);
// 			return;
// 		}

// 		if (index === 0) {
// 			this.head = new Node(data, this.head);
// 			return;
// 		}

// 		const previous = this.getAt(index - 1) || this.getLast();
// 		const node = new Node(data, previous.next);
// 		previous.next = node;
// 	}
// }

/******************************************
 * Official Solution
 ******************************************/
/**
 * Node: Official Solution
 */
// class Node {
//   constructor(data, next = null) {
//     this.data = data
//     this.next = next
//   }
// }

/**
 * LinkedList Official Solution #1
 */
// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 	}

// 	insertFirst(data) {
// 		this.head = new Node(data, this.head);
// 	}

// 	size() {
// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			counter++;
// 			node = node.next;
// 		}

// 		return counter;
// 	}

// 	getFirst() {
// 		return this.head;
// 	}

// 	getLast() {
// 		if (!this.head) {
// 			return null;
// 		}

// 		let node = this.head;

// 		while (node) {
// 			if (!node.next) {
// 				return node;
// 			}
// 			node = node.next;
// 		}
// 	}

// 	clear() {
// 		this.head = null;
// 	}

// 	removeFirst() {
// 		if (!this.head) {
// 			return;
// 		}

// 		this.head = this.head.next;
// 	}

// 	removeLast() {
// 		// Edge cases
// 		if (!this.head) {
// 			return;
// 		} else if (!this.head.next) {
// 			this.head = null;
// 			return;
// 		}
// 		let prev = this.head;
// 		let node = this.head.next;

// 		while (node.next) {
// 			prev = node;
// 			node = node.next;
// 		}

// 		prev.next = null;
// 	}

// 	insertLast(data) {
// 		const last = this.getLast();

// 		// Edge case
// 		if (last) {
// 			// There some existing nodes in our chain
// 			last.next = new Node(data);
// 		} else {
// 			// The chain is empty
// 			this.head = new Node(data);
// 		}
// 	}

// 	getAt(index) {
// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			if (counter === index) {
// 				return node;
// 			}

// 			counter++;
// 			node = node.next;
// 		}
// 		return null;
// 	}

// 	removeAt(index) {
// 		// Edge Case: empty list handler
// 		if (!this.head) {
// 			return;
// 		}
// 		// Edge Case: delete the first node
// 		if (index === 0) {
// 			this.head = this.head.next;
// 			return;
// 		}

// 		const previous = this.getAt(index - 1);
// 		if (!previous || !previous.next) {
// 			return;
// 		}
// 		previous.next = previous.next.next;
// 	}

// 	insertAt(data, index) {
// 		//Edge Case: empty list
// 		if (!this.head) {
// 			this.head = new Node(data);
// 			return;
// 		}

// 		if (index === 0) {
// 			this.head = new Node(data, this.head);
// 			return;
// 		}

// 		const previous = this.getAt(index - 1) || this.getLast();
// 		const node = new Node(data, previous.next);
// 		previous.next = node;
// 	}
// }
/**
 * LinkedList Official Solution #2: Code reuse
 */
// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 	}

// 	insertFirst(data) {
// 		this.insertAt(data, 0);
// 	}

// 	size() {
// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			counter++;
// 			node = node.next;
// 		}

// 		return counter;
// 	}

// 	getFirst() {
// 		return this.getAt(0);
// 	}

// 	getLast() {
// 		return this.getAt(this.size() - 1);
// 	}

// 	clear() {
// 		this.head = null;
// 	}

// 	removeFirst() {
// 		this.removeAt(0);
// 	}

// 	removeLast() {
// 		this.removeAt(this.size() - 1);
// 	}

// 	insertLast(data) {
// 		this.insertAt(data, this.size());
// 	}

// 	getAt(index) {
// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			if (counter === index) {
// 				return node;
// 			}

// 			counter++;
// 			node = node.next;
// 		}
// 		return null;
// 	}

// 	removeAt(index) {
// 		// Edge Case: empty list handler
// 		if (!this.head) {
// 			return;
// 		}
// 		// Edge Case: delete the first node
// 		if (index === 0) {
// 			this.head = this.head.next;
// 			return;
// 		}

// 		const previous = this.getAt(index - 1);
// 		if (!previous || !previous.next) {
// 			return;
// 		}
// 		previous.next = previous.next.next;
// 	}

// 	insertAt(data, index) {
// 		//Edge Case: empty list
// 		if (!this.head) {
// 			this.head = new Node(data);
// 			return;
// 		}

// 		if (index === 0) {
// 			this.head = new Node(data, this.head);
// 			return;
// 		}

// 		const previous = this.getAt(index - 1) || this.getLast();
// 		const node = new Node(data, previous.next);
// 		previous.next = node;
// 	}

// }
