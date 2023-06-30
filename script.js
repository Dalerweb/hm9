let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];

for (let num of nums) {
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
}

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

let students = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod'];
let longestName = '';

for (let student of students) {
  if (student.length > longestName.length) {
    longestName = student;
  }
}

console.log("Longest name:", longestName);

let pupils = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod'];
let number = prompt("Enter a number");

if (number >= 1 && number <= pupils.length) {
  let indexToRemove = number - 1;
  let removedPupils = pupils.splice(indexToRemove, 1);
  console.log("Removed pupils:", removedPupils[0]);
  console.log("Updated pupils:", pupils);
} else {
  console.log("Try again");
}

let cars = [20000, 16000, 40000, 30000, 35000, 60000, 13000, 15000, 45000, 110000];
let from = parseInt(prompt("Minimum price"));
let up = parseInt(prompt("Maximum price:"));

let filteredCars = cars.filter(function (car) {
  return car >= from && car <= up;
});

console.log("Filtered cars:", filteredCars);



let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];
let numberCount = 0;

for (let element of arr) {
  if (typeof element === 'number') {
    numberCount++;
  }
}

if (numberCount > 5) {
  console.log("Good");
}


