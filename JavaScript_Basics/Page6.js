// Strict Mode and Variable Not Declared Error:

'use strict';

try {
  undeclaredVariable = 10; // This will throw an error in strict mode
} catch (error) {
  console.error(error.message); 
}
