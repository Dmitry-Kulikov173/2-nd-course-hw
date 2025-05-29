let password = "Сокол12345";
let UserPassword = prompt ("Ведите пароль");
let c = 0
let d = 110;
let e = 90;
let a = '2';
let b = '3';
let monthNumber = 12;

alert (UserPassword === password ? "Доступ разрешён" : "Доступ запрещён");

if (c >= 0 && c <= 10) {
    console.log ("Верно");
} else {
    console.log ("Неверно");
}


if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

alert(+a + +b);

switch (monthNumber) {
            case 12:
            case 1:
            case 2:
                console.log('Зима');
        break;
            case 3:
            case 4:
            case 5:
                console.log('Весна');
        break;
            case 6:
            case 7:
            case 8:
                console.log('Лето');
        break;
            case 9:
            case 10:
            case 11:
                console.log('Осень');
        break;
    default:
      if (monthNumber > 12) {
        console.log('Номер месяца некорректен');
      }
}