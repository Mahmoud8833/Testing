// const paraid = document.getElementById("paraId");
// console.log(paraid);

// const paraclass = document.getElementsByClassName('paraClass');
// console.log(paraclass);

// const tag = document.getElementsByTagName('span');
// console.log(tag);

// const qTag = document.querySelector('#paraId')
// console.log(qTag);

// const upperizedNames = ["Farrin", "Kagure", "Asser"].map((name) =>
//   name.toLocaleUpperCase()
// );
// console.log(upperizedNames);

// const hi = name => `Hello, ${name} !!`
// console.log(hi(`Mahmoud`));

// const sum = (...rests)=>{
//   let total = 0;
//   for(let rest of rests){
//     total += +rest
//   }
//   return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));

// class Car {
//   constructor(model, color, number, status) {
//     this.model = model;
//     this.color = color;
//     this.number = number;
//     this.status = status;
//   }
//   isNew() {
//     return this.status === "new" ? "car is new" : `car is ${this.status}`;
//   }
// }

// const car1 = new Car("BMW", "Black", 999, "new");
// console.log(car1);
// car1.price = {
//   priceNoVat: 10000,
//   priceWithVat: 10140,
// };
// console.log(Object.values(car1));

// Higher order function
// function alertThenReturn() {
//   console.log("Message 1!");

//   return function () {
//     console.log("Message 2!");
//   };
// }

// alertThenReturn()()

// const musicData = [
//   { artist: "Adele", name: "25", sales: 1731000 },
//   { artist: "Drake", name: "Views", sales: 1608000 },
//   { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
//   { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
//   { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
//   {
//     artist: "Original Broadway Cast Recording",
//     name: "Hamilton: An American Musical",
//     sales: 820000,
//   },
//   { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
//   { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
//   { artist: "Rihanna", name: "Anti", sales: 603000 },
//   { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
// ];

// const albumSalesStrings = musicData.map(function (obj) {
//   return `${obj.name} by ${obj.artist} sold ${obj.sales} copies`;
// }); // A call back in the map method

// console.log(albumSalesStrings);

// const musicData = [
//   { artist: "Adele", name: "25", sales: 1731000 },
//   { artist: "Drake", name: "Views", sales: 1608000 },
//   { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
//   { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
//   { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
//   {
//     artist: "Original Broadway Cast Recording",
//     name: "Hamilton: An American Musical",
//     sales: 820000,
//   },
//   { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
//   { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
//   { artist: "Rihanna", name: "Anti", sales: 603000 },
//   { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
// ];

// const results = musicData.filter(function (obj) {
//   if (obj.name.length >= 10 && obj.name.length <= 25) {
//     return obj;
//   }
// });

// console.log(results);

// function expandArray() {
//   const myArray = [1, 1, 1];
//   return function () {
//     myArray.push(1);
//     return myArray;
//   };
// }

// const myNewArray = expandArray();
// console.log(myNewArray());
// console.log(expandArray());

// const andrew = {
//   name: "Andrew",
// };

// function introduce(language) {
//   console.log(
//     `I'm ${this.name} and my favorite programming language is ${language}.`
//   );
// }

// introduce.call(andrew,'JavaScript');

// let myModule = (function (){
//   function privateMethod (message) {
//     console.log(message);
//   }

//   function publicMethod (message) {
//     privateMethod(message);
//   }

//   return {
//     publicMethod: publicMethod
//   };
// })();

// let myModule2 = (function () {
//   function privateMethod (message) {
//     console.log(message);
//   }

//   return {
//     publicMethod: function (message) {
//       privateMethod(message);
//     }
//   };
// })();

//NEEDS TO BE REVISED
// /*
//  * Programming Quiz: Build an HTML Fragment (1-2)
//  */

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

// // console.log(createAnimalTradingCardHTML(cheetah));

