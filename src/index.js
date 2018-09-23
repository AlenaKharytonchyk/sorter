class Sorter {
  constructor() {
    this.array = [];
    // your implementation
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;

  }

  toArray() {
    // your implementation
    return this.array;
  }

  compare(a, b) {

    if ((a - b) < 0)
      return -1;
    if ((a - b) === 0)
      return 0;
    else
      return 1;
  }

  sort(indices) {
    indices.sort(this.compare);
    // your implementation
    // indices - [1,2,3]
    var newArray = [];

    for (let i = 0; i < indices.length; i++) {
      const position = indices[i];
      newArray.push(this.array[position]);
    }

    if (typeof this.customComparer === "undefined") {
      newArray.sort(this.compare);
    } else {
      newArray.sort(this.customComparer);
    }


    for (let i = 0; i < newArray.length; i++) {
      const element = newArray[i];
      const position = indices[i];
      this.array[position] = element;
    }


  }

  setComparator(compareFunction) {
    this.customComparer = compareFunction;
    // your implementation
  }
}

module.exports = Sorter;