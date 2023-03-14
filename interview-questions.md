# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is built around objects rather than functions. I know there's more to it but at this time I can't recall everything, can I get back to you with this question later in the interview?

Researched answer: OOP is a programming paradigm that is based on the concept of objects. Object is an instance of a class that surrounds data and behavior and can interact with other objects.
Functional programming is another paradigm that is based around the concept of functions. A function takes an input argument and produces an output value without changing the state. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer: With a float you can use decimals in your equation and return an unrounded value. An integer can only be a whole number.

Researched answer: My answer was correct. A float is a number with a decimal point. In Ruby they're Float objects. An integer is a whole number and are useful for counting numbers that don't use decimals.

1. Ruby has an implicit return. What does that mean?

Your answer: I'm not completely sure what an implicit return is as I'm new to Ruby but I know it returns a specific value in a method.

Researched answer: An implicit return is viable if no explicit return statement is used. Which means the last evaluated expression in the method will be the return result in the method.

1. What is a block in Ruby?

Your answer: A block in Ruby is a line of code that can be executed within the method. This means between the def and end.

Researched answer: A piece of code within a block and be passed and executed within that methods context. It's a syntax construct. A block is enclosed by curley braces, do or end.

1. How do you extract a value in a Ruby hash?

Your answer: To extract a value in hash you need to use its key as an argument kind of like Javascript.

Researched answer: Hashes are a collection of key-value pairs. Each key responds to a single value. You can use the [] method to extract a value. If the key is not found the method will return 'nil'. The fetch method can also be used. The fetch method uses the key as the first argument and a default value as the second. 
There's also a values_at method wich is used to extract multiple values fom a hash by providing one or multiple keys which then returns an array of the corresponding value. 
Select method is used to extract a subset of key value pairs from a hash that meets specific conditions.
Keys and values method returns an array of all the keys or values in a hash.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance allows a new class based on an existing class inheriting its attributes and behaviors. It's call a sublass or derived class. thThe existing class is called the supercall or base class.

2. RSpec: Rspec is a testing framework for Ruby. It allows you to write automated tests for your code.These tests are defined by using the describe and it method.

3. CRUD: CRUD is an acronym that stands for Create, Read, Update, and Delete.

4. Test-driven development: TDD is a software development process that relies on requirements being converted to test cases. Before it's fullly devolped it tracks all software devolpment by testing the softwar against all the test cases.

5. HTTP: Hypertext transfer protocol is a protocol for communication between web servers and browsers. They communicate by exchanging indivicdual messages. The messages sent by the browser are called requests and the messages sent by the server are called responses.
