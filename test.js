
//-----------------------------------------
// A function for finding avarage num
// function average(...nums) {
//   let total = 0;
//   if (nums.length === 0) {
//     total = 0;
//     return total;
//   } else {
//     for (const num of nums) {
//       total += parseInt(num);
//     }
//     return total / nums.length;
//   }
// }

// console.log(average());
// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));

//-----------------------------------------
//Sum any number of arguments using the for of loop on a rest array

// function sum(...nums) {
//   let total = 0;
//   for (const num of nums) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

//Sum any number of arguments using the arguments object
// function sum() {
//   let total = 0;
//   for (const argument of arguments) {   the for of loop is for iterating over iterable data
//     total += argument;
//   }
//   return total;
// }

// console.log(sum(15, 88, 66, 44, 5, 2));

//-----------------------------------------

// Array.prototype.decimalfy = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toFixed(2);
//   }
// };

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const index in digits) {
//   console.log(digits[index]);
// }

//-----------------------------------------
//Recursion
// function rangeOfNumbers(startNum, endNum) {
//   const count = [];
//   if (startNum === endNum) {
//     count.push(startNum);
//     return count;
//   } else {
//     const count = rangeOfNumbers(startNum, endNum - 1);
//     count.push(endNum);
//     return count;
//   }
// }

// console.log(rangeOfNumbers(1, 5));

//-----------------------------------------
// template literal
// const cheetah = {
//   name: "Cheetah",
//   scientificName: "Acinonyx jubatus",
//   lifespan: "10-12 years",
//   speed: "68-75 mph",
//   diet: "carnivore",
//   summary:
//     "Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.",
//   fact: "Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.",
// };

// // creates an animal trading card
// function createAnimalTradingCardHTML(animal) {
//   const cardHTML = `<div class="card">
//         <h3 class="name">${animal.name}</h3>
//         <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
//         <div class="description">
//             <p class="fact">${animal.fact}</p>' +
//             <ul class="details">
//                 <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
//                 <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
//                 <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
//                 <li><span class="bold">Diet</span>: ${animal.diet}</li>
//             </ul>
//             <p class="brief">${animal.summary}</p>
//         </div>
//     </div>`;

//   return cardHTML;
// }

// console.log(createAnimalTradingCardHTML(cheetah));

//-----------------------------------------
//Recursion for count down
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const count = countdown(n - 1);
//     count.unshift(n);
//     return count;
//   }
// }
// console.log(countdown(10));

//-----------------------------------------
// Lookup Profile in cntacts
// //Setup
// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["Javascript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(firstName, prop) {
//   // Only change code below this line
//   var contact;

//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === firstName) {
//       contact = contacts[i];
//       break;
//     }
//   }

//   if (contact) {
//     if (contact.hasOwnProperty(prop)) {
//       return contact[prop];
//     } else {
//       return "No such property";
//     }
//   } else {
//     return "No such contact";
//   }
//   // Only change code above this line
// }

// /*
// SHORTER, BETTER VERSION
// function lookUp(firstName, prop){
// // Only change code below this line
//   for (var i=0; i<contacts.length; i++) {
//     var contact = contacts[i];
//     if (contact.firstName===firstName) {
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       }
//       return "No such property";
//     }
//   }
//   return "No such contact";
// // Only change code above this line
// }
// */

// // Change these values to test your function
// lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Harry", "likes");
// lookUpProfile("Bob", "number");
// lookUpProfile("Akira", "address");

//-----------------------------------------
//A function for counting cards and betting
//2,3,4,5,6   +1
//7,8,9  0
//10,J.Q,K,A  -1

// let count = 0;

// function cc(card) {
//   if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
//     count++;
//   } else if (card == 7 || card == 8 || card == 9) {
//     count += 0;
//   } else if (
//     card == 10 ||
//     card == "J" ||
//     card == "Q" ||
//     card == "K" ||
//     card == "A"
//   ) {
//     count--;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// }

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

//-----------------------------------------
//Using fs module
// const fs = require("fs");

// fs.writeFileSync("./new_file", "Hello Mahmoud");

// let result = fs.readFileSync("./new_file", "utf-8");
// console.log(result);

//-----------------------------------------
//testing
// const math = require("./test");

// test("add 5 to 6 equal 11", () => {
//   expect(math.sum(5, 6)).toBe(11);
// });

//-----------------------------------------
//Dealing with Module require
// const smm = require("./test");
// console.log(smm.sub(99, 65));
// console.log(smm.sum(99, 65));

//-----------------------------------------
//Dealing with Module export
// const sum = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// module.exports = { sum, sub };

//-----------------------------------------
// Working with REPL
// function sum(x, y) {
//   return x + y;
// }

// function sub(x, y) {
//   return x - y;
// }

// let oper = process.argv[2];
// let x = parseInt(process.argv[3]);
// let y = parseInt(process.argv[4]);

