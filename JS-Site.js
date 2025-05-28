const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    while (true) {
        const guess = Number (prompt ("Введите число"));
        if (isNaN(guess)) {
            alert("Ошибка: введите число!");
            continue;}
        if (guess < randomNumber) {
            alert ('Загаданное число больше');} 
        else if (guess > randomNumber) {
            alert ('Загаданное число меньше');} 
        else {
            alert ('Вы угадали!');
            break;}
    }
}