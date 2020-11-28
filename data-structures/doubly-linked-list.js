class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head;
    this.tail;
    this.size = 0;
  }

  printAll() {
    let head = this.head;
    if (head) {
      const result = [];
      while (head) {
        result.push(head.val);
        head = head.next;
      }
      return result;
    }
  }

  reversePrint() {
    let head = this.head;
    if (head) {
      const result = [];
      while (head.next) {
        head = head.next;
      }

      while (head) {
        result.push(head.val);
        head = head.prev;
      }
      return result;
    }
  }

  get(index) {}

  insertAtHead(data) {
    const node = new ListNode(data);
    if (this.head) {
      const next = this.head;
      node.next = next;
      next.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  insertAtTail(data) {
    const node = new ListNode(data);
    if (this.head) {
      let tail = this.tail;
      tail.next = node;
      node.prev = tail;
      this.tail = tail.next;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  clear() {
    let head = this.head;
    while (head) {
      let next = head.next;
      head.prev = head.next = null;
      head.val = null;
      head = next;
    }
    head = null;
    this.head = null;
    this.size = 0;
  }

  removeFirst() {
    if (this.head) {
      let head = this.head;
      let next = head.next;
      next.prev = null;
      this.head = next;
      this.size--;
    }
  }

  removeLast() {
    if (this.tail) {
      let tail = this.tail;
      let prev = tail.prev;
      prev.next = null;
      this.tail = prev;
      this.size--;
    }
  }

  removeAt(i) {
    if (this.head) {
      if (i < this.size / 2) {
        let head = this.head;
        let count = 0;
        while (count < i) {
          head = head.next;
          count++;
        }
        let prev = head.prev;
        let next = head.next;
        if (!prev) {
          next.prev = null;
          this.head = next;
        } else if (!next) {
          prev.next = null;
          this.head = prev;
        } else {
          prev.next = next;
          next.prev = prev;
        }
      } else {
        let tail = this.tail;
        let count = 0;
        while (count < this.size - i - 1) {
          tail = tail.prev;
          count++;
        }
        let prev = tail.prev;
        let next = tail.next;
        if (!prev) {
          next.prev = null;
        } else if (!next) {
          prev.next = null;
        } else {
          prev.next = next;
          next.prev = prev;
        }
      }

      this.size--;
    }
  }
}

let l1 = new DoublyLinkedList();
l1.insertAtHead(2);
l1.insertAtHead(1);
l1.insertAtTail(3);
l1.insertAtTail(4);
l1.removeFirst();
l1.removeLast();

l1.removeAt(1);

l1.printAll(); //?
l1.reversePrint(); //?
