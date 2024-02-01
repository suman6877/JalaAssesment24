// Program with FOR/IN Loop:
const person = {
    name: ' Suman',
    age: 24,
    occupation: 'Software Developer'
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  