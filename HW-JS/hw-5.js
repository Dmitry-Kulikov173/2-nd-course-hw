//Задание 1
function min(a, b) {
    if (a < b) {
    return a;
    }
    else {
    return b;
    }
}
function calculateMin() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    const result = min(a, b);
    document.getElementById('result').textContent = result;
}
const result = min(5, 3);
console.log(result);

//Задание 2
function checkParity(number) {
    if (number % 2 == 0) {
        return 'Число четное';
    }
    else {
        return 'Число нечетное';
    }
}
function checkParityNumber(){
    const number = parseFloat(document.getElementById('number').value);
    const resultNumber = checkParity(number)
    document.getElementById('resultNumber').textContent = resultNumber;
}

//Задание 3
function printSquare(number) {
    const square = number * number;
    console.log(`Корень числа ${number} равняется ${square}`);
}

function getSquare(number) {
    return number * number;
}

function squareResult(){
    const number = parseFloat(document.getElementById('square').value);
    const print = printSquare(number);
    const squareResult = getSquare(number);
    document.getElementById('squareResult').textContent = squareResult;
}
//Задание 4
function greetByAge() {
    const age = parseFloat(document.getElementById('age').value);;

    if (isNaN(age)) {
        alert("Ошибка: введите число!");
    }
    else if (age < 0) {
        alert("Вы ввели неправильное значение");
    }
    else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    }
    else {
        alert("Добро пожаловать!");
    }
    document.getElementById('ageResult').textContent = age;
}

//Задание 5
function multiplyNumbers(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    return 'Одно или оба значения не являются числом';
    }
    else {
    return Number(num1) * Number(num2);
    }
}

function multiNum(){
    const num1 = parseFloat(document.getElementById('multiNum1').value);
    const num2 = parseFloat(document.getElementById('multiNum2').value);
    const numResult = multiplyNumbers(num1, num2)
    document.getElementById('multiNumResult').textContent = numResult;
}

//Задание 6
function cubeNumber(number) {
    if (isNaN(number)) {
        return ("Переданный параметр не является числом");
    } else {
        const cube = number ** 3;
        return (`Число ${number} в кубе равняется ${cube}`);
    }
}

function displayResult() {
    const number = parseFloat(document.getElementById('cube').value);
    const cube = cubeNumber(number);
    console.log(cube);
    document.getElementById('numberCube').textContent = cube;
}

//Задание 7
const circle1 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
console.log(circle1.getArea())
console.log(circle1.getPerimeter())

const circle2 = {
    radius: 20,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
console.log(circle2.getArea())
console.log(circle2.getPerimeter())