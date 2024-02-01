// Counter with getter and setter:

function Counter() {
    let count = 0;

    this.getCount = function () {
        return count;
    };

    this.setCount = function (value) {
        if (value >= 0) {
            count = value;
        } else {
            console.error("Count must be a non-negative number.");
        }
    };
}

// Example usage:
const myCounter = new Counter();
console.log(myCounter.getCount()); 
myCounter.setCount(5);
console.log(myCounter.getCount()); 
myCounter.setCount(-2); 
