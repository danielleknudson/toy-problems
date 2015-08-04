// TOY PROBLEM FROM codewars.com
// AUTHORED BY AlejandorLazaro (codewars.com/users/AlejandorLazaro)

// Write a function that takes to numbers (fangs) as input and determines if each digit in the inputs
// is also found in the product. 

// Example: 
// vampireNumbers(11,10); // false because there are a total of 3 ones in the inputs, but only 2 in the product (110)
// vampireNumbers(6,21); // true because each digit in the inputs also appears in the product (126) 

var vampireNumbers = function (a, b) {

  if ((a < 0 && b < 0) || (a === 0 && b === 0)) {
    return false;
  }

  var product = a * b,
    results = {},
    store = {},
    key,
    i;

  product = product.toString();
  a = a.toString();
  b = b.toString();

  var longestInput = (a.length >= b.length) ? a : b;
  var shortestInput = (a.length >= b.length) ? b : a;

  for (i = 0; i < longestInput.length; i++) {

    if (shortestInput[i] !== undefined) {
      if (store[shortestInput[i]] !== undefined) {
        store[shortestInput[i]] = store[shortestInput[i]] + 1;
      } else {
        store[shortestInput[i]] = 1;
      }
    }

    if (store[longestInput[i]] !== undefined) {
      store[longestInput[i]] = store[longestInput[i]] + 1;
    } else {
      store[longestInput[i]] = 1;
    }
  }

  for (i = 0; i < product.length; i++) {
    if (results[product[i]] !== undefined) {
      results[product[i]] = results[product[i]] + 1;
    } else {
      results[product[i]] = 1;
    }
  }

  for (key in store) {
    if (!results[key]) {
      return false;
    }

    if (results[key] < store[key]) {
      return false;
    }
  }
  return true;
};