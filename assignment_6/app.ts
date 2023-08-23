// Assignment for the week is:
//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. 
// Return the modified array.
function updateData(arr:string[],index:number,value:string):string[]{
    return arr.splice(index,0, value);
}

//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents 
// after each operation
const listOfItems:string[] = []
function findItem(itemName:string):number{
    return listOfItems.indexOf(itemName)
}
function addItems(item:string){
    listOfItems.push(item)
}
function removeItems(itemName:string){
    const index = findItem(itemName)
    
    console.log(index);
    if(index>=0){
        listOfItems.splice(index,1)

    }else {
        console.log('Item not found')
    }
}
function updateItem(itemName:string, updatedItem:string){
    const index = findItem(itemName)
    
    console.log(index);
    if(index>=0){
        listOfItems.splice(index,1,updatedItem)
    }else {
        console.log('Item not found')
    }
}

// addItems('alo')
// addItems('paitha')
// addItems('piaz')
// addItems('chini')
// addItems('kadu')
// console.log(listOfItems);
// removeItems('alo')
// console.log(listOfItems);
// updateItem('paitha', 'aloo')
// console.log(listOfItems);


//  - Write a program that uses a while loop to print the first 25 integers.
let count = 0;
while (count<=25) {
    // console.log(count);
    count+=1
}
//  - Write a program that uses a while loop to print the first 10 even numbers.
count = 0;
let evencounter = 0;
while(evencounter<=10){
    if(count%2==0){
        evencounter+=1
        // console.log(count);
    }
    count+=1
}
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
let int = 5;

function factorial(int:number) {
    let result = 1;
    while(int>=1){
            result *=int;
        
        int = int -1 
    }

    return result
    
}
// console.log(factorial(10));

//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
const arr = [-44, 91, -78, -41, -15, 48, 18, 84, -34, 44, 24, 87, -22, -92, -3, -58, -54, -20, 1, 90]
let counter = 0
while (counter<arr.length) {
    if (arr[counter]<0) {
        arr.splice(counter,1)
        counter=counter -1
    }
    counter+=1
}
console.log(arr);
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
const numArr:number[] = [39, 74, 54, 8, 55, 34, 24, 97, 77, 35, 65, 48, 41, 21, 64, 5, 33, 50, 82, 98, 78, 18, 93, 19, 11, 100, 42, 17, 25, 79, 73, 71, 95, 14, 15, 46, 29, 16, 67, 89, 88, 13, 99, 20, 32, 10, 85, 61, 28, 37, 72, 23, 92, 76, 68, 38, 59, 94, 66, 44, 9, 81, 51, 58, 52, 36, 31, 53, 60, 96, 45, 75, 90, 27, 86, 57, 47, 22, 62, 2, 70, 49, 12, 3, 43, 7, 63, 87, 1, 40, 83, 56, 69, 30, 6, 4, 26, 80, 91, 84]

const calculateSum = (num:number[]):number=>{
    let sum = 0;
    let counter = 0
    while(counter<num.length){
        sum+=num[counter];
        counter+=1;
    }
    return sum
}
// console.log(calculateSum(numArr));
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store 
// the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
const temperature = [-44, 91, -78, -41, -15, 48, 18, 84, -34, 44, 24, 87, -22, -92, -3, -58, -54, -20, 1, 90]
const convertedTempurature:number[] = []

function fahrenheitConverter(celsius:number):number{
    return (celsius * 9/5) + 32
}
let newCounter = 0
while(newCounter < temperature.length){
    convertedTempurature.push(Math.floor(fahrenheitConverter(temperature[newCounter])))
    newCounter+=1
}
// console.log(convertedTempurature);