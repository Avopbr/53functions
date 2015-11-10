// Let's test this function
function hello() {
    return "hello world";
}

test("make sure that helloWorld returns hello world", function(assert) {
    assert.equal(hello(), "hello world", "We expect the value to be hello world");
});


	function hello_uppercase(name) {
 	return "Hello, " + name;
	}

	test("make sure that hello returns hello and username parameter", function(assert) {
 	assert.equal(hello_uppercase("AVIWE"), "Hello, AVIWE", "We expect the value to be Hello, AVIWE");
 	}); 


		// function hello_joe() {
		// 	return "";
		// }

		// test("Should take username as parameter and returns as Hello or if the username is Joe or Bob only say Hello", function(assert) {
		// assert.equal(hello_joe(), "", "");                                                                             	
		// });


