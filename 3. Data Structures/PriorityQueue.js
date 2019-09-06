class PriorityQueue {
    constructor(arr = []) {
        this.arr = arr;
        this.keys = [];
        this.min = +Infinity;
        this.max = -Infinity;
        this.index = 0;
    }
    insert(key, value) {
        this.arr.push(key, value);
        this.keys.push(key);
        if (this.min > key) this.min = key;
        if (this.max < key) this.max = key;
    }
    extract(min = true) {
        (min) ? this.index = this.keys.indexOf(this.min, 0) : this.index = this.keys.indexOf(this.max, 0)
        return this.arr.splice(this.index * 2, 2);
    }
}
let queue = new PriorityQueue()
queue.insert(1, 3);
queue.insert(4, 6);
queue.insert(2, 8);
queue.insert(100, 8);
queue.insert(1, 5);
queue.extract(false);



















