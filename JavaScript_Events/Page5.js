// Creating and Accessing a JSON Object:

// Im creating here  JSON object
const person = {
    "firstName": "Suman",
    "lastName": "Sahni",
    "age": 24,
    "address": {
        "street": "Ejipura main roard",
        "city": "Bengaluru",
        "zip": "560047"
    }
};


console.log('First Name:', person.firstName);
console.log('Last Name:', person.lastName);
console.log('Age:', person.age);
console.log('Street:', person.address.street);
console.log('City:', person.address.city);
console.log('Zip:', person.address.zip);
