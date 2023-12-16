var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newValue) {
  window.bestCustomer = newValue;
}

const leastFavoriteCustomer = 'not-Ian';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new not-Ian'; 
}