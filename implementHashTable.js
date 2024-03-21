class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currenBucket = this.data[address];

    if (currenBucket) {
      for (let i = 0; i < currenBucket.length; i++) {
        if (currenBucket[i][0] === key) {
          return currenBucket[i][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);
    return keysArray;
  }

  getAllValues() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    console.log(valuesArray);
    return valuesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 54);
myHashTable.get("apples");
myHashTable.getAllKeys();
myHashTable.getAllValues();
