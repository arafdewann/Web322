/* Name: MD ARAFAT KOYES 
Student ID: 13368229
Section: ZCC
Email: makoyes@myseneca.ca
Date: 2024-09-18 */
//Test-1

// 1. a JavaScript function using Object Literal Notation to create a 'Car' object, with properties.
const Car1 = {
    make: 'Honda',
    model: 'Civic Lx',
    year: 2019,
    displayInfo: function() {
        return `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
};
console.log(Car.displayInfo());

// 2. Method Implementation with this: Implement a method in the 'Car' object that uses "this".
const Car2 = {    // Can't use same Object name twice in one code. It will cause syntax error Car1 & Car2
    make: 'Honda',   // Car make
    model: 'Accord', // Car model
    year: 2021,  // Year of manufacture
    color: 'Blue', // Car color
    
    // Method to display car details
    displayInfo: function() {
        return `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }, // Method to change the car color
    changeColor: function(newColor) {
        this.color = newColor;   // Update car color
        console.log(`The car color has been updated to ${this.color}`);
    }
};

// Example usage
console.log(Car.displayInfo()); // Display initial car info
Car.changeColor('Black');   // Change the car color
console.log(Car.displayInfo()); // Display updated car info


// 3. Creating a class with a constructor and methods
class Rectangle {
    constructor(width, height) {
        // Assigning the width and height properties
        this.width = width;
        this.height = height;
    }
    
    // Method to calculate the area of the rectangle
    getArea() {
        return this.width * this.height;
    }
    
    // Method to calculate the perimeter of the rectangle
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Testing the Rectangle class
const myRectangle = new Rectangle(5, 10); // Creating a new rectangle
console.log(myRectangle.getArea());        
console.log(myRectangle.getPerimeter());   


// 4. Adding private properties with getters and setters in Rectangle
class RectangleWithPrivate {
    // Defining private properties using # sign
    #width;
    #height; 
    //The `RectangleWithPrivate` class uses `#` for private properties and includes getters and setters with validation. It throws an error if invalid values are assigned.

    constructor(width, height) {
        // Setting the private properties
        this.#width = width;
        this.#height = height;
    }

    // Getter for width
    get width() {
        return this.#width;
    }

    // Setter for width with validation
    set width(value) {
        if (value > 0) {  // Making sure the width is positive
            this.#width = value;
        } else {
            throw new Error('Width must be a Positive number');
        }
    }

    get height() {
        return this.#height;
    }

    // Setter for height with validation
    set height(value) {
        if (value > 0) {  // Making sure the height is positive
            this.#height = value;
        } else {
            throw new Error('Height must be a Positive number');
        }
    }

    // Method to calculate the area
    getArea() {
        return this.#width * this.#height;
    }

    // Method to calculate the perimeter
    getPerimeter() {
        return 2 * (this.#width + this.#height);
    }
}

// Testing the private properties and methods
const myPrivateRectangle = new RectangleWithPrivate(10, 20);
console.log(myPrivateRectangle.getArea());  
myPrivateRectangle.width = 6;  // Setting a new width
console.log(myPrivateRectangle.getPerimeter());  //so


// 5. Iterating over an array using for...of
const fruits = ['Apple', 'Orange', 'Jackfruit'];

// Using for...of to loop over the fruits array
for (const fruit of fruits) {
    console.log(fruit);  
}


// 6. Doubling each number in an array with forEach()
const numbers = [1, 2, 3, 4];

// Using forEach to double each number in the array
numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;  // Doubling each number
});
console.log(numbers);  // Should output [2, 4, 6, 8]


// 7. Extracting the first two elements of an array using destructuring
const arr = [10, 20, 30, 40];

// Using destructuring to get the first two elements
const [first, second] = arr;
console.log(first, second);  


// 8. Writing an arrow function to sum two parameters
const sum = (a, b) => a + b;  // Arrow function to add two numbers
console.log(sum(5, 10));  


// 9. Creating a greeting message using template literals
const greet = (name) => `Hello, ${name}! Welcome to the site.`;  // Using template literals for dynamic strings
console.log(greet('John'));  


// 10. Implementing error handling using try/catch
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed'); // Throwing an error for division by zero
        }
        return a / b;
    } catch (error) {
        console.log('Error:', error.message); // Catching and logging the error
    }
 }

// Testing error handling
console.log(divide(10, 2)); 
console.log(divide(10, 0));  


// 11. Throwing a custom error for non-numeric arguments
function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');  
    }
    return a + b;
 }

try {
    console.log(addNumbers(5, 'ten'));  // Testing with an invalid argument
} catch (error) {
    console.log('Error:', error.message);  
}

// 12. Combining two arrays using spread syntax
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Using spread syntax to combine the arrays
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);  
