test("make sure that helloWorld returns hello world", function(assert) {
    assert.equal(hello(), "hello world", "We expect the value to be hello world");
    });

test("make sure that hello returns hello and username parameter", function(assert) {
	 assert.equal( hello_uppercase("Aviwe"), "Hello, AVIWE", "We expect the value to be Hello, AVIWE");
     });

test("It should take a username as parameter and returns as Hello, if the username is Joe or Bob only say Hello!", function(assert) {
	  assert.equal( hello_joe("Bob"), "Hello!");
	  assert.equal( hello_joe("AVIWE"), "Hello, AVIWE!");
	  assert.equal( hello_joe("Joe"), "Hello!");	
	  });

test("takes a number as a parameter (n) and returns a list of numbers from 1 to n", function(assert) {
	    assert.deepEqual( number_list(20) [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
		});

test("takes a number as a parameter (n) and returns the sum of numbers from 1 to n", function(assert) {
	     assert.deepEqual( sum_numbers(7), 28);
		 }); 

test("takes a string parameter and returns the length of the supplied parameter", function(assert) {
	      assert.deepEqual( length("Aviwe"), 5)
	      });

test("takes a string parameter and returns the supplied parameter in uppercase", function(assert) {
assert.equal( upper("Aviwe"), "AVIWE")
});

test("takes a string parameter and returns the reversed string parameter", function(assert){
	assert.equal( reversing("Aviwe"), "ewivA")
});
	
test("takes a number as parameter and returns a list of hello world entries equal to the number supplied", function(assert) {
assert.equal( Array("Hello World"), "Hello World");
 								 
});

test("given a list of numbers returns the highest and lowest numbers in the list", function(assert) {
	assert.deepEqual( (""), )
});

