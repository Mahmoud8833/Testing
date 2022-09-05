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

function expandArray() {
  const myArray = [1, 1, 1];
  return function () {
    myArray.push(1);
    return myArray;
  };
}

const myNewArray = expandArray();
console.log(myNewArray());
console.log(expandArray());