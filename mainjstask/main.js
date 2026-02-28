
// //task1
// let myarr = [1, 2, 3, 4, 5];
// console.log(myarr);

// //task2
// let yourarr = [1, 2, 3, 4, 5];
// console.log(yourarr[0]);

// //task3
// let arr = [1, 2, 3, 4, 5];

// console.log(arr[arr.length - 1]);  

// //task4
// let massiv = [10, 20, 30, 40];
// massiv[1] = 100;
// console.log(massiv);

// //task5
// let thisrarr = [1, 2, 3, 4, 5];

// thisrarr.push(6);

// console.log(thisrarr);

// //task6
// let thisearr = [1, 2, 3, 4, 5];

// thisearr.pop();

// console.log(thisearr);

// //task7 yazammadim

// //task8
// let fruits = ["alma", "banan", "armud", "heyva"];
// console.log(fruits.length);

// //task9 yazmadim

// //task10 yazammadim

// //task11
let menfiolmasin = arr.filter(num => num >= 0);
console.log(menfiolmasin);
//task12
let nesemassivdide = [1, 2, 3];
let n246elemeliyem = nesemassivdide.map(x => x * 2);
console.log(n246elemeliyem);

//task13
let numbers = [1, 2, 3, 4, 5];
let result = (num => [num, num * num]);
console.log(result)

//task14
const user = {
  name: "Gulsen",
  gender: "Qadin",
  birthday: "01.01.2005"
};

console.log(user.birthday);

//task15

const user2 = {
  name: "Gulsen",
  gender: "Qadin",
  birthday: "01.01.2005"
};

user2.age = 20;

delete user2.birthday;

console.log(user2);

//task16

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
};

car.color = "Blue";

console.log(car);

//task17
const user3 = {
  name: "Gulsen",
  address: {
    city: "Baki",
    country: "Azerbaijan"
  }
};

console.log(user3.address.city);

//task18
const product = {
  name: "Telefon",
  price: 150
};

if (product.price > 100) {
  console.log("Bahali mehsul");
} else {
  console.log("Ucuz mehsul");
}

//task19
const book = {
  title: "4 + 1",
  author: "Huseyn Nagili"
};

book.author = "Huseyn Nagili";

console.log(book);