// Adding properties to a function using prototypes:

function MyFunction() {
    this.property1 = 'Value 10';
  }
  
  MyFunction.prototype.property2 = 'Value 20';
  
  const instance = new MyFunction();
  
  console.log(instance.property1); 
  console.log(instance.property2); 
  