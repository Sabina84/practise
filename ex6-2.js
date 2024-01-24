const cartForParty = {
    beers: 1.75,
    chips: 0.99,
    soda: 1.50,
    pizza: 10.99,
    cake: 7.99,
  };
  
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
  
    for (let item in cart) {
      totalPrice += cart[item];
    }
  
    return 'Total: €' + totalPrice.toFixed(2);
  }
  
  

  function test1() {
    console.log('Test 1: calculateTotalPrice should take one parameter');
    const expected = 1;
    const actual = calculateTotalPrice.length;
    console.assert(actual === expected);
  }
  
  function test2() {
    console.log('Test 2: return correct output when passed cartForParty');
    const expected = 'Total: €23.22';
    const actual = calculateTotalPrice(cartForParty);
    console.assert(actual === expected);
  }
  
  function test() {
    test1();
    test2();
  }
  
  test(); 