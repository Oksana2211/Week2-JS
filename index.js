function showMessage() {
  alert("Привет Кот!");
}

let showMessageFromCat = () => console.log("Я учу JavaScript!");
showMessageFromCat();

function my_click() {
  document.getElementById("image").src = "img/cat1.png";
}

function my_click1() {
  document.getElementById("image").src = "img/cat2.png";
}

//ЗАДАНИЕ **
let year = prompt("Високосный ли год?");
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
if (leapyear(year) === true) {
  alert("Год високосный");
} else {
  alert("Год не високосный");
}


///////////////////////////////////////////////////////
const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
//////////////////////////////////////////////////////////
//let age = prompt("Сколько тебе лет?"); //запишет строкой
//console.log(`Тебе ${age} лет!`);

// let yes = confirm('Продолжить программировать?');
// alert('Вы выбрали '+yes);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 10));

// function y(x) {
//   return x ** 2;
// }
// let result = y(3);
// console.log(result);

// function showMessageFromUser(name, message = "Пустой текст") {
//   console.log(name + ": " + message);
// }
// showMessageFromUser("Оксана", "привет!");

// (function (a, b) {
//   console.log(a + b);
// })(2, 5);

// function test(func) {
//   func(3, 5);
// }
// test(function (a, b) {
//   console.log(a + b);
// });

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(4, 5)
// );

// let sum = (a, b) => a + b;
// let result = sum(5, 5);
// console.log(result);

// let showMessageHi = () => console.log("Привет!");
// showMessageHi();

// let user = prompt("Как твое имя?");
// console.log("Привет, " + user + "!");

// function hiHuman(user) {
//   console.log("Привет, " + user + "!");
// }
// hiHuman("Оксана");

// let sum = (a, b) => a + b;
// let result = sum(5, 10);
// console.log(result);

// (function (a, b) {
//   console.log(a + b);
// })(5, 10);

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(5, 10)
// );

// function sum1(func) {
//   func(5, 10);
// }
// sum1(function (a, b) {
//   console.log(a + b);
// });

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(5, 10);
// console.log(result);

// function y(x) {
//   return x ** 2;
// }
// let result = y(3);
// console.log(result);

// function sum(a, b = 10) {
//   console.log(a + b);
// }
// sum(5);

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 10);

// let sum = (a, b) => console.log(a + b);
// sum(5, 10);

// function sum(a) {
//   console.log(5 + a);
// }
// sum(10);

// function sum(a) {
//   return a + 10;
// }
// console.log(sum(5));

// function showX(x) {
//   return x;
// }
// console.log(showX(28));

// function sum(x, y = 0) {
//   return x + y;
// }
// console.log(sum(5));
