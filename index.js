// Write your solution in this file!
// Declare a variable in global scope called customerName
var customerName = 'bob';

// Function that uppercases the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a variable bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // This will be declared in global scope
}

// Function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // This will overwrite the global bestCustomer
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'alice';

// Function that attempts to change the leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'; // This will cause an error because leastFavoriteCustomer is a constant
}
