const hash = (str, limit) => {
  const prime = 7;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += (str.charCodeAt(i) * prime) % limit;
  }
  console.log(hash);
  return hash;
};

class HashTable {
  constructor() {
    this.table = new Array(this.limit);
    this.count = 0;
    this.limit = 5;
  }

  get(key) {
    const index = hash(key, this.limit);
    if (this.table[index]) {
      if (this.table[index][0][0] === key) {
        return this.table[index][0][1];
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    } else {
      return null;
    }
  }

  set(key, value) {
    const index = hash(key, this.limit);
    const newValue = [key, value];
    let inserted;
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        this.table[index].push(newValue);
        this.count++;
      }
    } else {
      this.table[index] = [newValue];
      this.count++;
    }
  }

  resize() {
    const loadFactor = count / 10;
    if (loadFactor > 0.8) {
      const copy = new Array(this.table.length * 2);
      for (let i = 0; i < this.table.length; i++) {
        copy[i] = this.table[i];
      }
      this.table = copy;
    }
  }

  remove(key) {
    const index = hash(key, this.limit);

    if (this.table[index]) {
      if (this.table[index][0][0] === key) {
        delete this.table[index][0];
      } else {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            delete this.table[index][i];
          }
        }
      }
      this.count--;
    }
  }
}

const ht = new HashTable();

ht.set("firstName", "Peter");
ht.set("lastName", "Zheng");
ht.set("age", 18);
ht.set("favoritefood", "Burger");

console.log(ht.get("firstName"));
console.log(ht.get("favoritefood"));
ht.remove("firstName");
ht.set("lastName", "Yu");
ht.set("lastName", "Zheng");
console.log(ht.get("favoritefood"));
console.log(ht.table);
