class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next
    }

    front() {
        if (!this.head) {
            console.log("null")
            return null;
        }
        console.log(this.head.data)
    }

    display() {
        if (!this.head) {
            console.log("null")
            return null
        }
        let runner = this.head
        while (runner !== null) {
            console.log(this.head.data)
            runner = runner.next;
        }
    }
}

// SLL1 = new LinkedList();
// SLL1.addFront(18)
// console.log(SLL1)
// SLL1.addFront(5)
// console.log(SLL1)
// SLL1.addFront(73)
// console.log(SLL1)
// SLL1.removeFront();
// console.log(SLL1)
// SLL1.removeFront();
// console.log(SLL1)
// SLL1.front();
// SLL1.removeFront();
// SLL1.front();

SLL1 = new LinkedList()
SLL1.addFront(76)
SLL1.addFront(2)
SLL1.display()
SLL1.addFront(11.41)
SLL1.display()