// if (oper == "sum") {
//   console.log(sum(x, y));
// } else {
//   console.log(sub(x, y));
// }

//-----------------------------------------
// A function for generating random color RGB values
// let btn = document.getElementById("btn-click");
// let bgColor = document.querySelector("header #bgcolor");

// function onBtnClick() {
//   let color1 = Math.floor(Math.random() * 256);
//   let color2 = Math.floor(Math.random() * 256);
//   let color3 = Math.floor(Math.random() * 256);

//   console.log(color1, color2, color3);
// }

// onBtnClick()

// alert("Button clicked");
//   bgColor.style.backgroundColor =
//     "rgb(" + color1 + "," + color2 + "," + color3 + ")";
// }

// btn.onclick = onBtnClick;

// btn.addEventListener("click", onBtnClick);

//-----------------------------------------
// building a class
// class Car {
//   static numberOfCars = 0     //static member
//   constructor (name, color,proYear) {
//     this.name = name
//     this.color = color
//     this.proYear = proYear
//     Car.numberOfAllCars()   //static method added to constructor to count Car objects
//   }
//   age(year) {
//     return year - this.proYear
//   }
//   static numberOfAllCars() {          // static method
//     Car.numberOfCars++
//   }
// }

//using the class for creating a new object
// const car1 = new Car('Tyota', 'black', 2002)
// const car2 = new Car('fgdf', 'dfgds', 1999)
// const car3 = new Car("fgdf", "dfgds", 1999);
// console.log(car1.age(2022));
// console.log(Car.numberOfCars)  // static member call
//-----------------------------------------
//Two Sums
// var number = [];

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         number = [i, j];
//       }
//     }
//   }
//   console.log(number);
// };

// twoSum([3, 2, 4], 6);

//-----------------------------------------
// countdown and background change
// let counter = document.getElementById("countdown");
// let bgImage = document.getElementById("bg-color").style;
// counter.style.fontSize = "700px";
// console.log(counter.style.fontSize);

// let interval = setInterval(function () {
//   counter.innerHTML > 0 ? (counter.innerHTML -= 1) : (counter.innerHTML = 0);

//   counter.style.fontSize = counter.innerHTML * 70 + "px";

//   counter.innerHTML % 2 === 0
//     ? (bgImage.backgroundColor = "gray")
//     : (bgImage.backgroundColor = "red");
//   console.log(counter.innerHTML);
//   if (counter.innerHTML <= 0) {
//     clearInterval(interval);
//   }
// }, 1000);

// let person = new Object();

// person.name = "mahmoud";
// person.age = 34;
// person.gender = "male";
// person.acount = function () {
//   return this.age * 5000;
// };

// delete person.acount();

// (IIFE) Immediately Invokable Function Expression
// let sayHello = (function(){
// 	return "Hello JavaScript Functions<br>";
// })();
// document.write(sayHello)

//-------------------------------------------
// Function Constructor

// let sayHello = new Function("{document.write('Hello JavaScript Functions <br>');}")
// sayHello()

//-------------------------------------------
// Function Expression

// let sayHello = function () {
// 	document.write("Hello JavaScript Functions<br>");
// }
// sayHello();

//-------------------------------------------
// Function Decleration

// function sayHello() {
// 	document.write("Hello JavaScript Functions<br>");
// }
// sayHello();
// sayHello();
// sayHello();

//-------------------------------------------
// for printing a star (astriks) pyramid

// var rows = 5;
// for (let i = 1; i <= rows; i++) {
// 	for (let k = 1; k <= (rows - i); k++) {
// 		document.write("&nbsp;");
// 	}

// 	for (let j = 1; j <= i; j++) {
// 		document.write("* ");
// 	}
// 	document.write("<br>");
// }

//-------------------------------------------
// for printing the multiplication table

// for (let i = 1; i <= 5; i++) {
// 	for (let t = 1; t <= 7; t++) {
// 		document.write(i, " x ", t, " = ", (i * t), "<br>");
// 		if (t == 7) {
// 			document.write("<br>")
// 		}
// 	}
// }

//-------------------------------------------
//find the sum of digits in any number

// let num = 88888;
// let lastDigit = 0;
// let sum = 0;

// while (num > 0) {
// 	lastDigit = num % 10;
// 	sum += lastDigit;
// 	num = parseInt(num / 10);
// }
// document.write(sum);

//----------------------------------------------
//Takes input from text field and adds it to a list

// function fun() {
// 	students = ["Ahmed", "Mahmoud", "Mohammed", "Ali"];
// 	let doi = document.getElementById("input").value;
// 	students.push(doi);

// 	let text = "<ol>";
// 	for (let i = 0; i < students.length; i++) {
// 		text += "<li>" + students[i] + "</li>";
// 	}
// 	text += "</ol>";
// 	document.getElementById("list").innerHTML = text;
// }
