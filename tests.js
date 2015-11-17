// Let's test this function
function hello() {
    return "hello world";
}

test("make sure that helloWorld returns hello world", function(assert) {
    assert.equal(hello(), "hello world", "We expect the value to be hello world");
});


		function hello_uppercase(name) {
		return "Hello, " + name.toUpperCase();
		};

		test("make sure that hello returns hello and username parameter", function(assert) {
		assert.equal( hello_uppercase("AVIWE"), "Hello, AVIWE", "We expect the value to be Hello, AVIWE");
		});



function hello_joe(name) {
	if(name === "Joe" || name === "Bob") {
		return "Hello!";
} 
return "Hello, " + name + "!";
};

test("It should take a username as parameter and returns as Hello, if the username is Joe or Bob only say Hello!", function(assert) {
assert.equal( hello_joe("Bob"), "Hello!");
assert.equal( hello_joe("AVIWE"), "Hello, AVIWE!");
assert.equal( hello_joe("Joe"), "Hello!");	
});

 		
 		
		function number_list(n) {
 		var numbers = [];
 			for (var x = 1; x <= n; x++) {
 				numbers.push[x];
 		} 
 		return numbers;
 		}

test("takes a number as a parameter (n) and returns a list of numbers from 1 to n", function(assert) {
assert.deepEqual( number_list(20) [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
});



function sum_numbers(n) {
	var sum = 0;
		for (var x = 0; x <= n; x++) {
			sum = sum + x;
} 
return sum;
};

test("takes a number as a parameter (n) and returns the sum of numbers from 1 to n", function(assert) {
assert.deepEqual( sum_numbers(7), 28);
}); 


		function length(username) {
		return "Aviwe".length;
		}

		test("takes a string parameter and returns the length of the supplied parameter", function(assert) {
		assert.deepEqual(length("Aviwe"), 5)
		});

	

