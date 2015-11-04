# 53functions

You can think of 53 functions as small bite size programming challanges which aim to prepare coders to do Code Katas. Each coder will have to clone this repository and start to commit their implementation of the functions. A central CI instance will run their functions and give them a score for each function based on how many tests are passing. These functions are not to be completed in one sitting, but are to be completed in the coders' own time.

> Fifty-three is the 16th prime number. It is also an Eisenstein prime, and a Sophie Germain prime. The sum of the first 53 primes is 5830, which is divisible by 53, a property shared by few other numbers.

You should:
* fork this repo
* link your forked copy of the repo to the upstream repo to get changes easily
* To see how to do that have a look here: https://help.github.com/articles/syncing-a-fork/
* regularly update from upstream to check for changes
* use TDD
	* Always write the test code first - this will help you to understand what needs doing and get you in the habit of doing TDD.
	* Write the first 5 functions using your own framework - the one you created in the Codex Setup project called TestMyCode
	* Once done get your code and test reviewed by your Tech Mentor (André & Steve)
	* Once the first 5 tests are passing start looking at [Qunit](http://qunitjs.com/)
		* Rewrite the tests for the first 5 functions using Qunit.
	* From now on use Qunit to write all your tests
	* Setup [Travis](https://travis-ci.org) and Gulp to start monitoring your tests: https://github.com/codex-academy/QUnitSeed

**commit to Git regularly**

# These things count:
* regular commits
* testable code
* passing tests

# The functions

The function name and the file name should be the same

For example for hello.js the function should look like this:

```
function hello(){
	// your code goes here
}
```

Each function should have a test file called functionname_test.js

For ```hello.js``` it should be called ```hello_test.js```


> If any of these function specifications don't make sense, let's discuss, clarify and change it.

Create a function that:

 #|File name & function name | Write a function that?
---|---|---
1| hello.js | returns "hello world"
2| hello_uppercase.js| takes a username as parameter and returns "Hello, < USERNAME parameter >!"
3| hello_joe.js | takes a username as parameter and returns as "Hello, < USERNAME parameter >!" if the username is Joe or Bob only say "Hello!"
4| number_list.js |takes a number as a parameter (n) and returns a list of numbers from 1 to n
5| sum_numbers.js| takes a number as a parameter (n) and returns the sum of numbers from 1 to n
6| length.js|takes a string parameter and returns the length of the supplied parameter
7| upper.js |takes a string parameter and returns the supplied parameter in uppercase
8 |reverse.js|takes a string parameter and returns the reversed string parameter
9 |hello_list.js| takes a number as parameter and returns a list of "hello world" entries equal to the number supplied
10 |high_low.js| given a list of numbers returns the highest and lowest numbers in the list
11 | count_words.js|takes a sentence as a parameter and returns the number of words in the sentence
12 | sum_word_len.js |takes a sentence as a parameter and returns the sum of the length of words in the sentence
13 | longest_word.js | takes a sentence as a parameter and returns the longest word in the sentence and the length of the word
14|shortest_word.js|takes a sentence as a parameter and returns the shortest word in the sentence and the length of the word
15|word_length.js|takes a sentence as a parameter and returns both the average word length rounded up & down
16|avg.js|takes a sentence as a parameter and returns the average word length rounded up
17| letter_map.js | Write a function that takes a sentence as the input.The function should return a map. The keys of the map should be the first letters from the words in the sentence. The values should be an array of any words in the sentence that start with the key of the map. given :  ` "Let's do this today"  returns {"L" : ["Let's"], d : ["do"], "t" : ["this", "today"]}`
18|start.js|takes a sentence as a parameter and returns the letter most words starts with. Using letter_map.js will be usefull.
19|ends.js|takes a sentence as a parameter and returns the letter most words ends with. Using something similar to letter_map.js will be usefull.
20|occurs_most.js|takes a sentence as a parameter and returns the letter that occurs the most
21|occurs_least.js|takes a sentence as a parameter and returns the letter that occurs the least
22|uppercase_letters.js|that can find all the uppercase letters in a string
23|lowercase_letters.js|that can find all the lowercase letters in a string
24|draw.js | that takes a list of strings as a parameter and print each entry in the list to the screen.
25|square_stars.js|can draw a square shape using * it should be 4x4. Use the `draw` function you created above to display the results of the function on the screen. All subsequent functions that need to draw something on the screen should use the `draw` function. Why do you think we need the `draw` function?
26|square.js|can draw a square shape using the character supplied as a parameter it should be 4x4. Remember to use the `draw` function.
27|square_param.js|can draw a square shape using the character supplied as a parameter, the dimensions should be supplied by a parameter. Remember the `draw` function.
28|tri.js|can draw a triangle shape using \*, it should be have a base of 4
29|tri_char.js|can draw a triangle shape using the character supplied as a parameter, it should be have a base of 4
30|square_param_base.js|can draw a square shape using the character supplied as a parameter, the base should be supplied as a parameter
31|diamond.js|can draw a diamond shape using * the center of the diamond should be 5
32|diamond_base.js|can draw a diamond shape using the character supplied as parameter the base of the diamond should be 5
33|diamond_char_base.js|can draw a diamond shape using the character supplied as parameter the base of the diamond should be supplied as parameter.
34|add.js|can add two numbers
35|divide|can divide two numbers
36|calc_all.js|can add, subtract, multiply or divide 2 numbers - parameters are the symbol followed by the 2 numbers
37|calc_chain.js|has add, subtract, multiply and divide methods - methods should be chainable. Calculator.add(1,2).multiply(9).value() should equal 27
38|paper_rock.js|allows one to play rock paper scissors `* = rock, # = paper, x = scissors`, it should be a constructor function that takes in number of games to be played be played. `var game1 = new RockPaperScissors(3)` - it should have a `play` and a `score` method. The play method should generate a turn for each of the two players and return the result like this:  `{result : '* - x', winner : 'Player1', status : 'busy' }` until a game is done, in which case it should return a status of done whenever the play method is called. The score method should return a score like this : `{ Player1 : 1, Player2 : 2, winner : 'Player1' }` - the winner property should only be returned if a game has been won by a player.
39|factors2.js|find all the factors of 2 that is less than the number specified by the parameter
40|factors_2_or_7.js|find all the factors of 2 or 7 that are less than the number specified by the parameter
41|factors_2_and_7.js|find all the numbers that are factors of both 2 and 7 that are less than the number specified by the parameter
42|factorial.js|can calculate the factorial for a number supplied as a parameter
43|fibonacci.js| can calculate a fibonacci for the number supplied as a parameter
44|ascii_upper.js | find the sum of all the capital letter ASCII codes
45|ascii_params.js  | return the sum of all the ASCII codes for the word that is being passed in as a parameter.
46| mondays.js| when given a year find the number of mondays there were in that year
47| anyday.js| when given a year and a day of the week it can find the number of that weeks days that was in the year
48|dice_rolls.js| can simulate dice rolls for the number of times specified as a parameter - returns the result of the dice rolls.
49|lower_ascii_sum.js| given a string return the sum of all the lower case letter ASCII codes in the string.
50|multiples.js| that can count in multiples, it takes a parameter of the multiple to count in and have a .count() method to give the next number and a list function to return all the numbers that were already counted.
51|cricket.js| that solves this riddle: The common field cricket chirps in direct proportion to the current tem­perature. Adding 40 to the number of times a cricket chirps in a minute, then dividing by 4, gives us the temperature (in Fahrenheit degrees). Write a program that accepts as input the number of cricket chirps in fifteen seconds, then outputs the current temperature to the nearest half degree. http://users.csc.calpoly.edu/~jdalbey/101/HomeworkProblems.html
52|filter.js| takes a list of values and a filter function that can filter the list of values - the filtered result should be returned by the function. This function should be able to filter any kind of data, it shouldn't care about the data.
53 |tbd| ?