// let create = document.getElementById("btn");
// create.addEventListener("click", createAnimalTradingCardHTML(cheetah));

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.map(function (num) {
//   num % 2 == 0 ? (num += 10) : (num = 0);
//   return num
// });
// console.log(arr);
// console.log(newArr);

// let arr = [2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function (num) {
//   num % 2 == 0 ? (num += 10) : (num = 0);
//   console.log(num);
// });
// console.log(arr);

// let str = "stringify";

// // these are same for substring
// console.log( str.substring(2, 6) ); // "ring"
// console.log( str.substring(6, 2) ); // "ring"

// let str = "stringify";

// // start at the 4th position from the right, end at the 1st from the right
// console.log( str.slice(-4, -1) ); // 'gif'

// let str = "stringify";
// console.log( str.slice(2) ); // 'ringify', from the 2nd position till the end

// let str = "stringify";
// console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)

// console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
// console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

// console.log( "Widget".includes("id") ); // true
// console.log( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log(pos);
// }

// let str = "As sly as a fox, as strong as an ox";

// let target = "as"; // let's look for it

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log(`Found at ${foundPos}`);
//   pos = foundPos + 1; // continue the search from the next position
// }

// let str = 'Widget with id';

// console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

// console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

// console.log( 'Interface'.toUpperCase() ); // INTERFACE
// console.log( 'Interface'.toLowerCase() ); // interface

// for (let char of "Hello") {
//   console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }

// let a = 255.795;
// console.log(a.toString(36));
// console.log(a.toString(16));
// console.log(a.toString(8));
// console.log(a.toString(2));
// console.log(123456789..toString(16)); //note the double dot .. to cal a method to a number directly
// console.log(Math.ceil(a)); //gets the higher num
// console.log(Math.floor(a));  //gets the lower num
// console.log(Math.round(a));  //round the decimal parts
// console.log(Math.trunc(a)); //removes the decimal parts

// console.log(isNaN(55));
// console.log(isNaN("55"));
// console.log(isNaN("nn"));
// console.log(isFinite("mm"));
// console.log(isFinite(654e29500));
// console.log(Math.random());
// console.log(Math.max(3, 5, -10, 0, 1));
// console.log(Math.min(1, 2));
// console.log(Math.pow(2, 10));
// console.log(random(1, 5));

// function randomInteger(min, max) {
//   // now rand is from  (min-0.5) to (max+0.5)
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }

// console.log(randomInteger(1, 3));

// let user = {
//   name: "John",
//   age: 30,
// };

// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// console.log(user.name); // now user = { name: "Pete" }

// let clone = Object.assign({}, user);

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let salary in salaries) {
//   console.log(salaries[salary]);
//   sum += Number(salaries[salary]);
// }
// console.log(sum);

// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }
// const users = {};
// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(isEmpty(users));

// let a = 10;

// let sayHello = function (name) {
//   console.log(`hello, ${name}`);
// };
// sayHello("Mahmoud");
// console.log(sayHello);

// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }
// sayHello("Mahmoud");

// while (1) {
//   let i = prompt("Enter a number", "");
//   if (i > 100) {
//     break;
//   } else {
//     console.log("try again");
//   }
// }

//using label to break a nested loop
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// console.log("Done!");

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");

//   if (!value) break; // (*)

//   sum += value;
// }
// console.log("Sum: " + sum);

// for (let i = 0; i <= a; i++) {
//     console.log(i);;

// }

// do {
//     console.log(i);
//     i++
// } while (i <= a);

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//nullish coalescing => checks for the defined variable

// a===10? console.log(a): console.log('not 10');;
// if(a===10){
//     console.log(a);
// }else{
//     console.log('not 10');
// }

// console.log("  -9  " + 5);

// let a = (1 + 2, 3 + 4);

// console.log( a ); // 7 (the result of 3 + 4)

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// let result = confirm('are you 18+ years old?')
// console.log(result)
// let fName = prompt('what is yor first name?', 'Mahmoud')
// let lName = prompt("what is yor last name?", 'Ali');
// console.log(`Your full name is: ${fName+' '+lName}`)
// console.log('Hello!')

/**
 * typeof operator x
 * console.log(typeof console.log);
 *
 */

/**
 * object
 */

/**
 * undefined
 */

/**
 * null => nothing
 */

/**
 * Boolean
 * => true
 * => false
 */

/** string
 *let str1 = "mm"; // double quotes
 *let str2 = 'mm'; // single
 *let str3 = `mm`; // backticks
 *let str = `anything ${str3}`
 */

/**
 * Numbers
 * BigInt
 * JavaScript => 64bit Storage
 *  */

// const COLOR_ORANGE = "#FF7F00";
// let color = COLOR_ORANGE;
// console.log(color); // #FF7F00
// const myName = 'Mahmoud'

// let name = "Mahmoud",
//   age = 35,
//   gender = "Male";

// let message = "Hello!";
// console.log(message);

/**
 * an extended comment
 *
 *
 */

//____________________

//First console.log
//console.log("Hello JavaScript!");

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
