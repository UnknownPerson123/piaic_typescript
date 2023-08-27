"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
const arr = [
    -44, 91, -78, -41, -15, 48, 18, 84, -34, 44, 24, 87, -22, -92, -3, -58, -54,
    -20, 1, 90,
];
const updatedArr = arr.filter((el) => el > 0);
console.log(updatedArr);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const numArr = [
    45, 43, 39, 5, 87, 60, 76, 42, 88, 89, 23, 32, 40, 29, 96, 10, 48, 63, 100,
    93,
];
const updatedNumArr = numArr.map((el) => el * 2);
console.log(updatedNumArr);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const fruitArr = ["apple", "banana", "cherry", "date", "grape"];
const updatedFruitArr = fruitArr.filter((el) => el.length > 5);
console.log(updatedFruitArr);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
const numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const updatedNumArr1 = numArr1.filter((el) => el % 2 == 0).map((el) => el ** 2);
console.log(updatedNumArr1);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map((el) => el * (9 / 5) + 32);
console.log(fahrenheit);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const numbers = [3, 6, 9, 12, 15, 18];
const doubledOddNumber = numbers
    .filter((el) => el % 2 != 0)
    .map((el) => el * 2);
console.log(doubledOddNumber);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name) => {
    console.log(`${name}!`);
});
