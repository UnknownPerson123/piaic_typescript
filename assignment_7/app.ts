// Assignment for the week:
//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
const n:number = 100;
let sum:number = 0;
for (let i = 1; i <= n; i++) {
    sum+=i
}
console.log(sum);

//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
const numArr:number[] = [45, 43, 39, 5, 87, 60, 76, 42, 88, 89, 23, 32, 40, 29, 96, 10, 48, 63, 100, 93]
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i]%2==0) {
        console.log(numArr[i])
    }
}

//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones\
const newArr:number[] = [...numArr]
for (let i = 0; i < numArr.length; i++) {
    if (newArr[i]%2==0) {
        newArr.splice(i,1);
        i--
    }
}
console.log(newArr);

//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius:number):number {
    return 3.14*(radius**2)
}
console.log(areaOfCircle(3))

//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
const newGradeArr:number[] = [...numArr]
for (let i = 0; i < newGradeArr.length; i++) {
    if(newGradeArr[i]<50){
        newGradeArr.splice(i,1);
        i--
    }    
}
console.log(newGradeArr);


//  - Write a program that uses a function to find the largest element in an array of numbers.
let temp = numArr[0];
for (let i = 1; i < numArr.length; i++) {
    if(numArr[i]>temp)[
        temp = numArr[i]
    ]
}
console.log(temp);