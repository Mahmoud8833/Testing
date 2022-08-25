"use strict";

// let user = {
//   name: "John",
//   age: 30,
// };

// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name); // now user = { name: "Pete" }

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
//   alert(`hello, ${name}`);
// };
// sayHello("Mahmoud");
// alert(sayHello);

// function sayHello(name) {
//   alert(`Hello, ${name}`);
// }
// sayHello("Mahmoud");

// while (1) {
//   let i = prompt("Enter a number", "");
//   if (i > 100) {
//     break;
//   } else {
//     alert("try again");
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

// alert("Done!");

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");

//   if (!value) break; // (*)

//   sum += value;
// }
// alert("Sum: " + sum);

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

// alert("  -9  " + 5);

// let a = (1 + 2, 3 + 4);

// alert( a ); // 7 (the result of 3 + 4)

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// let result = confirm('are you 18+ years old?')
// alert(result)
// let fName = prompt('what is yor first name?', 'Mahmoud')
// let lName = prompt("what is yor last name?", 'Ali');
// alert(`Your full name is: ${fName+' '+lName}`)
// alert('Hello!')

/**
 * typeof operator x
 * console.log(typeof alert);
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
// alert(color); // #FF7F00
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

//First alert
//console.log("Hello JavaScript!");
