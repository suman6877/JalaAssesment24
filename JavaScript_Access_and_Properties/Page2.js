// Invoke a function using call() and apply():

function greet(message, punctuation) {
    console.log(message + this.name + punctuation);
}

const person = {
    name: 'Suman'
};

// Using call()
greet.call(person, 'Hello, ', '!'); 

// Using apply()
const args = ['Hi, ', '!'];
greet.apply(person, args); 
