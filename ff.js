const shoppingCart = ['bananas', 'milk'];



function addToShoppingCart(groceryItem) {
  if (groceryItem) {
    shoppingCart.push(groceryItem); // Add the grocery item to the shopping cart
  }

  if (shoppingCart.length > 3) {
    shoppingCart.shift(); // Remove the first item in the array
  }

  return 'You bought ' + shoppingCart.join(', ') + '!';  // Return the updated shopping cart as a string
}






// Test functions
function test1() {
  console.log(
    'Test 1: addToShoppingCart() called without an argument should leave the shopping cart unchanged'
  );
  const expected = 'You bought bananas, milk!';
  const actual = addToShoppingCart();
  console.assert(actual === expected);
}

function test2() {
  console.log('Test 2: addToShoppingCart() should take one parameter');
  const expected = 1;
  const actual = addToShoppingCart.length;
  console.assert(actual === expected);
}

function test3() {
  console.log('Test 3: `chocolate` should be added');
  const expected = 'You bought bananas, milk, chocolate!';
  const actual = addToShoppingCart('chocolate');
  console.assert(actual === expected);
}

function test4() {
  console.log('Test 4: `waffles` should be added and `bananas` removed');
  const expected = 'You bought milk, chocolate, waffles!';
  const actual = addToShoppingCart('waffles');
  console.assert(actual === expected);
}

function test5() {
  console.log('Test 5: `tea` should be added and `milk` removed');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

test();
/*
const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(groceryItem) {
  if (groceryItem) {
    shoppingCart.push(groceryItem); // Add the grocery item to the shopping cart
  }

  if (shoppingCart.length > 3) {
    for (let i = 0; i < shoppingCart.length - 3; i++) {
      shoppingCart.shift(); // Remove the first item in the array
    }
  }

  let itemsStr = shoppingCart.join(", ");
  return "You bought " + itemsStr + "!"; // Return the updated shopping cart as a string
}*/
