//Задание 1
console.log("Привет");
console.log("Привет");

//Задание 2
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//Задание 3

let p = 7;

while (p <= 22) {
    console.log(p);
    p++;
}

//Задание 4
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
}

for (let name in obj) {
  if (obj.hasOwnProperty(name)) 
    {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
    }
}

//Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Результат: " + n);
console.log("Количество итераций: " + num);

//Задание 6
let firstFriday = 3;

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
}

