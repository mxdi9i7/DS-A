class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  add(index, element) {
    const node = new ListNode(element);
    if (this.head) {
      if (index) {
        let head = this.head;
        let prev = head;
        let count = 0;
        while (count < index) {
          prev = head;
          head = head.next;
          count++;
        }
        prev.next = node;
        prev.next.next = head;
      } else if (index == 0) {
        let next = this.head.next;
        this.head = node;
        this.head.next = next;
      } else {
        let head = this.head;
        while (head.next) {
          head = head.next;
        }
        head.next = node;
      }
    } else {
      this.head = node;
    }
    this.size++;
  }

  addCollectionToEnd(head, collection) {
    let count = 0;
    let next = head.next;
    while (count < collection.length) {
      head.next = new ListNode(collection[count]);
      head = head.next;
      count++;
      this.size++;
    }
    head.next = next;
  }

  addAll(index, arr) {
    let head = this.head;

    if (index) {
      let iterator = 0;
      while (iterator < index - 1) {
        head = head.next;
        iterator++;
      }
      this.addCollectionToEnd(head, arr, index);
    } else if (index === 0) {
      const next = this.head;
      const dummy = new ListNode(null);
      let curr = dummy;
      let count = 0;
      while (count < arr.length) {
        const node = new ListNode(arr[count]);
        curr.next = node;
        curr = curr.next;
        count++;
        this.size++;
      }
      curr.next = next;
      this.head = dummy.next;
    } else {
      while (head.next) {
        head = head.next;
      }
      this.addCollectionToEnd(head, arr, index);
    }
  }

  addFirst(element) {
    const node = new ListNode(element);
    let head = this.head;
    if (head) {
      let next = head;
      node.next = next;
      this.head = node;
    } else {
      this.head = node;
    }
    this.size++;
  }

  addLast(element) {
    const node = new ListNode(element);
    let head = this.head;
    while (head.next) {
      head = head.next;
    }
    head.next = node;
    this.size++;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  contains(element) {
    let head = this.head;
    while (head) {
      if (head.data === element) return true;
      head = head.next;
    }
    return false;
  }

  element() {
    return this.head;
  }

  get(index) {
    let count = 0;
    let head = this.head;
    if (index < this.size) {
      while (count < index) {
        head = head.next;
        count++;
      }
      return head.data;
    }
  }

  indexOf(element) {
    let head = this.head;
    let i = 0;
    while (head) {
      if (head.data === element) return i;
      head = head.next;
      i++;
    }
    return -1;
  }

  lastIndexOf(element) {}

  reverse() {
    const dummy = new ListNode(null);
    let head = this.head;
    let next = dummy;
    let prev;
    while (head) {}
    return head;
  }

  toArray() {
    let head = this.head;
    const arr = [];
    while (head) {
      arr.push(head.data);
      head = head.next;
    }
    return arr;
  }
}

let list = new LinkedList();

list.addFirst(1);
list.addFirst(2);
list.addFirst(3);
list.addFirst(4);
list.addFirst(5);

list.size; //?

list.toArray(); //?

list.reverse(); //?
